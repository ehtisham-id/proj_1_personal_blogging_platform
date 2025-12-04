# ![Blog App](https://img.shields.io/badge/Personal-Blog-blue) Personal Blog App

[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express-4.x-orange)](https://expressjs.com/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-v6-brightgreen)](https://www.mongodb.com/)  
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

A minimal, clean, and functional personal blog application built with Node.js, Express, MongoDB, and EJS. Create posts with optional cover images, browse a paginated home page, and read individual posts rendered server-side.

---

**Quick Links**
- **Live:** Not included — run locally (instructions below)
- **Stack:** `Node.js`, `Express`, `MongoDB`, `EJS`

---

**📦 Libraries / Dependencies**

This project uses the following NPM packages:

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^4.22.1 | Web framework for Node.js (routing & middleware) |
| `ejs` | ^3.1.10 | Templating engine for server-rendered views |
| `mongoose` | ^9.0.0 | MongoDB object modeling (ODM) |
| `multer` | ^2.0.2 | Multipart/form-data middleware for file uploads |
| `method-override` | ^3.0.0 | Override HTTP methods (PUT, DELETE) in forms |
| `dotenv` | ^17.2.3 | Load environment variables from `.env` file |
| `slugify` | ^1.6.6 | Create SEO-friendly slugs from post titles |
| `morgan` | ^1.10.1 | HTTP request logger middleware |
| `pino` | ^10.1.0 | Fast JSON logger for Node.js |
| `cookie-parser` | ~1.4.4 | Parse cookies in HTTP requests |
| `http-errors` | ~1.6.3 | Create HTTP error objects for Express |
| `debug` | ~2.6.9 | Small debugging utility |

**Install all dependencies:**

```bash
npm install
```

For production deployments, check each package's documentation for security best practices and configuration options.


**Getting Started**

- **Install dependencies:**

```pwsh
npm install
```

- **Environment variables:** Create a `.env` file at the project root (or configure your platform's env settings). At minimum provide:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/personal_blog
```

- **Run the app:**

```pwsh
npm run start
# or (dev):
npx nodemon ./bin/www
```

Open http://localhost:3000 in your browser.

---

**Features**

- Create blog posts with title, content, and optional cover image.
- Upload images (JPG, PNG, WEBP), validated server-side; max size 5MB.
- SEO-friendly, unique slugs per post.
- Paginated homepage (12 posts per page).
- Server-side rendered views using EJS templates.
- Minimal validation and secure upload middleware provided.

---

**Project Structure (highlight)**

- `app.js` — Express application setup.
- `bin/www` — Server entry (startup script).
- `config/database.js` — MongoDB connection.
- `controllers/blog.controller.js` — Blog route handlers.
- `routes/index.js` — Route definitions and wiring.
- `models/Post.js` — Mongoose model for posts.
- `schema/PostSchema.js` — Post validation/schema helpers.
- `middlewares/upload.middleware.js` — Image upload + validation.
- `public/` — Static assets (`images`, `stylesheets`, `javascripts`).
- `views/` — EJS templates (`index.ejs`, `create-blog.ejs`, `view-blog.ejs`, `components/`).

---

**Image Upload Rules**

- Allowed formats: `.jpg`, `.jpeg`, `.png`, `.webp`.
- Max size: 5MB.
- Uploaded images are stored in `public/uploads/images/` by default.
- Server-side validation is implemented in `middlewares/upload.middleware.js`.

---

**Configuration & Deployment Notes**

- Use `MONGODB_URI` for production (MongoDB Atlas or managed DB).
- Consider using cloud storage (S3, Cloudinary) or a CDN for images in production.
- Add authentication (Passport / JWT) if you want restricted post creation.

---

**Development & Testing**

- No automated tests are included; recommended additions:
	- Unit tests for controllers and model logic.
	- Integration tests for routes using `supertest` + a test runner.
	- Upload edge-case tests for `upload.middleware`.

---

**License**

- MIT (see `LICENSE` if present)

---