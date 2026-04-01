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

## 💻 Terminal Commands

Use these commands to build, run, and verify the containerized application locally:

```bash
# 1. Build the Docker image
docker build -t akshith-web-app .

# 2. Run the container (Map host port 8080 to container port 3000)
docker run -d -p 8080:3000 --name web-portfolio akshith-web-app

# 3. Verify the application is running
curl -I http://localhost:8080

# 4. View container logs
docker logs web-portfolio

# 5. Stop the container
docker stop web-portfolio
