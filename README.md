# Quizzy

> A full-stack web app for teachers to generate, customize and deploy AI-powered quizzes, and for students to take them with on-demand explanations.

---

## 📚 Table of Contents

1. [Dependencies](#dependencies)
2. [Getting Started](#getting-started)
3. [Boilerplate](#boilerplate)
4. [Authentication Boilerplate](#authentication-boilerplate)
5. [Error Handling](#error-handling)
6. [Scripts](#scripts)
7. [Environment Variables](#environment-variables)

---

## 📦 Dependencies

- **Runtime**
  - `express`
  - `mongoose`
  - `passport` & `passport-local`
  - `jsonwebtoken`
- **Dev**
  - `nodemon`
  - `dotenv`

Install with:

```bash
npm install express mongoose passport passport-local jsonwebtoken dotenv
npm install --save-dev nodemon
```

---

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   npm install --save-dev nodemon
   ```

2. Create a `.env` file (see [Environment Variables](#environment-variables)).

3. Run in development:

   ```bash
   npm run dev
   ```

---

## 🏗️ Boilerplate

Create a minimal `src/index.js`:

```js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// JSON body parsing
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Quizzy API is up." });
});

// Error handler middleware (see below)
// const errorHandler = require('./middleware/errorHandler');
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
```

---

## 🔐 Authentication Boilerplate

**`src/config/passport.js`**

```js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
          return done(null, false, { message: "Invalid credentials" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
```

**`src/middleware/authMiddleware.js`**

```js
module.exports.ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ success: false, message: "Unauthorized" });
};
```

---

## 🛠️ Error Handling

### Custom Error Class

**`src/utils/AppError.js`**

```js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
```

### Error Handler Middleware

**`src/middleware/errorHandler.js`**

```js
const AppError = require("../utils/AppError");

module.exports = (err, req, res, next) => {
  // If not an AppError, wrap it
  if (!err.isOperational) {
    console.error("Unexpected Error:", err);
    err = new AppError("Internal Server Error", 500);
  }

  res.status(err.statusCode).json({
    success: false,
    error: {
      message: err.message,
      statusCode: err.statusCode,
    },
  });
};
```

### Usage

- **Throwing an error in a route**:

  ```js
  const AppError = require("../utils/AppError");

  app.get("/protected", (req, res, next) => {
    if (!req.user) {
      return next(new AppError("Please log in to access this route", 401));
    }
    // ...
  });
  ```

- **Register handler at end of middleware stack**:

  ```js
  // after all routes
  const errorHandler = require("./middleware/errorHandler");
  app.use(errorHandler);
  ```

---

## 📜 Scripts

Update your `package.json`:

```json
"scripts": {
  "dev": "nodemon --watch src --ext js --exec node src/index.js",
  "start": "node src/index.js"
}
```

- `npm run dev` — start server with auto-reload
- `npm start` — start server normally

---

## 🔑 Environment Variables

Create a `.env` file at project root:

```env
MONGODB_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000
```
