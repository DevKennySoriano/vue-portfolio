export const webProjects = [
  {
    slug: "all-about-pets",
    title: "All About Pets",
    date: "2022 - 2023",
    overview:
      "A real-client thesis project proposal for a pet care business, designed to digitize services, appointments, and client records through a centralized administrative dashboard. The project was not completed and is currently archived.",
    background:
      "This study was prepared as a thesis project proposal in collaboration with a real-world client. Before the proposed system, the business relied on manual logbooks and spreadsheets, which led to scheduling conflicts, delayed service processing, and inconsistent record management. Due to timeline and institutional constraints, the project was not completed and was formally archived.",
    objectives: [
      "Digitize client and pet records.",
      "Automate appointment scheduling and service tracking.",
      "Improve operational efficiency and reduce human error.",
      "Provide an administrative dashboard for business insights."
    ],
    methodology:
      "The proposal followed a structured development process that included client consultation, requirements analysis, and system design. A prototype was developed using PHP and MySQL to validate key workflows and interface behavior, followed by iterative testing and client feedback sessions.",
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
      "The project produced a client-aligned thesis proposal and initial prototype for digital pet care operations. However, development was not completed, and the project has been archived for possible future continuation.",
    logo: "/images/allaboutpets/allaboutpets-logo.jpg",
    github: "https://github.com/DevKennySoriano/allaboutpets",
    live: "https://devkennysoriano-allaboutpets.vercel.app",
    tags: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"],
    project: "/images/allaboutpets/dashboard.png",
    screenshots: [
      {
        image: "/images/allaboutpets/services.png",
        caption:
          "Main page services section presenting available pet care offerings."
      },
      {
        image: "/images/allaboutpets/nurses.png",
        caption:
          "Main page nurse details placeholder section for staff information display."
      },
      {
        image: "/images/allaboutpets/loginpage.png",
        caption:
          "Secure login page for administrator authentication and access control."
      },
      {
        image: "/images/allaboutpets/footer-contact.png",
        caption:
          "Footer contact section located at the bottom of the page for inquiries and support."
      }
    ],
    footer:
      "Developers: Brizo Daniella, Obina Aldrin, Daguro Elijah, Soriano Kenny."
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
      "HomeHive is an innovative web-based rental property management system that connects tenants and property owners with secure property listings, integrated payment processing, intelligent communication tools, and AI-powered predictive maintenance for long-term rentals.",
    background:
      "Tenants struggle with finding reliable apartments through fragmented listings, while property owners lack efficient digital tools for payment tracking, lease management, and property maintenance. HomeHive addresses these challenges by providing a unified platform with role-based access, automated payment management, comprehensive lease tracking, and AI-assisted predictive maintenance to enhance the rental experience and streamline property operations.",
    objectives: [
      "Design and develop an integrated rental management system with contract, payment, and dashboard modules.",
      "Implement role-based access control for admins, property owners, and tenants.",
      "Develop AI-powered predictive maintenance assistant for property owners.",
      "Integrate secure payment processing and automated rent tracking.",
      "Ensure long-term rental support with comprehensive lease and occupancy management.",
      "Evaluate system quality using ISO 25010 standards for functionality, usability, reliability, security, and data privacy."
    ],
    methodology:
      "The project followed an iterative development cycle with user feedback integration. System architecture was designed for scalability and security. Frontend and backend modules were developed in parallel using API-based communication with role-based authentication implemented at every layer.",
    features: [
      "Dashboard with property occupancy and revenue metrics.",
      "Contract and lease management with digital signatures.",
      "Secure payment processing with balance tracking.",
      "AI predictive assistant for maintenance recommendations.",
      "Tenant management module with communication tools.",
      "Role-based access control (Admin, Owner, Tenant).",
      "Automated payment reminders and receipts.",
      "Analytical insights for property performance.",
      "Long-term rental support with renewal tracking.",
      "Encrypted data storage and transaction logging."
    ],
    challenges:
      `Developing HomeHive was both challenging and rewarding. One of the main challenges was organizing the system to manage properties, tenants, payments, and contracts in one platform. We had to make sure the data was secure and accurate, especially for user accounts and payment tracking. Connecting the frontend and backend properly also required careful testing to avoid errors. Another challenge was building the analytics and maintenance features in a way that was easy to understand and useful for users. Through this project, we improved our skills in full-stack development, database management, and problem-solving. We also learned the importance of clean code, proper planning, and teamwork when building a complete system.`,
    conclusion:
  "HomeHive shows how a digital platform can improve and simplify rental property management. The system combines important features such as contract management, payment tracking, tenant records, and property analytics in one centralized platform. By integrating secure authentication and AI-powered insights, HomeHive helps property owners make better decisions and maintain their properties more efficiently. Overall, the system creates a more organized, transparent, and secure environment for property owners, tenants, and administrators.",
    logo: "/images/homehive/homehive-logo.jpeg",
    github: "https://github.com/yourname/homehive",
    live: "https://homehive.app",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "AI Integration", "Payment Gateway"],
    project: "/images/homehive/homehive-landing-page-sample.png",
    screenshots: [
  {
    image: "/images/homehive/homehive-userdashboard-sample.png",
    caption:
      "Main dashboard displaying property occupancy rates, revenue metrics, and overall performance insights."
  },
  {
    image: "/images/homehive/homehive-receipt-sample.png",
    caption:
      "Secure payment tracking interface with automated rent collection and digital receipt management."
  },
  {
    image: "/images/homehive/homehive-sign-in-sample.png",
    caption:
      "User authentication page with secure sign-in and access control."
  },
  {
    image: "/images/homehive/homehive-property-analytics-sample.png",
    caption:
      "Property analytics dashboard with AI-powered insights and predictive maintenance recommendations."
  },
  {
    image: "/images/homehive/homehive-forgot-password-sample.png",
    caption:
      "Forgot password interface with secure password reset functionality."
  },
  {
    image: "/images/homehive/homehive-analytics-report-sample.png",
    caption:
      "Generate report interface with detailed property performance and financial insights with printable report."
  },
   {
    image: "/images/homehive/homehive-ai-predictive-chat-sample.png",
    caption:
      "AI-powered predictive assistant providing maintenance recommendations and property insights."
  },
  {
    image: "/images/homehive/homehive-map-sample.png",
    caption:
      "Interactive property map view showing locations, listings, and geospatial insights."
  }
],

footer: `
Special thanks to our academic adviser, Juville Agpaoa,
for the continuous guidance and support.

This project was collaboratively developed by
Angelo Flores, Zachary Estacio, Elijah Daguro, and Kenny Soriano.

Bee Smart. Bee Secure. Bee Home with HomeHive.
`



  }
]
