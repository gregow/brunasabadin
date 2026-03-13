from fastapi import FastAPI, APIRouter, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB — accepts MONGO_URL or MONGODB_URL
mongo_url = os.environ.get('MONGO_URL') or os.environ.get('MONGODB_URL')
db_name = os.environ.get('DB_NAME', 'sabadinnk')
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# Models
class InquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    tattoo_description: str
    placement: Optional[str] = None
    size: Optional[str] = None
    reference_style: Optional[str] = None

class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    tattoo_description: str
    placement: Optional[str] = None
    size: Optional[str] = None
    reference_style: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# API Routes
@api_router.get("/")
async def root():
    return {"message": "The Golden Panther API"}

@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(input_data: InquiryCreate):
    inquiry = Inquiry(**input_data.model_dump())
    doc = inquiry.model_dump()
    await db.inquiries.insert_one(doc)
    doc.pop("_id", None)
    return inquiry

@api_router.get("/inquiries", response_model=List[Inquiry])
async def get_inquiries():
    inquiries = await db.inquiries.find({}, {"_id": 0}).to_list(1000)
    return inquiries

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve built React frontend (for production / Railway)
BUILD_DIR = ROOT_DIR.parent / "frontend" / "build"
if BUILD_DIR.exists():
    app.mount("/static", StaticFiles(directory=str(BUILD_DIR / "static")), name="assets")
    if (BUILD_DIR / "fonts").exists():
        app.mount("/fonts", StaticFiles(directory=str(BUILD_DIR / "fonts")), name="fonts")
    if (BUILD_DIR / "video").exists():
        app.mount("/video", StaticFiles(directory=str(BUILD_DIR / "video")), name="video")
    if (BUILD_DIR / "images").exists():
        app.mount("/images", StaticFiles(directory=str(BUILD_DIR / "images")), name="images")

    @app.get("/{full_path:path}")
    async def serve_spa(request: Request, full_path: str):
        if full_path.startswith("api"):
            return
        file_path = BUILD_DIR / full_path
        if file_path.is_file():
            return FileResponse(str(file_path))
        return FileResponse(str(BUILD_DIR / "index.html"))

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
