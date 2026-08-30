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
    logo: "/images/allaboutpets/allaboutpets-logo.webp",
    github: "https://github.com/DevKennySoriano/allaboutpets",
    live: "https://devkennysoriano-allaboutpets.vercel.app",
    tags: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"],
    project: "/images/allaboutpets/dashboard.webp",
    screenshots: [
      {
        image: "/images/allaboutpets/services.webp",
        caption:
          "Main page services section presenting available pet care offerings."
      },
      {
        image: "/images/allaboutpets/nurses.webp",
        caption:
          "Main page nurse details placeholder section for staff information display."
      },
      {
        image: "/images/allaboutpets/loginpage.webp",
        caption:
          "Secure login page for administrator authentication and access control."
      },
      {
        image: "/images/allaboutpets/footer-contact.webp",
        caption:
          "Footer contact section located at the bottom of the page for inquiries and support."
      }
    ],
    footer:
      "Developers: Brizo Daniella, Obina Aldrin, Daguro Elijah, Soriano Kenny."
  },
  {
    slug: "kapet-bahala-na",
    title: "Kape't Bahala Na",
    date: "January 2024",
    overview:
      "This project was developed as part of a technical task in my Wizzard Technologies Inc. journey (On-the-Job Training). It reflects my practical learning experience in full-stack web development, including Laravel architecture, Blade component design, database integration, and modern frontend tooling.",
    background:
      "Kapet Bahala Na explores how a café workflow can be organized through a structured web application. The system focuses on creating a smoother experience for user authentication, registration, product browsing, feedback collection, and dashboard monitoring while reinforcing the full-stack concepts learned during OJT.",
    objectives: [
      "Apply Laravel architecture in a practical development task.",
      "Build reusable Blade-based interface components.",
      "Integrate database-backed workflows for user and content management.",
      "Present café operations through a clear and responsive interface."
    ],
    methodology:
      "The project was developed using a modular full-stack approach centered on Laravel, Blade components, and database-driven features. Interface behavior and content structure were refined through iterative testing so the system remained easy to use and aligned with the project requirements from the technical task.",
    features: [
      "Secure login and registration screens.",
      "Dashboard view for monitoring system activity.",
      "Coffee drink and menu browsing section.",
      "Customer rating and feedback area.",
      "Validation and success modals for form handling."
    ],
    challenges:
      "A key challenge was keeping the interface organized while handling authentication, validation feedback, and content sections in a single project. Balancing the Blade component structure with database integration and responsive presentation also required careful refinement.",
    conclusion:
      "Kapet Bahala Na strengthened my understanding of full-stack development through a real technical task environment. The project helped me practice Laravel-based architecture, Blade component design, and database integration while building a polished café-focused web application.",
    logo: "/images/icons/K.png",
    github: "https://github.com/DevKennySoriano/KAPE",
    live: "",
    tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Vue", "Vite"],
    project: "/images/kape/systemoverview.webp",
    screenshots: [
      {
        image: "/images/kape/initial-dashboard-sample.webp",
        caption:
          "Initial dashboard sample showing the main administration layout for the café system."
      },
      {
        image: "/images/kape/loginpage.webp",
        caption:
          "Login page used for secure access to the application."
      },
      {
        image: "/images/kape/registerpage.webp",
        caption:
          "Registration page for creating new user accounts in the system."
      },
      {
        image: "/images/kape/register-success-modal.webp",
        caption:
          "Success modal displayed after a successful registration submission."
      },
      {
        image: "/images/kape/register-error-validation-sample.webp",
        caption:
          "Validation example showing form feedback when registration input is incomplete or invalid."
      },
      {
        image: "/images/kape/mustrycoffeedrinks.webp",
        caption:
          "Coffee drinks section for browsing available menu items and product offerings."
      },
      {
        image: "/images/kape/ratingsection.webp",
        caption:
          "Customer rating section for collecting feedback and user impressions."
      },
      {
        image: "/images/kape/systemoverview.webp",
        caption:
          "System overview image presenting the overall Kapet Bahala Na interface and workflow."
      }
    ],
    footer:
      "Developed as part of a technical task during my Wizzard Technologies Inc. OJT journey."
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
    logo: "/images/homehive/homehive-logo.webp",
    github: "",
    live: "",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "AI Integration", "Payment Gateway"],
    project: "/images/homehive/homehive-landing-page-sample.webp",
    screenshots: [
  {
    image: "/images/homehive/homehive-userdashboard-sample.webp",
    caption:
      "Main dashboard displaying property occupancy rates, revenue metrics, and overall performance insights."
  },
  {
    image: "/images/homehive/homehive-receipt-sample.webp",
    caption:
      "Secure payment tracking interface with automated rent collection and digital receipt management."
  },
  {
    image: "/images/homehive/homehive-sign-in-sample.webp",
    caption:
      "User authentication page with secure sign-in and access control."
  },
  {
    image: "/images/homehive/homehive-property-analytics-sample.webp",
    caption:
      "Property analytics dashboard with AI-powered insights and predictive maintenance recommendations."
  },
  {
    image: "/images/homehive/homehive-forgot-password-sample.webp",
    caption:
      "Forgot password interface with secure password reset functionality."
  },
  {
    image: "/images/homehive/homehive-analytics-report-sample.webp",
    caption:
      "Generate report interface with detailed property performance and financial insights with printable report."
  },
   {
    image: "/images/homehive/homehive-ai-predictive-chat-sample.webp",
    caption:
      "AI-powered predictive assistant providing maintenance recommendations and property insights."
  },
  {
    image: "/images/homehive/homehive-map-sample.webp",
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



  },
  {
    slug: "swak-cart",
    title: "SWAK-CART",
    date: "April 2026",
    overview:
      "SWAK-CART is a modern, responsive grocery companion web app built with Vue 3 and Vite to help users shop smarter and stay within budget through real-time tracking and actionable checkout suggestions. It is designed for instant browser use with no download and no account required.",
    background:
      "The project was built to solve common grocery shopping pain points such as unclear spending, lack of budget visibility, and difficulty deciding what to remove or add before checkout. SWAK-CART provides a practical flow from budget setup to receipt export in a single browser-based experience that is easy to access on desktop or mobile.",
    objectives: [
      "Provide real-time budget tracking while users build their grocery cart.",
      "Support a searchable and category-filterable grocery catalog with 100+ items.",
      "Allow manual item entry with editable price and quantity controls.",
      "Offer smart suggestions when users are over or under budget.",
      "Generate a clean, print-friendly PDF receipt upon cart completion."
    ],
    methodology:
      "SWAK-CART follows a modular Composition API architecture where budget, catalog, cart, tutorial, and receipt logic are isolated into composables. UI flows were iteratively refined with responsive testing across desktop and mobile, then enhanced with guided walkthroughs, alerts, and printable output handling.",
    features: [
      "No download needed and no account required for immediate use.",
      "Easy browser access across desktop, tablet, and mobile devices.",
      "Real-time budget usage, remaining budget, and category spending totals.",
      "Search and category filtering across a 100+ grocery product catalog.",
      "Manual product entry for items not found in the catalog.",
      "Editable cart with quantity and price controls plus item removal.",
      "Over-budget removal suggestions and under-budget essential recommendations.",
      "Receipt preview and PDF export with print-friendly layout.",
      "Guided in-app tutorial for desktop and mobile user flows.",
      "Responsive UI with section animations and smooth transitions."
    ],
    challenges:
      "One key challenge was balancing multiple shopping states in real time: budget totals, cart edits, category breakdowns, and recommendation logic all had to remain synchronized. Designing suggestion behavior that is helpful and explainable, while still performant and intuitive on mobile screens, also required repeated tuning and UI iteration.",
    conclusion:
      "SWAK-CART demonstrates how a focused, user-centered grocery workflow can combine budgeting, product discovery, and checkout preparation in one clean web experience. The project strengthened practical frontend architecture, state orchestration, and UX thinking around everyday financial decisions.",
    logo: "/images/swak-cart/logo.webp",
    github: "https://github.com/DevKennySoriano/swak-cart",
    live: "https://swak-cart.vercel.app/",
    tags: ["Vue 3", "Vite", "JavaScript", "CSS3", "AOS", "SweetAlert2", "Driver.js", "jsPDF"],
    project: "/images/swak-cart/swakcart-system-overview.webp",
    screenshots: [
      {
        image: "/images/swak-cart/product-add-to-cart-sample.webp",
        caption:
          "Product list with add-to-cart actions, search, and category-based browsing."
      },
      {
        image: "/images/swak-cart/category-sort-sample.webp",
        caption:
          "Category sorting flow for quickly narrowing down grocery products."
      },
      {
        image: "/images/swak-cart/your-cart.webp",
        caption:
          "Cart panel showing editable prices, quantities, and running totals."
      },
      {
        image: "/images/swak-cart/overbudget-displayed-and-alert.webp",
        caption:
          "Over-budget state with real-time alert feedback to guide user decisions."
      },
      {
        image: "/images/swak-cart/suggested-esstentials-displayed.webp",
        caption:
          "Smart essentials recommendation panel displayed when budget remains."
      },
      {
        image: "/images/swak-cart/user-guide-tutorial-manual-sample.webp",
        caption:
          "Built-in guided tutorial for onboarding key actions on desktop and mobile."
      },
      {
        image: "/images/swak-cart/complete-print-preview.webp",
        caption:
          "Receipt preview shown before confirming print and cart completion."
      },
      {
        image: "/images/swak-cart/print-receipt-sample-invoice.webp",
        caption:
          "PDF receipt output in a clean, print-ready invoice format."
      },
      {
        image: "/images/swak-cart/mobile-version-responsiveness-sample.webp",
        caption:
          "Responsive mobile layout with tab-driven flow for products and cart."
      }
    ],
    footer:
      "Built and maintained by Kenny Soriano as a production-ready grocery budgeting and cart planning application. Image assets acknowledgements: Pexels contributors."
  },
{
  slug: "Lutowl",
  title: "Lutowl",
  date: "2026 – Present",
  overview:
    "Lutowl is a modern web-based platform designed to help people decide what to cook quickly and easily, with a strong focus on everyday Filipino cuisine. It brings recipes, meal ideas, and personal collections into one simple platform, making cooking more organized, practical, and less stressful.",

  background:
    "Many people struggle with deciding what to cook, especially when recipes are scattered across notes, social media, or memory. This is even more common with Filipino dishes that are often passed down informally. Lutowl was created as a web-based solution to centralize these recipes into one platform where users can discover, manage, and preserve Filipino meals while also exploring new ideas in a more organized way.",

  objectives: [
    "Help users quickly decide what Filipino dish to cook based on their needs.",
    "Provide a simple web-based platform for storing and managing Filipino recipes.",
    "Allow users to explore and rediscover everyday Filipino meals.",
    "Support interaction through saving, liking, and engaging with recipes.",
    "Deliver a smooth experience across mobile, tablet, and desktop."
  ],

  methodology:
    "Lutowl is developed as a web-based application using a modern approach focused on simplicity and usability. Features are built step by step, tested, and improved continuously to ensure a smooth experience. The system connects a clean interface with a secure backend to handle recipes, user data, and interactions efficiently.",

  features: [
    "Create, edit, and manage personal Filipino recipes.",
    "Browse and search recipes by category, ingredients, or preferences.",
    "Save and bookmark favorite dishes for later.",
    "Like and interact with recipes from other users.",
    "View estimated calories and nutrition information.",
    "Upload and manage recipe images.",
    "Secure login and user account system.",
    "Personal dashboard for managing recipes and activity.",
    "Responsive design for all screen sizes.",
    "AI-powered cooking assistant for meal suggestions, questions, and ingredient substitutions."
  ],

  challenges:
    "One of the main challenges was keeping the app simple while supporting multiple features like recipe creation, discovery, and user interaction. It was also important to present Filipino recipes in a clear and structured way while still keeping their traditional and flexible nature. Ensuring a smooth experience across different devices required continuous testing and refinement.",

  conclusion:
    "Lutowl shows how everyday Filipino cooking can be transformed into a simple and meaningful digital experience. As a web-based platform, it makes recipe discovery accessible anytime without downloads. By combining easy-to-use features with practical recipe discovery, the system helps users make faster cooking decisions while preserving and sharing Filipino cuisine. The project continues to evolve with new improvements and features.",

  logo: "/images/Lutowl/lutowl-logo-light-purple.webp",
  github: "https://github.com/DevKennySoriano/lutowl",
  live: "https://lutowl.site/",

  tags: [
    "Vue 3",
    "Vite",
    "JavaScript",
    "CSS3",
    "Supabase",
    "PostgreSQL",
    "Google API",
    "AI Integration"
  ],

  project: "/images/Lutowl/System-Overview.webp",

  screenshots: [
    {
      image: "/images/Lutowl/Lutowl-1.webp",
      caption:
        "Homepage highlighting Filipino dishes, categories, and featured recipes."
    },
    {
      image: "/images/Lutowl/Lutowl-2.webp",
      caption:
        "Recipe browsing section with filters and an organized grid of Filipino meals."
    },
    {
      image: "/images/Lutowl/Lutowl-3.webp",
      caption:
        "Detailed recipe view showing ingredients, steps, and cooking instructions."
    },
    {
      image: "/images/Lutowl/Lutowl-4.webp",
      caption:
        "Recipe creation form for adding new Filipino dishes with structured details."
    },
    {
      image: "/images/Lutowl/Lutowl-5.webp",
      caption:
        "User dashboard for managing recipes, saved dishes, and activity."
    },
    {
      image: "/images/Lutowl/Lutowl-6.webp",
      caption:
        "AI-powered cooking assistant that provides instant meal suggestions, answers cooking questions, and suggests ingredient substitutions based on user needs."
    },
    {
      image: "/images/Lutowl/Lutowl-7.webp",
      caption:
        "Mobile-responsive layout optimized for cooking and browsing on any device."
    }
  ],

  footer:
    "Designed and developed by Kenny Soriano. Lutowl is an evolving web-based platform dedicated to making Filipino cooking easier, more accessible, and more meaningful."
}
]
