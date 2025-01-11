# User Form CRUD - MERN Stack 🚀 📝

A comprehensive full-stack application built with the MERN (MongoDB, Express, React, Node.js) stack that demonstrates efficient user data management with CRUD operations. This project showcases modern web development practices with a responsive UI and seamless data handling.

---

## 🌟 Features

- 📝 **User Form Management**: Easy-to-use interface for user data input and management
- ⚡ **Real-time Updates**: Instant UI updates reflecting database changes
- 🔄 **CRUD Operations**: Complete Create, Read, Update, and Delete functionality
- 📱 **Responsive Design**: Fully responsive interface using Tailwind CSS
- 🎯 **Form Validation**: Client-side and server-side validation for data integrity
- 🔒 **Secure Data Handling**: Safe storage and retrieval of user information

---

## 🛠️ Tech Stack

### Frontend
- React.js for UI components
- Tailwind CSS for styling
- Axios for API requests
- React Router for navigation

### Backend
- Node.js runtime environment
- Express.js framework
- MongoDB for database
- Mongoose ODM

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chathupachamika/User_Form-crud--MERN-Stack.git
   cd User_Form-crud--MERN-Stack
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   Create `.env` files in both frontend and backend directories:

   Backend `.env`:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

   Frontend `.env`:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

---

## 🚀 Usage

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```

3. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

---

## 📡 API Endpoints

### User Management
- **POST** `/api/users` - Create new user
- **GET** `/api/users` - Retrieve all users
- **GET** `/api/users/:id` - Retrieve specific user
- **PUT** `/api/users/:id` - Update user
- **DELETE** `/api/users/:id` - Delete user

---

## 📂 Project Structure
```plaintext
User_Form-crud--MERN-Stack/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
└── README.md
```

---

## 💡 Best Practices

- Component-based architecture in React
- RESTful API design
- MongoDB data modeling
- Error handling and validation
- Clean and maintainable code structure

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 📧 Contact

For questions or feedback, please reach out:
- GitHub: [@Chathupachamika](https://github.com/Chathupachamika)
