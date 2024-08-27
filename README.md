# [YourHR - Job Search Service](https://uzerqureshi-kudosware-assignment.netlify.app)

![1](https://github.com/user-attachments/assets/a144e805-2e8a-421b-b5f2-bc12bf617fee)

![2](https://github.com/user-attachments/assets/ea0c9796-b98c-4487-8e19-a4118b84c99b)


## Project Overview

YourHR is a job search platform designed to help job seekers find ideal job roles based on their qualifications and preferences. This project involves the development of a web application where users can sign up, submit personal information, and upload their resumes. 

The application has a backend to securely store user data and resumes in a database and provides a basic, responsive user interface.

# Submission
- Live Website: https://uzerqureshi-kudosware-assignment.netlify.app
- Source Code: https://github.com/08Uzair/uzer-kudosware-assignment
- Database Link : https://kudosware-server.onrender.com 

## Features

- **User Signup**: Job seekers can sign up and provide their personal information.
- **Resume Upload**: Users can upload their resumes in various formats.
- **Data Security**: User data and resumes are securely stored in the backend.
- **Responsive Design**: The website is designed to work well on both desktop and mobile devices.
  
## Pages

1. **SignIn & SignUp Page**
2. **Resume Upload Page**

## Technologies Used

### Frontend:
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling the components and ensuring responsiveness.

### Backend:
- **Node.js** (Express): For building the backend API.
- **Postgres**: For storing user data 
- **Supabase Bucket** : For storing Resume Files
### Hosting:
- **Netlify**: For deploying the frontend.
- **Render**: For deploying the backend 

## Getting Started

### Prerequisites

- **Node.js** 
- **npm** 
- **Postgres** database 

### Installation

1. Clone the repository :

   ```bash
   git clone https://github.com/08Uzair/uzer-kudosware-assignment.git
   cd yourhr

2. Install dependencies for both frontend and backend :
 
- Frontend
  
   ```bash
   cd frontend
   npm install

 - Backend

   ```bash
   cd backend
   npm install

 3. Set up your environment variables for the backend:
 - Create a .env file in the backend directory with the following content:
  ```bash
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
```

 4.Start the development servers:

 - Frontend

   ```bash
   cd frontend
   npm start
   ```
- Backend

 ```bash
cd backend
npm start
  ```

# API Endpoints

- `POST` `/api/v1/signup`  : Handles user signup and then signin account .
-  `POST` `/api/v1/signin`  : Handles user signin and resume upload.
-  `GET` `/api/v1/users`  : Fetches the list of registered users.

# ARCHITECTURE DIAGRAM

![Diagram](https://github.com/user-attachments/assets/6f4aa110-f9bf-4ab5-af3f-ab213735ba9b)


