FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN cp -n .env.example .env 2>/dev/null || true

EXPOSE 8001

# Production: 2 workers, access log disabled for performance
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001", "--workers", "2", "--log-level", "info"]
