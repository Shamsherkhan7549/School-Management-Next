# School Management Mini-Project

## Summary
This is a mini-project built using **Next.js** and **MySQL**. It consists of two pages:  
1. **Add School** – A form to input and store school data.  
2. **Show Schools** – A page to fetch and display the list of schools.

## Features
- Add school data with validation (email, required fields, etc.) using **React Hook Form**
- Upload and store school images in `schoolImages` folder
- Responsive design for both desktop and mobile
- Display school list in a grid layout like an e-commerce site

## Technologies Used
- **Next.js** (React framework)
- **React Hook Form** for form validation
- **Tailwind CSS** for styling
- **MySQL** for database
- Deployment: **Vercel**

## Database Setup
1. Create the database:This database created using clever cloud for dyanamic use
```sql
CREATE DATABASE IF NOT EXISTS bfkn9g8tqfjg5wk8ktlu;
USE bfkn9g8tqfjg5wk8ktlu;

# Pages
## 1️⃣ Add School (addSchool.jsx)

Form built using React Hook Form
Validates inputs (email, required fields)
Uploads image to schoolImages folder
Responsive layout for all devices

## 2️⃣ Show Schools (showSchools.jsx)
Fetches school data from MySQL
Displays name, address, city, image in a grid layout
Responsive design like product listings on e-commerce sites

# Installation
## 1.Clone the repo
    git clone https://github.com/Shamsherkhan7549/School-Management-Next.git
    cd School-Management-Next
## 2.Install dependencies:
    npm install
## 3.Run the development server:
    npm run dev
## 4.Open http://localhost:3000 in your browser.