# PRD - The Golden Panther - Bruna's Tattoo Landing Page

## Original Problem Statement
Build a landing page for tattoo artist Bruna (@sabadinnk on Instagram) who owns "The Golden Panther" tattoo studio. The page needs: about/history, line of work, where to find her, link to socials, and a form for tattoo inquiries. Style: ornamental/fineline focused on nature, spirituality and mysticism.

## User Personas
- **Potential clients**: People in Porto looking for fineline/ornamental tattoos
- **Tattoo enthusiasts**: Interested in nature/spirituality themed tattoo art
- **Referral visitors**: People who found Bruna through Instagram or word-of-mouth

## Core Requirements (Static)
- Light/cream elegant theme with golden accents
- Sections: Hero, About, Portfolio, Studio Location, Inquiry Form, Footer
- Instagram only social link (@sabadinnk)
- Inquiry form sends to sabadinnk@gmail.com
- Stock imagery, easy to swap in code
- Address: Rua da Firmeza, 457, 2º andar, Porto

## What's Been Implemented (Dec 2025)
- Full single-page landing with all 6 sections
- Sticky glassmorphism header with smooth scroll navigation
- Animated hero with Cinzel Decorative typography
- About section with artist bio, portrait, specialty tags
- Bento grid portfolio with grayscale-to-color hover effect
- Studio location with address, hours, email, map link
- Tattoo inquiry form (7 fields) stored in MongoDB via POST /api/inquiries
- Dark footer with Instagram link
- Mobile responsive with hamburger menu
- Email validation (Pydantic EmailStr)
- Toast notifications via sonner
- Framer Motion scroll-reveal animations throughout

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI + Framer Motion
- **Backend**: FastAPI with /api prefix
- **Database**: MongoDB (inquiries collection)
- **Fonts**: Cinzel Decorative, Cormorant Garamond, Mulish

## Prioritized Backlog
### P0 (Critical)
- None remaining

### P1 (Important)
- Email notification when new inquiry is submitted (currently only stored in DB)
- Replace stock images with Bruna's actual portfolio images
- Add artist's actual portrait photo

### P2 (Nice to have)
- Admin dashboard to view/manage inquiries
- Image upload in inquiry form for reference photos
- Lightbox/modal for portfolio images
- Multilingual support (Portuguese/English)
- SEO meta tags and Open Graph data

## Next Tasks
- Set up email sending (e.g., SendGrid/Resend) for inquiry notifications
- Replace placeholder images with real portfolio work
- Add SEO meta tags for better discoverability
