# 🚀 Node.js Web App: Azure DevOps CI/CD Blueprint

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-blue?logo=express&logoColor=white)
![Azure DevOps Pipelines](https://img.shields.io/badge/Azure%20DevOps-CI%2FCD-blueviolet?logo=azuredevops&logoColor=white)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)

---

**✨ From Code to Cloud: A Fully Automated Deployment Journey with Azure DevOps ✨**

---

## 🌟 Project Overview

Welcome to an eye-catching, modern, and fully-automated Node.js web app journey!  
This repository showcases a powerful yet approachable Node.js Express application that’s perfect for learning and demonstrating full-stack development, DevOps, and modern cloud deployment—all with a beautiful touch of automation.

---

## 🧩 Features & Tech Stack

- 🎨 **Frontend:** Clean HTML, CSS, and Vanilla JS for a crisp, responsive user experience.
- 🏗️ **Backend:** Node.js & Express.js serving a simple yet robust API endpoint (`/api/data`).
- ☁️ **Cloud Hosting:** Effortless deployment to Azure App Service (PaaS), ensuring scalability and ease.
- 🤖 **DevOps Automation:** End-to-end CI/CD powered by Azure DevOps Pipelines—every code change triggers an automated build, test, and deploy.

---

## 🔄 CI/CD Pipeline Magic with Azure DevOps

Every push is a celebration! 🎉 Modifying the codebase launches an intelligent, automated pipeline that keeps your app up-to-date, tested, and live in the cloud.

### 🛠️ 1. Build Pipeline (CI)
- **Trigger:** Kicks off on every push to `main`.
- **Steps:**
  - 📦 Install dependencies (`npm install`)
  - ✅ Run unit/integration tests (`npm test`)
  - 🗜️ Archive the deployable app as a `.zip` (no `node_modules`!)
  - 🚚 Publish artifact for deployment

### 🚀 2. Release Pipeline (CD)
- **Trigger:** Instantly starts after a successful build
- **Steps:**
  - ⬇️ Grab the latest build artifact
  - 🌐 Deploy the `.zip` to Azure App Service
  - 🔑 Ensure the Node.js environment is perfectly set

---

## ⚡ Quick Start: Run Locally in 1 Minute!

> _Live demo resources are deprovisioned, but running locally is a breeze!_

1. **Clone:**
    ```sh
    git clone https://github.com/Sriharsha9436/NodeJs-Web-App-CI-CD-Demo.git
    cd NodeJs-Web-App-CI-CD-Demo
    ```
2. **Install:**
    ```sh
    npm install
    ```
3. **Start:**
    ```sh
    npm start
    ```
4. **Browse:**  
   👉 [http://localhost:3000](http://localhost:3000)

---

## 🗂️ Project Structure

```
📁 public/          # Frontend assets (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
📄 server.js        # Express entrypoint
📄 package.json     # Project metadata
📄 package-lock.json
📄 README.md        # You are here!
```

---

## 🤝 Connect & Contribute

💬 Open to feedback, suggestions, and awesome collaborations!  
🌟 Star the repo, explore the code, report issues, or send a PR—your input is valued!

---

## 🪪 License

Distributed under the MIT License LICENSE

---

> Made with ❤️ and ☁️ by [Sriharsha9436](https://github.com/Sriharsha9436)
