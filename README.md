# 📚 PLP Bookstore - MongoDB Setup & Execution Guide

## 🚀 **Project Overview**
This project uses **MongoDB** to manage book records, covering database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing optimization.

## 🛠️ **Setup Instructions**
### **1. Install MongoDB**
- Download and install **MongoDB Community Edition** OR set up a **MongoDB Atlas** cluster.

### **2. Populate the Database**
- Run the `insert_books.js` script to insert sample book data:
  ```bash
  mongosh < insert_books.js
  ```

### **3. Execute Queries**
- Run queries using **MongoDB Shell (`mongosh`)**:
  ```bash
  mongosh < queries.js
  ```

### **4. Verify Data in MongoDB Compass**
- Open **MongoDB Compass**, connect to the database, and inspect the `books` collection.

## ✅ **Submission Instructions**
- Clone your **GitHub Classroom** repository:
  ```bash
  git clone <your-repository-link>
  ```
- Add the following files:
  - `insert_books.js` (modified if needed)
  - `queries.js` (MongoDB queries)
  - `README.md` (this file)
  - **Screenshots** of MongoDB Compass/Atlas displaying collections and sample data.

- Commit and push your changes:
  ```bash
  git add insert_books.js queries.js README.md screenshots/
  git commit -m "Added MongoDB scripts and setup guide"
  git push origin main
  ```

## 📸 **Screenshots**
- Include screenshots showing:
  - **plp_bookstore** database.
  - **books** collection structure.
  - Example **query results**.

---
