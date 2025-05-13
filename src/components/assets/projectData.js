export const allProjects = [
  {
    id: "solo1",
    title: "Shofor Pothe",
    subtitle: "Comprehensive Travel Guidance for Bangladesh",
    description:
      "Welcome to Shofor Pothe, an online platform offering comprehensive guidance for travelers exploring popular destinations in Bangladesh.",
    image: "https://i.postimg.cc/TwcbjJg4/shofor-pothe.png",
    features: [
      "Responsive Design: The website is optimized for mobile, tablet, and desktop browsing.",
      "Navbar: Navigate easily through the site with a comprehensive navbar, including user-specific features upon login.",
      "Tourism and Travel Guide Section: Explore destination overviews, available packages, and tour guide profiles.",
      "Tour Type Section: Filter packages by tour type for personalized browsing.",
      "Package Details Page: View detailed information about specific tour packages and book tours.",
      "Authentication: Secure login and registration functionalities with social login options.",
      "User Dashboards: Tailored dashboards for tourists, tour guides, and admins, providing relevant information and actions.",
    ],
    frontEnd:
      "React Js with React Router for smooth navigation and Tailwind CSS for stunning UI.",
    backEnd: "using mongoDB, nodeJs, and express js.",
    liveLink: "https://assignment-12-d99e7.web.app/",
    codeLink: "https://github.com/Mehedimid/ShoforPothe_frontEnd",
  },
  {
    id: 'team1',
    title: "Basa Finder",
    subtitle: "A team project on Smart Rental & Housing Solution (Team Leader)",
    description:
      "As the team leader, I led the development of Basa Finder — a full-stack web application that bridges the gap between tenants and landlords by offering a smart rental housing solution. It enables landlords to list properties, tenants to request rentals, and admins to manage platform activity — all within a secure, role-based dashboard system.",
    image: "https://i.postimg.cc/wMNMXR0R/Screenshot-2025-05-02-103250.png",
    features: [
      "Smart Listings: Landlords can post rental listings with full details including rent, bedrooms, description, amenities, and multiple images.",
      "Advanced Search & Filters: Tenants can filter rental listings by location, price range, and number of bedrooms.",
      "Rental Request Workflow: Tenants can send rental requests, and landlords can approve/reject with detailed communication and optional phone sharing.",
      "Role-Based Dashboards: Custom dashboards for Admins (user and listing management), Landlords (post and request control), and Tenants (request tracking and payment handling).",
      "Payment Integration: Upon approval, tenants can make secure payments (e.g., Stripe) to finalize bookings.",
      "Authentication & Access Control: JWT-based login system with bcrypt-secured passwords and strict role access enforcement.",
      "Email Notifications: Users receive updates about rental request status and interactions.",
      "Profile & Password Management: All users can edit profiles and update passwords securely.",
    ],
    frontEnd:
      "Next.js with TypeScript for performance and type safety, Tailwind CSS for styling, and React for dynamic UI.",
    backEnd:
      "Node.js with Express for building RESTful APIs, MongoDB for data persistence, JWT for authentication, and bcrypt for secure password storage.",
    liveLink: "https://basa-finder-client-rosy.vercel.app/",
    codeLink: "https://github.com/Mehedimid/rental-house-client",
  },
  {
    id: "team2",
    title: "Quick Fit",
    subtitle: "A Team project on Health and Fitnes platform for users",
    description:
      "Quick Fit is dedicated to providing a comprehensive platform that caters to all aspects of health and fitness. Our mission is to empower individuals to lead healthier lifestyles through curated content, personalized experiences, and a supportive community.",
    image: "https://i.postimg.cc/FR81kVgQ/Screenshot-2025-05-02-103210.png",
    features: [
      "Eshop: The Eshop section aims to provide users with an interactive platform for purchasing health-related products.",
      "Fitness Tracker: The Fitness Tracker allows users to track their exercise progress and view their daily achievements. ",
      "Category Articles: In the home page User can see the category section. Users can explore health-related articles categorized by topics and purchase relevant books. ",
      "Blogs Section: Users can engage with health-related articles presented as news stories and monthly posts, with features like liking, commenting, and adding bookmarks. ",
      "Admin Dashboard Product Section: Allows admin to analyze product sales and other data.",
      "Courses Section: In the Courses section, users can explore various educational modules, view course details, and engage in interactive quizzes to assess their understanding.",
    ],
    frontEnd:
      "Next.js for server-side rendering, Tailwind CSS for styling, Framer Motion for animations, Firebase for authentication and real-time database functionality.",
    backEnd: "MongoDB, Node.js, Express.js",
    liveLink: "https://quick-fit-client.vercel.app/",
    codeLink: "https://github.com/Reduan4u/QuickFit-Client",
  },
  {
    id: "team3",
    title: "Bike Museum 🏍️",
    subtitle:
      "An e-commerce Bike Shop with role-based access and secure checkout",
    description:
      "Bike Museum is a full-stack e-commerce platform for buying bikes with a responsive design and seamless user experience. It includes user registration, JWT-based authentication, role-based dashboards (admin and user), product search and filtering, checkout with SurjoPay integration, and complete order management. The platform ensures secure transactions and efficient product handling.",
    image: "https://i.postimg.cc/Kcf1FqNk/Screenshot-2025-05-02-125100.png",
    features: [
      "Secure Registration & Login: Passwords are hashed and JWT tokens manage user sessions.",
      "Role-Based Dashboards: Admins manage users, products, and orders. Users can view and manage their orders and profiles.",
      "Product Management: Admins can add, update, or delete bike listings, each with brand, category, price, stock, and model info.",
      "Search & Filters: Users can search by brand, bike name, or category and apply filters for price, availability, and more.",
      "Checkout System: Includes SurjoPay payment integration and validation against available stock.",
      "Order Tracking: Users can view order status (Pending, Processing, Shipped, Delivered) with real-time updates from the admin.",
      "User Profile & Security: Profile editing and password update with validation for current password.",
      "Responsive UI: Fully mobile-friendly layout with intuitive navigation and visual clarity.",
      "Toast & Error Handling: Real-time feedback for login, order, and form actions with proper error displays.",
    ],
    frontEnd:
      "Next.js with TypeScript, Tailwind CSS, React for component-based UI and client-side routing.",
    backEnd:
      "Node.js with Express for REST APIs, MongoDB for database, JWT for secure authentication, bcrypt for hashing.",
    liveLink: "https://bike-museum-five.vercel.app/",
    codeLink: "https://github.com/aristoxcel/Bike-Museum",
  },
  {
    id: "solo2",
    title: "Skill Sync",
    subtitle:
      "Platform for Diverse Services and a Thriving Community of Service Providers",
    description:
      "Welcome to SkillSync, your go-to platform for diverse services and a thriving community of service providers. Explore a world of possibilities, from watching available services to booking and managing your own offerings.",
    image: "https://i.postimg.cc/Y9ZXXzFp/skillsync.png",
    features: [
      "Discover Services: Explore a variety of services on our home page, enriched with detailed information about service providers.",
      "Book Services: Easily book services after reviewing detailed information on specific service detail pages.",
      "Manage Bookings: View and manage your booked services on the 'My Bookings' page.",
      "Add Your Services: Contribute to our vibrant community by adding your own services on the 'Add a Service' page.",
      "Pending Services: Keep track of services booked by other users on the 'My Pending' page.",
      "Service Updates: Service providers can update booked services with ease.",
      "Authentication: Secure login and registration functionalities with social login options.",
    ],
    frontEnd:
      "React Js with React Router for smooth navigation and Tailwind CSS for stunning UI.",
    backEnd: "using mongoDB, nodeJs, and express js.",
    liveLink: "https://skill-sync1.surge.sh",
    codeLink: "https://github.com/Mehedimid/skill-sync-11",
  },
  {
    id: "solo3",
    title: "TaskJET",
    subtitle: "Task Management Website for Students",
    description:
      " TaskJET is a task management website tailored exclusively for students, aimed at enhancing productivity, reducing stress, and facilitating a smoother academic journey. Our platform offers intuitive features to help students organize their tasks efficiently. From assignment deadlines to exam schedules, TaskJET ensures no task is overlooked, empowering students to stay on top of their academic commitments. With TaskJET, students can bid farewell to the chaos of disorganization and embrace a structured approach to task management. ",
    image: "https://i.postimg.cc/WpFN2q9b/taskjet.png",
    features: [
      "User authentication with Firebase",
      "Responsive design for both desktop and mobile devices",
      "Task management with options to add, edit, and mark tasks as ongoing or completed",
    ],
    frontEnd: "React, Tailwind CSS, Firebase (Authentication)",
    backEnd: "Node.js, Express.js, MongoDB",
    liveLink: "https://taskjet-36f09.web.app/",
    codeLink: "https://github.com/Mehedimid/Task-Jet-Client",
  },
];

export const soloProjects = [
  {
    id: "solo1",
    title: "Shofor Pothe",
    subtitle: "Comprehensive Travel Guidance for Bangladesh",
    description:
      "Welcome to Shofor Pothe, an online platform offering comprehensive guidance for travelers exploring popular destinations in Bangladesh.",
    image: "https://i.postimg.cc/TwcbjJg4/shofor-pothe.png",
    features: [
      "Responsive Design: The website is optimized for mobile, tablet, and desktop browsing.",
      "Navbar: Navigate easily through the site with a comprehensive navbar, including user-specific features upon login.",
      "Tourism and Travel Guide Section: Explore destination overviews, available packages, and tour guide profiles.",
      "Tour Type Section: Filter packages by tour type for personalized browsing.",
      "Package Details Page: View detailed information about specific tour packages and book tours.",
      "Authentication: Secure login and registration functionalities with social login options.",
      "User Dashboards: Tailored dashboards for tourists, tour guides, and admins, providing relevant information and actions.",
    ],
    frontEnd:
      "React Js with React Router for smooth navigation and Tailwind CSS for stunning UI.",
    backEnd: "using mongoDB, nodeJs, and express js.",
    liveLink: "https://assignment-12-d99e7.web.app/",
    codeLink: "https://github.com/Mehedimid/ShoforPothe_frontEnd",
  },
  {
    id: "solo2",
    title: "Skill Sync",
    subtitle:
      "Platform for Diverse Services and a Thriving Community of Service Providers",
    description:
      "Welcome to SkillSync, your go-to platform for diverse services and a thriving community of service providers. Explore a world of possibilities, from watching available services to booking and managing your own offerings.",
    image: "https://i.postimg.cc/Y9ZXXzFp/skillsync.png",
    features: [
      "Discover Services: Explore a variety of services on our home page, enriched with detailed information about service providers.",
      "Book Services: Easily book services after reviewing detailed information on specific service detail pages.",
      "Manage Bookings: View and manage your booked services on the 'My Bookings' page.",
      "Add Your Services: Contribute to our vibrant community by adding your own services on the 'Add a Service' page.",
      "Pending Services: Keep track of services booked by other users on the 'My Pending' page.",
      "Service Updates: Service providers can update booked services with ease.",
      "Authentication: Secure login and registration functionalities with social login options.",
    ],
    frontEnd:
      "React Js with React Router for smooth navigation and Tailwind CSS for stunning UI.",
    backEnd: "using mongoDB, nodeJs, and express js.",
    liveLink: "https://skill-sync1.surge.sh",
    codeLink: "https://github.com/Mehedimid/skill-sync-11",
  },
  {
    id: "solo3",
    title: "TaskJET",
    subtitle: "Task Management Website for Students",
    description:
      " TaskJET is a task management website tailored exclusively for students, aimed at enhancing productivity, reducing stress, and facilitating a smoother academic journey. Our platform offers intuitive features to help students organize their tasks efficiently. From assignment deadlines to exam schedules, TaskJET ensures no task is overlooked, empowering students to stay on top of their academic commitments. With TaskJET, students can bid farewell to the chaos of disorganization and embrace a structured approach to task management. ",
    image: "https://i.postimg.cc/WpFN2q9b/taskjet.png",
    features: [
      "User authentication with Firebase",
      "Responsive design for both desktop and mobile devices",
      "Task management with options to add, edit, and mark tasks as ongoing or completed",
    ],
    frontEnd: "React, Tailwind CSS, Firebase (Authentication)",
    backEnd: "Node.js, Express.js, MongoDB",
    liveLink: "https://taskjet-36f09.web.app/",
    codeLink: "https://github.com/Mehedimid/Task-Jet-Client",
  },
];

export const teamProjects = [
  {
    id: "team1",
    title: "Basa Finder",
    subtitle: "A team project on Smart Rental & Housing Solution (Team Leader)",
    description:
      "As the team leader, I led the development of Basa Finder — a full-stack web application that bridges the gap between tenants and landlords by offering a smart rental housing solution. It enables landlords to list properties, tenants to request rentals, and admins to manage platform activity — all within a secure, role-based dashboard system.",
    image: "https://i.postimg.cc/wMNMXR0R/Screenshot-2025-05-02-103250.png",
    features: [
      "Smart Listings: Landlords can post rental listings with full details including rent, bedrooms, description, amenities, and multiple images.",
      "Advanced Search & Filters: Tenants can filter rental listings by location, price range, and number of bedrooms.",
      "Rental Request Workflow: Tenants can send rental requests, and landlords can approve/reject with detailed communication and optional phone sharing.",
      "Role-Based Dashboards: Custom dashboards for Admins (user and listing management), Landlords (post and request control), and Tenants (request tracking and payment handling).",
      "Payment Integration: Upon approval, tenants can make secure payments (e.g., Stripe) to finalize bookings.",
      "Authentication & Access Control: JWT-based login system with bcrypt-secured passwords and strict role access enforcement.",
      "Email Notifications: Users receive updates about rental request status and interactions.",
      "Profile & Password Management: All users can edit profiles and update passwords securely.",
    ],
    frontEnd:
      "Next.js with TypeScript for performance and type safety, Tailwind CSS for styling, and React for dynamic UI.",
    backEnd:
      "Node.js with Express for building RESTful APIs, MongoDB for data persistence, JWT for authentication, and bcrypt for secure password storage.",
    liveLink: "https://basa-finder-client-rosy.vercel.app/",
    codeLink: "https://github.com/Mehedimid/rental-house-client",
  },
  {
    id: "team2",
    title: "Quick Fit",
    subtitle: "A Team project on Health and Fitnes platform for users",
    description:
      "Quick Fit is dedicated to providing a comprehensive platform that caters to all aspects of health and fitness. Our mission is to empower individuals to lead healthier lifestyles through curated content, personalized experiences, and a supportive community.",
    image: "https://i.postimg.cc/FR81kVgQ/Screenshot-2025-05-02-103210.png",
    features: [
      "Eshop: The Eshop section aims to provide users with an interactive platform for purchasing health-related products.",
      "Fitness Tracker: The Fitness Tracker allows users to track their exercise progress and view their daily achievements. ",
      "Category Articles: In the home page User can see the category section. Users can explore health-related articles categorized by topics and purchase relevant books. ",
      "Blogs Section: Users can engage with health-related articles presented as news stories and monthly posts, with features like liking, commenting, and adding bookmarks. ",
      "Admin Dashboard Product Section: Allows admin to analyze product sales and other data.",
      "Courses Section: In the Courses section, users can explore various educational modules, view course details, and engage in interactive quizzes to assess their understanding.",
    ],
    frontEnd:
      "Next.js for server-side rendering, Tailwind CSS for styling, Framer Motion for animations, Firebase for authentication and real-time database functionality.",
    backEnd: "MongoDB, Node.js, Express.js",
    liveLink: "https://quick-fit-client.vercel.app/",
    codeLink: "https://github.com/Reduan4u/QuickFit-Client",
  },
  {
    id: "team3",
    title: "Bike Museum",
    subtitle:
      "An e-commerce Bike Shop with role-based access and secure checkout",
    description:
      "Bike Museum is a full-stack e-commerce platform for buying bikes with a responsive design and seamless user experience. It includes user registration, JWT-based authentication, role-based dashboards (admin and user), product search and filtering, checkout with SurjoPay integration, and complete order management. The platform ensures secure transactions and efficient product handling.",
    image: "https://i.postimg.cc/Kcf1FqNk/Screenshot-2025-05-02-125100.png",
    features: [
      "Secure Registration & Login: Passwords are hashed and JWT tokens manage user sessions.",
      "Role-Based Dashboards: Admins manage users, products, and orders. Users can view and manage their orders and profiles.",
      "Product Management: Admins can add, update, or delete bike listings, each with brand, category, price, stock, and model info.",
      "Search & Filters: Users can search by brand, bike name, or category and apply filters for price, availability, and more.",
      "Checkout System: Includes SurjoPay payment integration and validation against available stock.",
      "Order Tracking: Users can view order status (Pending, Processing, Shipped, Delivered) with real-time updates from the admin.",
      "User Profile & Security: Profile editing and password update with validation for current password.",
      "Responsive UI: Fully mobile-friendly layout with intuitive navigation and visual clarity.",
      "Toast & Error Handling: Real-time feedback for login, order, and form actions with proper error displays.",
    ],
    frontEnd:
      "Next.js with TypeScript, Tailwind CSS, React for component-based UI and client-side routing.",
    backEnd:
      "Node.js with Express for REST APIs, MongoDB for database, JWT for secure authentication, bcrypt for hashing.",
    liveLink: "https://bike-museum-five.vercel.app/",
    codeLink: "https://github.com/aristoxcel/Bike-Museum",
  },
];
