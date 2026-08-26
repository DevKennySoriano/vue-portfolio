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
* Live GitHub contribution graph (auto-fetching)
* Contact and social links
* Loader and image preview interactions
* Downloadable resources (resume, brand style guide template)

## Project Structure

```
├── api/
│   ├── github-contributions.js   # Vercel serverless function for GitHub data
│   └── viewers.js                # Vercel serverless function for live viewer tracking
├── public/
│   ├── images/                   # Portfolio assets and project media
│   ├── resources/                # Downloadable files (brand style guide)
│   └── resume/                   # Resume PDFs and thumbnail
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.vue
│   │   │   └── Navbar.vue
│   │   └── ui/
│   │       ├── contactpage-end.vue
│   │       ├── homepage-about.vue
│   │       ├── homepage-card.vue
│   │       ├── homepage-certificates.vue
│   │       ├── homepage-educational.vue
│   │       ├── homepage-end.vue
│   │       ├── homepage-experience.vue
│   │       ├── homepage-techstack.vue
│   │       ├── projects-branding.vue
│   │       ├── projects-content.vue
│   │       └── projects-end.vue
│   ├── composables/
│   │   ├── useAppLoader.js
│   │   ├── useCertificateCarousel.js
│   │   ├── useEducationTimeline.js
│   │   ├── useExperienceTimeline.js
│   │   ├── useFooterMeta.js
│   │   ├── useGithubContributions.js
│   │   ├── useHomepageAbout.js
│   │   ├── useHomepageCards.js
│   │   ├── useHomepageTechStack.js
│   │   ├── useProjectsBranding.js
│   │   ├── useProjectsContent.js
│   │   ├── useProjectView.js
│   │   ├── useTheme.js
│   │   └── useVisitorCounter.js
│   ├── css/
│   │   ├── app.css
│   │   ├── home/
│   │   │   ├── homepage-about.css
│   │   │   ├── homepage-card.css
│   │   │   ├── homepage-certificates.css
│   │   │   ├── homepage-educational.css
│   │   │   ├── homepage-end.css
│   │   │   ├── homepage-experience.css
│   │   │   └── homepage-techstack.css
│   │   ├── layout/
│   │   │   ├── footer.css
│   │   │   └── navbar.css
│   │   └── views/
│   │       ├── contactpage.css
│   │       ├── contactpage-end.css
│   │       ├── not-found.css
│   │       ├── projects-branding.css
│   │       ├── projects-content.css
│   │       ├── projects-end.css
│   │       ├── projects-view.css
│   │       └── resources.css
│   ├── data/
│   │   └── projects.js
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── About.vue
│   │   ├── Certifications.vue
│   │   ├── Contactpage.vue
│   │   ├── Education.vue
│   │   ├── Experience.vue
│   │   ├── Home.vue
│   │   ├── NotFound.vue
│   │   ├── Projects.vue
│   │   ├── projects-view.vue
│   │   ├── Resources.vue
│   │   ├── TechStack.vue
│   │   ├── VisualProjects.vue
│   │   └── WebProjects.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── vercel.json
├── package.json
├── .env.example
└── .env (gitignored)
```

## Setup

```bash
git clone https://github.com/DevKennySoriano/vue-portfolio
cd vue-portfolio
cp .env.example .env   # Add your CounterAPI key
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
5. Lutowl

## Deployment

The app is deployed on Vercel with serverless API routes:

```bash
npm run build
```

## Contact

* LinkedIn: https://www.linkedin.com/in/kennysoriano/
* GitHub: https://github.com/DevKennySoriano
* Portfolio: https://devkennysoriano.vercel.app/
* Email: devkennysoriano@gmail.com
