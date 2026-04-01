# 🐳 Dockerized Web App
**Live Demo:** [dockerized-app-akshith.onrender.com](https://dockerized-app-akshith.onrender.com/)

---

## 🚀 Overview
This is a containerized Node.js application designed to demonstrate a clean, production-ready DevOps workflow. It uses **Docker** to ensure the environment is consistent from local development to cloud deployment on **Render**.

### Key Features
* **Lightweight:** Built on `node:alpine` to keep the image size minimal.
* **Security:** Configured to run as a **non-root user** to follow security best practices.
* **Automated:** Connected to a CI/CD pipeline for automatic deployments on every `git push`.

---

## 📂 Source Code & Configuration

### index.js
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Docker! Deployed by Akshith.</h1>');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
