# Jobly - Job Application Tracker

Jobly is a MERN stack application to manage and track your job applications efficiently. It allows users to register, login, add job applications, and view details of their applications. The app also includes authentication and role-based protected routes.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Screenshots / Demo](#screenshots--demo)
- [Notes](#notes)
- [License](#license)

---

## Features
- User registration and login
- Add, view, and track job applications
- Protected routes for authenticated users
- Responsive frontend design with React + Tailwind CSS
- Backend with Express.js and MongoDB
- JWT authentication

---

## Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Authentication:** JWT + bcrypt  
- **Deployment:** Vercel (frontend), Render / Railway / your choice (backend)

---

## Setup & Installation

### Clone the repository
```bash
git clone https://github.com/Manoj-velmurugan/JOBLY-Job-Application-Tracker.git
cd JOBLY-Job-Application-Tracker
```

### Backend Setup
```
cd backend
npm install
```
- Create a .env file in the backend folder with the following variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
- Run the backend :
```
node server.js
```

### Frontend Setup
```
cd ../frontend
npm install
```
- Create a .env file in the frontend folder with:
```
VITE_API_BASE_URL=http://localhost:5000/api
```
- Run the frontend :
```
npm run dev
```
- The app should now be running locally at http://localhost:5173.

## API Endpoints

### Auth
| Method | Endpoint         | Description             |
|--------|-----------------|-------------------------|
| POST   | `/auth/register` | Register a new user     |
| POST   | `/auth/login`    | Login an existing user  |

### Jobs
| Method | Endpoint         | Description                         |
|--------|-----------------|-------------------------------------|
| GET    | `/jobs`          | Get all jobs for the logged-in user |
| POST   | `/jobs`          | Add a new job application           |
| GET    | `/jobs/:id`      | Get details of a specific job       |
| PATCH  | `/jobs/:id`      | Update a specific job               |
| DELETE | `/jobs/:id`      | Delete a specific job               |

- Note: All /jobs routes are protected and require a valid JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Screenshots

Here's a quick visual tour of Jobly's key features:

### 1. Landing Page
Landing Page of Jobly - Job Tracker Application
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/42f84235-f7ed-4871-9623-1ddd72a87e62" />


### 2. Login/Signup Page
Secure authentication for new and returning users.
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/1eb1086f-0ead-41bd-88a4-8687268503a6" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/6765d126-ecff-46aa-b38a-d4b08bd741fc" />



### 3. Dashboard - Desktop View
A personalized overview of your job applications with quick access to add new ones.
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/6dd421f4-6e39-4858-92ed-a79085980eb3" />


### 4. Add New Application
Easily add new job application details through a simple form.
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/940314da-6711-48da-bade-ca3dc9b848e5" />


### 5. Application Details
View comprehensive details of a specific job application.
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/b5bf0c05-bf77-49a1-a0c0-2e37d8a2b7ad" />

### 6. Filter Option based on Status
View applications filtered by status of the applications.
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/3940ace6-bcca-4275-90e3-2f4aeb286a6f" />

### 7. Mobile Responsiveness
Jobly adapts seamlessly to smaller screens for on-the-go tracking.

<img width="283" height="595" alt="image" src="https://github.com/user-attachments/assets/fd9be603-33c2-4ea3-b00f-60bf18651ec4" />
<img width="274" height="588" alt="image" src="https://github.com/user-attachments/assets/bedd4d0e-803f-4e95-bc2f-698dbf2566d3" />

### Notes
- Initial Login Slow: The first login after deployment may be slow due to server cold start (Render free tier). Subsequent logins are faster.
- Ensure .env files are correctly configured before running locally.

## Author
**Manoj M V**
-   **GitHub:** [Manoj-velmurugan](https://github.com/Manoj-velmurugan)
-   **LinkedIn:** [https://www.linkedin.com/in/manoj-mv/]

Thank you for checking out Jobly!
  
