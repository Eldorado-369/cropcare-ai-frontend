# CropCare AI – Frontend  
**AI-Powered Crop Disease Detection for Indian Farmers**

[![IBM SkillsBuild](https://img.shields.io/badge/IBM%20SkillsBuild-AI--ML%20Internship-blue?style=for-the-badge&logo=ibm)](https://skillsbuild.org/)  
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)  
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**Live Demo**: https://cropcare-ai-frontend.vercel.app/
**Backend Repo**: https://github.com/Eldorado-369/cropcare-ai-backend  

Submitted as part of **IBM SkillsBuild AI-ML Internship** by **Eldho K Shajee**

### Project Overview
CropCare AI is a mobile-friendly web application that lets Indian farmers upload a crop leaf/plant photo and get instant AI-powered disease diagnosis — including name, severity, symptoms, treatments, and prevention tips — in their preferred Indian language.

Frontend built with React + Vite, styled with Tailwind CSS, and deployed on Vercel for fast, global access.

### Key Features
- Image upload with preview and drag-and-drop
- Language selector (English + 9 Indian languages: Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi)
- Real-time API call to backend for Gemini AI analysis
- Beautiful result display: crop type, disease, confidence, severity (Mild/Moderate/Severe), symptoms, treatment, prevention
- Loading spinner, error handling, responsive mobile-first design
- No login required – fully accessible on low-end smartphones

### Tech Stack (Frontend)
- React.js + Vite (fast dev & build)
- Tailwind CSS (styling)
- Lucide React (icons)
- Axios (API requests)
- Environment variables for backend URL (`VITE_API_URL`)

### Screenshots

![Upload Interface](src/Screenshots/interface.png)  
![Language Selection & Results (English)](src/Screenshots/english.png)  
![Results in Hindi](src/Screenshots/hindi.png)  
![Mobile View](src/Screenshots/mobile.png)


### Quick Start (Local)
```bash
git clone https://github.com/Eldorado-369/cropcare-ai-frontend.git
cd cropcare-ai-frontend
npm install
npm run dev