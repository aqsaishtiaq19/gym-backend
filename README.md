# ⚙️ Gym Website — Backend

A RESTful API backend for the Gym Website built with **Node.js**, **Express.js**, and **MongoDB Atlas**.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)

---

## 🌐 Live API

👉 **Base URL:** `https://gym-backend-production-0ab8.up.railway.app`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/messages` | Get all messages |
| `POST` | `/api/messages` | Send a new message |
| `PUT` | `/api/messages/:id` | Update message by ID |
| `DELETE` | `/api/messages/:id` | Delete message by ID |

### Example POST Request
```json
{
  "fullName": "Aqsa Ishtiaq",
  "email": "aqsa@example.com",
  "message": "Hello, I want to join the gym!"
}
```

### Example Response
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "fullName": "Aqsa Ishtiaq",
    "email": "aqsa@example.com",
    "message": "Hello, I want to join the gym!",
    "createdAt": "2026-06-28T00:00:00.000Z"
  }
}
```

---

## ✨ Features

- 📨 Contact form message storage
- 🔐 JWT Authentication middleware
- 🗄️ MongoDB Atlas cloud database
- 🚀 Deployed on Railway
- 📋 Full CRUD operations
- 🛡️ Error handling & validation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| Railway | Deployment & hosting |

---

## 📁 Project Structure

```
gym-backend/
├── config/
│   └── db.js              ← MongoDB connection
├── middleware/
│   └── middleware.js       ← JWT auth middleware
├── models/
│   └── message.js          ← Message schema
├── routes/
│   └── messageRoutes.js    ← API routes
├── .env                    ← Environment variables (hidden)
├── .gitignore
├── index.js                ← Main server entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js installed
- MongoDB Atlas account
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aqsaishtiaq19/gym-backend.git

# Navigate to project folder
cd gym-backend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in root directory:

```
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/gymdb
PORT=5000
```

### Run the Server

```bash
# Development
npm run dev

# Production
npm start
```

Server runs on `http://localhost:5000`

---

## 🔗 Related Repository

🎨 **Frontend Repository** → [gym-tamplate](https://github.com/aqsaishtiaq19/gym-tamplate)

🌐 **Frontend Live Site** → [View Live](https://gym-tamplate.vercel.app)

---

## 👩‍💻 Developer

**Aqsa Ishtiaq**
- 🌐 GitHub: [@aqsaishtiaq19](https://github.com/aqsaishtiaq19)
- 💼 LinkedIn: [Aqsa Ishtiaq](https://www.linkedin.com/in/aqsa-ishtiaq)
- 🏅 Certiport IT Specialist – JavaScript *(Pearson VUE, 140+ countries)*
- 🤖 Microsoft Learn — AI Concepts for Developers *(June 2026)*

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
