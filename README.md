# 🚀 HRTECHNEST - Startup Recruitment Platform

A full-featured recruitment solution for tech startups that automates resume ranking, job posting management, and candidate tracking. Built with **Next.js**, **Express**, and **MongoDB** to streamline hiring workflows and improve candidate experiences.

---

## 🌟 Features

### 📝 Candidate Portal
- **Job Listings** – Browse open positions.
- **Application Submission** – Apply through a Google Form, uploading resumes directly.
- **Status Updates** – Receive email notifications on application status (accepted, rejected, next round).

### 🧑‍💼 Admin Dashboard
- **Job Management** – Create, update, and delete job postings.
- **Resume Ranking** – Automated ranking system for all resumes submitted.
- **Interview Scheduling** – Track and manually schedule candidate interviews via a calendar view.

---

## 🛠 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) – Modern React-based web framework.
- **Backend:** [Express.js](https://expressjs.com/) – Fast, unopinionated server framework for Node.js.
- **Database:** [MongoDB](https://www.mongodb.com/) – NoSQL database for handling application data.

---

## ⚙️ Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/repo-name.git
   cd repo-name
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory:
     ```plaintext
     MONGODB_URI=your_mongodb_uri
     EMAIL_API_KEY=your_email_service_api_key
     GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key
     ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   Your application will be live at `http://localhost:3000`.

---

## 📬 API Endpoints

| Endpoint         | Method | Description                              |
|------------------|--------|------------------------------------------|
| `/api/jobs`      | GET    | Fetch all job postings                   |
| `/api/jobs`      | POST   | Admin creates a new job posting          |
| `/api/resumes`   | GET    | Admin views automatically ranked resumes |

---

## 📂 Folder Structure

```plaintext
.
├── components      # Reusable UI components
├── pages           # Next.js pages for routes
├── services        # External integrations (e.g., Email, Calendar)
├── .env            # Environment configuration
└── server.js       # Express backend setup
```

---

## 📅 Future Enhancements

- **Advanced Resume Filtering** – Add skill-based and keyword-based filtering.
- **Analytics Dashboard** – Gain insights into applicant trends.
- **In-App Messaging** – Direct communication between recruiters and candidates.

---

## 📜 License

This project is licensed under the **MIT License**.

---

Contributions are welcome! Create a branch, make your changes, and submit a PR. 😊
