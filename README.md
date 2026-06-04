# Personal Portfolio

## Overview

This repository contains the source for my personal portfolio website, built with Vue 3 and Vite. It presents my profile, experience, education, projects, certifications, and contact links in a responsive single-page experience with routed project details.

The app is organized so visual styling lives in `src/css` and reusable page logic lives in `src/composables`, while the Vue components focus on markup and composition.

## Features

* Responsive layout for desktop and mobile
* Theme toggle with persisted preference
* Routed project detail pages
* Project showcase with images, status, and progress indicators
* Education, experience, tech stack, and certificate sections
* Contact and social links
* Loader and image preview interactions

## Project Structure


```
public/
├── images/                 # Portfolio assets and project media
src/
├── components/
│   ├── layout/             # Navbar and footer
│   └── ui/                 # Home, project, contact, and shared sections
├── composables/            # Reusable state and behavior
├── css/
│   ├── app.css             # Global app shell and theme variables
│   ├── layout/             # Layout-specific styles
│   ├── home/               # Home page section styles
│   └── views/              # View-specific styles
├── data/
│   └── projects.js         # Project detail data
├── router/
│   └── index.js            # Vue Router configuration
├── views/
│   ├── Home.vue
│   ├── Projects.vue
│   ├── projects-view.vue
│   ├── Contactpage.vue
│   └── Testimonials.vue
├── App.vue                 # Root shell and preloader
└── main.js                 # App bootstrap
```

## Setup

```bash
git clone https://github.com/DevKennySoriano/vue-portfolio
cd vue-portfolio
npm install
npm run dev
```

## Scripts

* `npm run dev` - Start the development server
* `npm run build` - Build the app for production
* `npm run preview` - Preview the production build locally

## Projects Highlighted

The portfolio currently includes these projects:

1. All About Pets
2. HomeHive
3. Kape't Bahala Na
4. SWAK-CART

## Deployment

The app can be deployed to Vercel or GitHub Pages after running:

```bash
npm run build
```

## Contact

* LinkedIn: https://www.linkedin.com/in/kennysoriano/
* GitHub: https://github.com/DevKennySoriano
* Portfolio: https://devkennysoriano.vercel.app/
* Email: devkennysoriano@gmail.com
