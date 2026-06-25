# MonoBlog

A modern full-stack blogging platform built using **React, Appwrite, and Redux Toolkit**.

MonoBlog is designed to provide a clean and scalable blogging experience where users can authenticate, create posts, manage content, upload featured images, and read blogs in a responsive interface.

---

## Tech Stack

### Frontend

* React 19
* Vite
* React Router DOM
* Redux Toolkit
* React Hook Form
* TinyMCE Editor

### Backend / BaaS

* Appwrite Authentication
* Appwrite Database
* Appwrite Storage

### Tooling

* ESLint
* Prettier

---

## Current Progress

### Completed

* Project initialization using Vite
* Appwrite project configuration
* Environment configuration setup
* Authentication service setup
* Database service setup
* File upload service setup
* Project structure setup

### In Progress

* UI Development
* Authentication pages
* Redux integration
* Routing setup

### Planned

* User Authentication (Signup/Login/Logout)
* Create Blog Post
* Edit Blog Post
* Delete Blog Post
* Rich Text Blog Editor
* Featured Image Upload
* Public Blog Listing
* Individual Blog Pages
* Dashboard

---

## Project Structure

```bash
MonoBlog/
│
├── public/
├── src/
│   ├── appwrite/
│   │   ├── auth.js
│   │   └── config.js
│   │
│   ├── assets/
│   ├── conf/
│   │   └── conf.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

---

## Installation & Setup

Clone repository:

```bash
git clone https://github.com/your-username/monoblog.git
```

Move into project:

```bash
cd monoblog
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Core Services

### Authentication Service

Handles:

* Account creation
* Login
* Logout
* Current user session

---

### Database Service

Handles:

* Create post
* Update post
* Delete post
* Fetch single post
* Fetch all active posts

---

### Storage Service

Handles:

* File upload
* File deletion
* File preview

---

## Future Improvements

* Dark Mode
* Search & Filter
* Comments
* Likes
* Bookmarking
* SEO Optimization
* Admin Dashboard
* Performance Optimization

---

## Learning Goals

This project is being built to strengthen practical understanding of:

* React Architecture
* State Management
* Authentication Flow
* Appwrite Integration
* Scalable Project Structure
* Production-level Full Stack Development

---

## Author

**Shivam Mishra**

Built with focus on learning scalable full-stack development.
