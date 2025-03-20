```npm init vite```
Features the System Should Have
Job Categories & Sections

Software Developer
Data Science
Software Engineering
Other roles (e.g., IT Support, ML Engineer, etc.)
Job Tracking System

Add jobs manually (Title, Company, Location, Link, Date Applied, etc.)
Track application status: Applied, Interview, Offer, Rejected, Follow-up needed
Option to update job status
Resume & Document Storage

Upload different versions of your resume (specific to different job types)
Store cover letters, portfolios, and certificates
Allow easy download when needed
Job Application Sources

A section where you save the sites you frequently apply to (LinkedIn, Glassdoor, company career pages, etc.)
Maybe integrate an API that fetches job postings from these sites?
Reminders & Notifications

Set reminders for follow-ups
Notify yourself when an application is pending a response
Dashboard & Insights

Track the number of applications sent
Success rate per category (e.g., how many callbacks you got for Software Dev vs Data Science)
Companies you've applied to multiple times
Automation (Optional but cool)

If you can, integrate email tracking (e.g., Gmail API) to automatically update status when a recruiter responds
Auto-fill application details from job links
Tech Stack Options
Frontend: React
Backend: Node.js (Express)
Database: PostgreSQL
Storage: AWS S3, Google Drive API (for resume storage)
Hosting: Vercel or DigitalOcean (backend)
Next Steps
Start with an MVP (Minimal Viable Product)

Basic job tracking (add, edit, delete applications)
Resume storage
Job site list
Status update system
Expand Features Gradually

Automation & API integrations
Analytics
Email tracking

Step-by-Step Plan for Your Job Application Tracker
Phase 1: MVP (Minimal Viable Product)
Goal: Get the core features working

✅ Frontend (React + Tailwind CSS)

Simple dashboard with:
Job listing table (with status filters: Applied, Interview, Offer, Rejected)
Buttons to add/edit/delete applications
Resume upload section
✅ Backend (Node.js + Express + PostgreSQL)

API endpoints for:
CRUD (Create, Read, Update, Delete) job applications
Resume upload (linking files to job applications)
User authentication (optional for security)
✅ Database (PostgreSQL)

Tables:
jobs (job title, company, status, date applied, notes)
resumes (file URL, job_id, category)
✅ Hosting & Deployment

Frontend: Vercel
Backend: Render / Railway
Database: PostgreSQL on Supabase / Railway
Phase 2: Advanced Features
Goal: Make it more powerful & useful

🔹 MongoDB for NoSQL Learning

Store job descriptions & application history
Keep logs of status updates
🔹 Automation & API Integrations

Connect Gmail API → Auto-track recruiter responses
Job scraping (LinkedIn, Indeed API)
🔹 Notifications & Insights

Graphs: How many jobs applied per week?
Success rate per category (Software Dev vs Data Science)
Follow-up reminders
Next Steps for You
Set up your project repo (GitHub)
Create database schema (PostgreSQL first, then add MongoDB later)
Build frontend components (Job table, Resume upload, Status filters)
Develop backend APIs (Job tracking CRUD, file storage)
Deploy MVP