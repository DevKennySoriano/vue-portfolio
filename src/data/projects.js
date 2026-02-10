/**
 * Web Projects Data
 * -----------------
 * Each project follows a research / case-study structure:
 *
 * - date: When the project was completed or published
 * - overview: Short abstract / summary
 * - background: Context, problem statement, or motivation
 * - project: Main banner image (16:9)
 * - screenshots: Supporting figures with descriptions
 * - footer: Acknowledgements / special thanks
 */

export const webProjects = [
  {
    slug: "all-about-pets",
    title: "All About Pets",
    date: "March 2024",

    overview:
      "A client-based mini-thesis web system developed for a pet care business to manage services, appointments, and client records through a centralized dashboard.",

    background:
      "This project was created as part of an academic requirement involving a real-world client. The business previously relied on manual record keeping, which led to scheduling conflicts and data inconsistency. The system was designed to automate operations and improve service efficiency.",

    logo: "/images/logos/pets-logo.png",
    github: "https://github.com/yourname/all-about-pets",
    live: "#",

    tags: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"],

    project: "/images/banners/PetsBanner.png",

    screenshots: [
      {
        image: "/images/screenshots/pets-dashboard.png",
        caption:
          "Figure 1. Administrative dashboard presenting service statistics, appointment summaries, and recent activity."
      },
      {
        image: "/images/screenshots/pets-appointments.png",
        caption:
          "Figure 2. Appointment management interface allowing staff to approve, reschedule, or cancel bookings."
      },
      {
        image: "/images/screenshots/pets-records.png",
        caption:
          "Figure 3. Client and pet records module used for maintaining historical data."
      }
    ],

    footer:
      "Special thanks to the project client, academic advisers, and peer reviewers for their guidance and feedback throughout development."
  },

  {
    slug: "kapet-bahala-na",
    title: "Kapet Bahala Na",
    date: "January 2024",

    overview:
      "An experimental café ordering and management system designed to streamline order processing, menu updates, and daily sales tracking.",

    background:
      "The project explored improving small café operations through digital point-of-sale systems. The goal was to reduce order errors, speed up transactions, and provide daily sales insights for business owners.",

    logo: "/images/logos/kapet-logo.png",
    github: "",
    live: "#",

    tags: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"],

    project: "/images/banners/kapet-banner.png",

    screenshots: [
      {
        image: "/images/screenshots/kapet-orders.png",
        caption:
          "Figure 1. Point-of-sale interface used by café staff to process customer orders."
      },
      {
        image: "/images/screenshots/kapet-menu.png",
        caption:
          "Figure 2. Menu management screen for updating items, pricing, and availability."
      },
      {
        image: "/images/screenshots/kapet-sales.png",
        caption:
          "Figure 3. Daily sales report view summarizing transactions and revenue."
      }
    ],

    footer:
      "Developed as a personal experimental project inspired by small local cafés and informal business workflows."
  },

  {
    slug: "homehive",
    title: "HomeHive",
    date: "2024 – 2025",

    overview:
      "A long-term rental management platform designed for property owners to manage tenants, leases, and payments while providing analytics and AI-assisted insights.",

    background:
      "Managing rental properties often involves fragmented tools for payments, communication, and record keeping. HomeHive was designed to centralize these processes into a single platform while offering data-driven insights to help owners make informed decisions.",

    logo: "/images/homehive/homehive-logo.jpeg",
    github: "https://github.com/yourname/homehive",
    live: "https://homehive.app",

    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "AI"],

    project: "/images/homehive/display-1.png",

    screenshots: [
      {
        image: "/images/homehive/display-1.png",
        caption:
          "Figure 1. Main dashboard showing property occupancy, tenant status, and revenue metrics."
      },
      {
        image: "/images/homehive/tenants.png",
        caption:
          "Figure 2. Tenant management module displaying lease details and payment history."
      },
      {
        image: "/images/homehive/payments.png",
        caption:
          "Figure 3. Payment tracking interface summarizing rent status and outstanding balances."
      }
    ],

    footer:
      "Special Thanks to our Adviser who guided us "
  }
]
