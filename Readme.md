# Jobly – Job Application Tracker

**Jobly** is a full-stack MERN application that helps users efficiently track their job applications, manage application statuses, and keep all their job hunt data organized. The application is designed for both desktop and mobile views with a responsive interface.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Folder Structure](#folder-structure)
- [Known Issues / Notes](#known-issues--notes)
- [Author](#author)

---

## Features
-   **User Authentication:** Secure login/signup with JWT and password hashing.
-   **CRUD Operations:** Add, edit, and delete job applications.
-   **Status Tracking:** Track application status: Applied, Interview, Offer, Rejected.
-   **Filtering:** Filter applications by their current status.
-   **Responsive Design:** Fully functional on both mobile and desktop devices.
-   **Personalization:** Dashboard greeting personalized with the user's name.
-   **Application Details:** View detailed information for each application.
-   **Logout Functionality:** Securely end user sessions.

---

## Technologies Used
-   **Frontend:** React, Tailwind CSS, Axios, React Icons, React Router
-   **Backend:** Node.js, Express.js, MongoDB, Mongoose
-   **Authentication:** JWT, bcrypt
-   **Deployment:** Frontend on Vercel, Backend on Render (Free Tier)
-   **Other Libraries:** `jwt-decode` for extracting user info from the token

---

## Live Demo
-   **Frontend:** [**Jobly Live**](https://jobly-job-application-tracker.vercel.app)
-   **Backend:** [**Render API**](https://jobly-job-application-tracker.onrender.com/api)

> **Note:** The first login may take a few seconds to load. This is due to the backend server being hosted on a free-tier platform, which may go into a "sleep" state when inactive. Subsequent logins are faster.

---

## Setup Instructions

### Prerequisites
-   Node.js (v14 or higher)
-   npm
-   MongoDB Atlas account (or a local MongoDB instance)

### Backend Setup
1.  **Navigate to the backend folder:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the `backend` folder and add the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    ```
4.  **Start the server:**
    ```bash
    npm run dev
    ```

### Frontend Setup
1.  **Navigate to the frontend folder** from the root directory:
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the `frontend` folder and add the following:
    ```env
    VITE_API_BASE_URL=http://localhost:5000/api
    ```
    *Note: Change this to your deployed backend URL for production.*
4.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
5.  Open your browser at `http://localhost:5173` (or the port shown in the terminal).

---
---

## Known Issues / Notes
-   **Initial Login Delay:** On the first login, the live server may take a few seconds to respond due to the free-tier hosting. Subsequent logins are faster.
-   **Free-Tier Limitations:** The hosted backend may "sleep" after a period of inactivity. Reviewers may experience a slight delay on their first access.

---

## Author
**Manoj M V**

-   **GitHub:** [Manoj-velmurugan](https://github.com/Manoj-velmurugan)
-   **LinkedIn:** [Your LinkedIn Profile URL]

Thank you for checking out Jobly!
