# NSP

Sure! Here’s a **professional README.md** for your `nsp-locations` project, ready for Render deployment:

```markdown
# NSP Locations Project

A simple Node.js + Express.js application to manage locations with SEO-friendly URLs, using MongoDB Atlas as the database and EJS for templating.  

The app includes an admin panel to add locations, a dynamic location page, and a public listing of all locations.  

---

## 🔗 Live Demo

[NSP Locations on Render](https://nsp-1.onrender.com)

---

## 🛠️ Technologies Used

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- EJS (templating engine)  
- Body-parser (for handling form submissions)  
- Render (for deployment)

---

## 🚀 Features

- Add new locations via an admin panel.  
- Automatically generate SEO-friendly URLs.  
- List all locations.  
- Dynamic individual location pages.  
- Deployed and accessible online via Render.

---



---

## ⚡ Installation (Local)

1. Clone the repository:

```bash
git clone <repo-url>
cd nsp-locations
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file (optional) or set environment variables:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.ybs4gym.mongodb.net/nsp
```

4. Start the server locally:

```bash
npm start
```

5. Open in browser:

```
http://localhost:3000
```

---

## 🌐 Deployment on Render

1. Push your repository to GitHub.
2. Go to [Render](https://render.com) → New Web Service → Connect GitHub repository.
3. Set **Root Directory** if not in repo root (otherwise leave empty).
4. Build Command:

```
npm install
```

5. Start Command:

```
npm start
```

6. Set environment variable:

```
Key: MONGODB_URI
Value: mongodb+srv://<username>:<password>@cluster0.ybs4gym.mongodb.net/nsp
```

7. Deploy. Your service will be live at the URL provided by Render.

---

## ⚙️ Notes

* Make sure your **MongoDB Atlas IP whitelist** allows connections from Render servers (0.0.0.0/0 for testing).
* Use **Render’s PORT environment variable** in `app.js`:

```js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

* `.gitignore` should include:

```
node_modules
.env
```

---



## 👨‍💻 Author

**Daksh Sharma**
GitHub: [https://github.com/DAKSHSHARMA2901](https://github.com/DAKSHSHARMA2901)


