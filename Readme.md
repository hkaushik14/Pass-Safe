# 🔐 Pass-Safe – Password Manager

Pass-Safe is a full-stack password manager application that allows users to securely store, manage, and retrieve their credentials. It is built using modern web technologies with a focus on simplicity, performance, and ease of use.

---

## 🚀 Features

* 🔑 Store passwords securely
* 📋 View all saved credentials
* ➕ Add new passwords
* ❌ Delete passwords
* 🌐 REST API using Express
* 🗄️ MongoDB database integration
* ⚡ Fast and simple UI (React frontend)

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Tailwind CSS

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB

---

## 📂 Project Structure

```
Pass-Safe/
│
├── frontend/        # React frontend
├── backend/         # Express server
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/hkaushik14/Pass-Safe.git
cd Pass-Safe
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=mongodb://localhost:27017
DB_NAME=passsafe
```

Run server:

```bash
node server.js
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### 📥 Get all passwords

```
GET /
```

---

### ➕ Add password

```
POST /
```

**Body:**

```json
{
  "site": "example.com",
  "username": "user",
  "password": "123456"
}
```

---

### ❌ Delete password

```
DELETE /:id
```

---

## ⚠️ Important Notes

* Passwords are currently stored in **plain text (for learning purpose only)**
* For production:

  * Use encryption (bcrypt / AES)
  * Add authentication (JWT)
  * Use HTTPS

---

## 🚀 Future Improvements

* 🔐 Encrypt passwords
* 👁️ Show/Hide password
* ✏️ Edit password
* 🔍 Search functionality
* 🌍 Deploy on cloud (Render / Vercel)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Harsh Kaushik**
GitHub: https://github.com/hkaushik14

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
