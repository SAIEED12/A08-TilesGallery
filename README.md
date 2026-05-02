# 🏺 Tiles Gallery

A curated atelier of luxury tiles — sourced from heritage workshops and contemporary studios across the world. Every surface, a story.

<img width="1919" height="957" alt="image" src="https://github.com/user-attachments/assets/9608560f-ab7f-4c0e-9754-6ab4bb9a68d2" />

<img width="1919" height="958" alt="image" src="https://github.com/user-attachments/assets/37a04fc0-dc71-4703-aaed-a375020d6133" />

<img width="1919" height="956" alt="image" src="https://github.com/user-attachments/assets/8c27d5c6-13a9-4fbd-a0ca-5531f915fbd6" />

<img width="1919" height="957" alt="image" src="https://github.com/user-attachments/assets/0cca832a-0a90-4ece-87b7-3ccfafb7734c" />





## 🌐 Live URL

[https://tiles-gallery-ten.vercel.app](https://tiles-gallery-ten.vercel.app)

---

## 📌 Purpose

Tiles Gallery is a luxury tile browsing platform where users can explore a curated collection of high-end tiles from around the world. Users can browse the full collection, search by title or tag, view detailed tile information, and manage their profile after authentication.

---

## ✨ Key Features

- 🖼️ **Hero Banner** — Full-screen Swiper.js slideshow with fade transitions and autoplay
- 🔍 **Search & Filter** — Real-time tile search by title across the full collection
- 🗂️ **Tile Collection** — Responsive grid of tile cards with hover effects
- 📄 **Tile Detail Page** — Full tile info including material, dimensions, price, tags, and stock status
- 🔐 **Authentication** — Email/password sign up & sign in + Google OAuth via Better Auth
- 👤 **User Profile** — View and update profile name and avatar
- 📱 **Fully Responsive** — Mobile-first design with DaisyUI navbar and hamburger menu
- 🎨 **Luxury Dark Theme** — Custom dark gold aesthetic throughout (`#0a0a0b` + `#e09f2d`)
- 🔔 **Toast Notifications** — Success/error feedback on auth and cart actions
- 🏃 **Marquee Banner** — Scrolling announcement ticker using react-fast-marquee
- 🚫 **Custom 404 Page** — Branded not-found page matching site aesthetic

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | React framework (App Router) |
| `react` | UI library |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind component library |
| `better-auth` | Authentication (email + Google OAuth) |
| `swiper` | Hero banner slideshow |
| `react-fast-marquee` | Scrolling ticker banner |
| `react-toastify` | Toast notifications |
| `react-icons` | Icon library (Bi, Fa, Gr, Go icons) |
| `@heroui/react` | Form components (TextField, Input, Modal) |
| `next/font/google` | Cormorant Garamond luxury font |
| `next/image` | Optimized image component |
---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/SAIEED12/A08-TilesGallery.git

# Navigate into the project
cd tiles-gallery

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your values (see below)

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root with the following:

```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

DATABASE_URL=your_database_url

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

For production on Vercel, set:
```env
BETTER_AUTH_URL=https://tiles-gallery-ten.vercel.app
NEXT_PUBLIC_BETTER_AUTH_URL=https://tiles-gallery-ten.vercel.app
```

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── all-tiles/
│   │   ├── [id]/page.jsx       # Single tile detail page
│   │   └── page.jsx            # All tiles listing page
│   ├── signin/page.jsx         # Sign in page
│   ├── signup/page.jsx         # Sign up page
│   ├── my-profile/page.jsx     # User profile page
│   ├── layout.js               # Root layout
│   └── page.js                 # Home page
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── TilesCard.jsx
│   ├── AllTilesClient.jsx
│   ├── Navlink.jsx
│   └── UpdateUserModal.jsx
├── assets/
│   ├── logo.png
│   ├── hero.jpg
│   └── ...
└── lib/
    ├── auth.js
    └── auth-client.js
```

---