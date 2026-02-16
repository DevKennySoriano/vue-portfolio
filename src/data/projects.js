/**
 * Web Projects Data
 * -----------------
 * General Academic + Personal Case Study Structure
 *
 * - date: Completion / publication date
 * - overview: Project summary / abstract
 * - background: Context and motivation
 * - objectives: List of project goals
 * - methodology: Development approach / process
 * - features: Key system features
 * - challenges: Problems encountered + learnings
 * - conclusion: Final outcome and impact
 * - project: Main banner image (16:9)
 * - screenshots: Supporting figures
 * - footer: Acknowledgements
 */

export const webProjects = [
  {
    slug: "all-about-pets",
    title: "All About Pets",
    date: "March 2024",
    

    overview:
      "A client-based academic web system developed for a pet care business to manage services, appointments, and client records through a centralized administrative dashboard.",

    background:
      "The project was developed as part of a mini-thesis requirement involving a real-world client. Prior to system implementation, the business relied on manual logbooks and spreadsheets, resulting in scheduling conflicts, delayed service processing, and inconsistent record management.",

    objectives: [
      "Digitize client and pet records.",
      "Automate appointment scheduling and service tracking.",
      "Improve operational efficiency and reduce human error.",
      "Provide an administrative dashboard for business insights."
    ],

    methodology:
      "The system was developed using a structured development approach, beginning with client consultation and requirements analysis. Database schema design was conducted prior to backend implementation. The application was built using PHP and MySQL, followed by iterative testing and user validation with the client.",

    features: [
      "Administrative dashboard with service statistics.",
      "Appointment approval and scheduling system.",
      "Client and pet record management.",
      "Search and filtering functionality.",
      "Secure login authentication system."
    ],

    challenges:
      "One of the primary challenges was aligning system features with real-world workflow practices of the client. Additionally, database normalization and ensuring data consistency required multiple refinements during development.",

    conclusion:
      "The system successfully transitioned the client from manual record-keeping to a digital management platform. It improved scheduling accuracy, reduced data redundancy, and enhanced overall operational efficiency.",

    logo: "/images/logos/pets-logo.png",
    github: "https://github.com/yourname/all-about-pets",
    live: "#",

    tags: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"],

    project: "/images/banners/PetsBanner.png",

    screenshots: [
      {
        image: "/images/screenshots/pets-dashboard.png",
        caption:
          "Administrative dashboard presenting service statistics and recent activity."
      },
      {
        image: "/images/screenshots/pets-appointments.png",
        caption:
          "Appointment management interface for approving or rescheduling bookings."
      },
      {
        image: "/images/screenshots/pets-records.png",
        caption:
          "Client and pet records module for maintaining historical data."
      }
    ],

    footer:
      "Special thanks to the project client, academic advisers, and peer reviewers for their guidance and valuable feedback."
  },

  {
    slug: "kapet-bahala-na",
    title: "Kapet Bahala Na",
    date: "January 2024",

    overview:
      "A café ordering and management system designed to streamline order processing, menu updates, and daily sales tracking for small businesses.",

    background:
      "This project explored how small-scale café operations can benefit from digital transformation. Many local cafés rely on handwritten receipts and manual tracking, which often leads to inaccurate sales monitoring and operational inefficiencies.",

    objectives: [
      "Develop a digital point-of-sale system.",
      "Enable menu and pricing management.",
      "Generate daily sales reports automatically.",
      "Reduce order processing time."
    ],

    methodology:
      "The system was developed using a modular approach. UI design focused on usability for café staff. Backend functionality was implemented using PHP and MySQL, with testing conducted through simulated daily café transactions.",

    features: [
      "Interactive point-of-sale interface.",
      "Menu management module.",
      "Daily sales reporting dashboard.",
      "Transaction history tracking.",
      "Revenue computation automation."
    ],

    challenges:
      "Ensuring fast order processing while maintaining data accuracy was a key challenge. Optimizing queries for daily sales summaries also required backend adjustments.",

    conclusion:
      "The project demonstrated how even small businesses can benefit from lightweight digital systems. It improved transaction accuracy and provided clear daily revenue insights.",

    logo: "/images/logos/kapet-logo.png",
    github: "",
    live: "#",

    tags: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"],

    project: "/images/banners/kapet-banner.png",

    screenshots: [
      {
        image: "/images/screenshots/kapet-orders.png",
        caption:
          "Point-of-sale interface used by café staff to process customer orders."
      },
      {
        image: "/images/screenshots/kapet-menu.png",
        caption:
          "Menu management screen for updating items and pricing."
      },
      {
        image: "/images/screenshots/kapet-sales.png",
        caption:
          "Daily sales report summarizing transactions and revenue."
      }
    ],

    footer:
      "Developed as a personal experimental project inspired by local café operations."
  },

  {
    slug: "homehive",
    title: "HomeHive",
    date: "2024 – 2025",

    overview:
      "A rental property management platform designed to centralize tenant management, lease tracking, and payment monitoring while integrating data-driven insights.",

    background:
      "Property owners often rely on fragmented tools for communication, billing, and record keeping. HomeHive was conceptualized to unify these processes into a single platform while leveraging analytics to support informed decision-making.",

    objectives: [
      "Centralize rental property data management.",
      "Provide tenant and lease tracking modules.",
      "Enable payment monitoring and reporting.",
      "Incorporate analytics for property insights."
    ],

    methodology:
      "The project followed an iterative development cycle, incorporating feedback from potential users. System architecture was planned to ensure scalability. Frontend and backend modules were developed in parallel and integrated through API-based communication.",

    features: [
      "Property occupancy dashboard.",
      "Tenant management module.",
      "Lease and contract tracking.",
      "Payment and balance monitoring.",
      "Analytical insights for property performance."
    ],

    challenges:
      "Designing a scalable database structure capable of supporting multiple properties and tenants required careful planning. Another challenge involved ensuring secure authentication and data protection.",

    conclusion:
      "HomeHive demonstrates how digital platforms can modernize rental management. The system centralizes data, enhances transparency, and supports property owners with actionable insights.",

    logo: "/images/homehive/homehive-logo.jpeg",
    github: "https://github.com/yourname/homehive",
    live: "https://homehive.app",

    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "AI"],

    project: "/images/homehive/display-1.png",

    screenshots: [
      {
        image: "/images/homehive/display-1.png",
        caption:
          "Main dashboard showing property occupancy and revenue metrics."
      },
      {
        image: "/images/homehive/tenants.png",
        caption:
          "Tenant management module displaying lease details."
      },
      {
        image: "/images/homehive/payments.png",
        caption:
          "Payment tracking interface summarizing rent status."
      }
    ],

    footer:
      "Special thanks to our academic adviser and development team members for their guidance throughout the project lifecycle."
  }
]
