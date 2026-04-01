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

# --- TERMINAL COMMANDS ---
# 1. Build the image:
# docker build -t my-web-app .

# 2. Run the container:
# docker run -p 8080:3000 my-web-app

# 3. Verify deployment:
# curl -I http://localhost:8080
