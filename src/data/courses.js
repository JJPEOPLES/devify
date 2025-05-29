const courses = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    description: "Learn the building blocks of web development with HTML5 and CSS3. Create responsive layouts and beautiful designs.",
    level: "Beginner",
    duration: "4 weeks",
    instructor: "Prime",
    image: "/images/courses/html-css.jpg",
    price: "Free",
    rating: 4.8,
    topics: [
      "HTML5 Semantic Elements",
      "CSS Box Model",
      "Flexbox & Grid",
      "Responsive Design",
      "CSS Variables",
      "CSS Animations"
    ],
    content: [
      {
        title: "Introduction to HTML",
        lessons: [
          "What is HTML and how does it work?",
          "Setting up your development environment",
          "Creating your first HTML page",
          "Understanding HTML document structure",
          "HTML elements, tags, and attributes"
        ]
      },
      {
        title: "HTML5 Semantic Elements",
        lessons: [
          "Why semantic HTML matters",
          "Header, footer, and navigation elements",
          "Section, article, and aside elements",
          "Figure and figcaption elements",
          "Practical exercises: Building a semantic webpage"
        ]
      },
      {
        title: "Introduction to CSS",
        lessons: [
          "What is CSS and how does it work?",
          "CSS selectors and specificity",
          "Inline, internal, and external CSS",
          "CSS colors, backgrounds, and borders",
          "Text formatting and typography"
        ]
      },
      {
        title: "The CSS Box Model",
        lessons: [
          "Understanding the box model concept",
          "Margin, border, padding, and content",
          "Box-sizing property",
          "Width and height calculations",
          "Practical exercises: Layout challenges"
        ]
      },
      {
        title: "Flexbox Layout",
        lessons: [
          "Introduction to Flexbox",
          "Flex container and flex items",
          "Main axis vs. cross axis",
          "Alignment and distribution properties",
          "Building a responsive navigation with Flexbox"
        ]
      },
      {
        title: "CSS Grid Layout",
        lessons: [
          "Introduction to CSS Grid",
          "Grid containers and grid items",
          "Defining rows and columns",
          "Grid placement and alignment",
          "Creating complex layouts with Grid"
        ]
      },
      {
        title: "Responsive Web Design",
        lessons: [
          "Mobile-first design approach",
          "Media queries and breakpoints",
          "Responsive images and videos",
          "Viewport meta tag",
          "Building a fully responsive website"
        ]
      },
      {
        title: "CSS Variables and Advanced Techniques",
        lessons: [
          "Working with CSS custom properties (variables)",
          "CSS animations and transitions",
          "CSS transforms",
          "Advanced selectors and pseudo-elements",
          "Final project: Portfolio website"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description: "Master the core concepts of JavaScript programming. Build interactive web applications and dynamic content.",
    level: "Beginner",
    duration: "6 weeks",
    instructor: "Prime",
    image: "/images/courses/javascript.jpg",
    price: "Free",
    rating: 4.7,
    topics: [
      "JavaScript Syntax",
      "DOM Manipulation",
      "Events & Event Handling",
      "Asynchronous JavaScript",
      "ES6+ Features",
      "Error Handling"
    ],
    content: [
      {
        title: "Introduction to JavaScript",
        lessons: [
          "What is JavaScript and its role in web development",
          "Setting up your JavaScript development environment",
          "Adding JavaScript to HTML pages",
          "JavaScript syntax basics",
          "Variables, data types, and operators"
        ]
      },
      {
        title: "JavaScript Control Flow",
        lessons: [
          "Conditional statements (if, else, switch)",
          "Loops (for, while, do-while)",
          "Break and continue statements",
          "Logical operators and truthy/falsy values",
          "Practical exercises: Control flow challenges"
        ]
      },
      {
        title: "Functions and Scope",
        lessons: [
          "Function declarations and expressions",
          "Parameters and return values",
          "Function scope and closures",
          "Arrow functions",
          "Higher-order functions and callbacks"
        ]
      },
      {
        title: "Objects and Arrays",
        lessons: [
          "Creating and manipulating objects",
          "Object methods and properties",
          "Working with arrays",
          "Array methods (map, filter, reduce)",
          "Destructuring and spread syntax"
        ]
      },
      {
        title: "DOM Manipulation",
        lessons: [
          "Understanding the Document Object Model",
          "Selecting and modifying DOM elements",
          "Creating and removing elements",
          "Changing element styles and classes",
          "Building an interactive webpage component"
        ]
      },
      {
        title: "Events and Event Handling",
        lessons: [
          "Introduction to browser events",
          "Event listeners and handlers",
          "Event propagation (bubbling and capturing)",
          "Event delegation",
          "Building interactive forms with validation"
        ]
      },
      {
        title: "Asynchronous JavaScript",
        lessons: [
          "Understanding synchronous vs. asynchronous code",
          "Callbacks and callback hell",
          "Promises and promise chaining",
          "Async/await syntax",
          "Fetching data from APIs"
        ]
      },
      {
        title: "Modern JavaScript (ES6+)",
        lessons: [
          "Template literals and string methods",
          "Let and const declarations",
          "Default parameters and rest/spread operators",
          "Modules (import/export)",
          "Final project: Interactive web application"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "React.js Development",
    description: "Learn to build modern user interfaces with React. Create reusable components and manage application state.",
    level: "Intermediate",
    duration: "8 weeks",
    instructor: "Prime",
    image: "/images/courses/react.jpg",
    price: "Free",
    rating: 4.9,
    topics: [
      "React Components",
      "JSX Syntax",
      "Props & State",
      "Hooks",
      "Context API",
      "React Router",
      "Redux"
    ],
    content: [
      {
        title: "Introduction to React",
        lessons: [
          "What is React and why use it?",
          "Setting up a React development environment",
          "Creating your first React app with Create React App",
          "Understanding the React component architecture",
          "Virtual DOM and React's rendering process"
        ]
      },
      {
        title: "JSX and React Elements",
        lessons: [
          "Understanding JSX syntax",
          "JSX expressions and JavaScript in JSX",
          "JSX attributes and preventing XSS",
          "Conditional rendering in JSX",
          "Lists and keys in React"
        ]
      },
      {
        title: "React Components",
        lessons: [
          "Functional vs. Class components",
          "Component composition and reusability",
          "Component lifecycle (mounting, updating, unmounting)",
          "Pure components and memoization",
          "Building a component library"
        ]
      },
      {
        title: "Props and State",
        lessons: [
          "Understanding props and their immutability",
          "Prop types and default props",
          "Introduction to state management",
          "Lifting state up",
          "Building a stateful application"
        ]
      },
      {
        title: "React Hooks",
        lessons: [
          "Introduction to Hooks",
          "useState and useEffect hooks",
          "useContext, useReducer, and useRef",
          "Creating custom hooks",
          "Converting class components to functional components with hooks"
        ]
      },
      {
        title: "Context API and Advanced State Management",
        lessons: [
          "Understanding the Context API",
          "Creating and consuming context",
          "Context vs. prop drilling",
          "Combining context with useReducer",
          "Building a theme switcher with Context"
        ]
      },
      {
        title: "React Router",
        lessons: [
          "Client-side routing with React Router",
          "Setting up routes and navigation",
          "Route parameters and query strings",
          "Nested routes and protected routes",
          "Building a multi-page application"
        ]
      },
      {
        title: "Redux and State Management",
        lessons: [
          "Introduction to Redux",
          "Actions, reducers, and the store",
          "Connecting Redux to React components",
          "Asynchronous actions with Redux Thunk",
          "Final project: Full-featured React application"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Node.js Backend Development",
    description: "Build scalable server-side applications with Node.js. Create RESTful APIs and connect to databases.",
    level: "Intermediate",
    duration: "8 weeks",
    instructor: "Prime",
    image: "/images/courses/nodejs.jpg",
    price: "Free",
    rating: 4.6,
    topics: [
      "Node.js Basics",
      "Express.js Framework",
      "RESTful API Design",
      "Authentication & Authorization",
      "Error Handling",
      "MongoDB Integration",
      "Deployment"
    ],
    content: [
      {
        title: "Introduction to Node.js",
        lessons: [
          "What is Node.js and server-side JavaScript",
          "Setting up a Node.js development environment",
          "Understanding the event loop and non-blocking I/O",
          "Node.js modules and the module system",
          "Working with the file system and streams"
        ]
      },
      {
        title: "Node.js Core Concepts",
        lessons: [
          "Node.js global objects and process",
          "Working with buffers and streams",
          "Event emitters and listeners",
          "Asynchronous programming patterns in Node.js",
          "Building a simple HTTP server"
        ]
      },
      {
        title: "Express.js Framework",
        lessons: [
          "Introduction to Express.js",
          "Setting up an Express application",
          "Routing and middleware",
          "Request and response objects",
          "Template engines with Express"
        ]
      },
      {
        title: "RESTful API Design",
        lessons: [
          "REST principles and architecture",
          "Designing RESTful endpoints",
          "HTTP methods and status codes",
          "API versioning and documentation",
          "Building a complete REST API"
        ]
      },
      {
        title: "Database Integration",
        lessons: [
          "Introduction to MongoDB",
          "Setting up MongoDB with Node.js",
          "CRUD operations with Mongoose",
          "Data modeling and schema design",
          "Indexing and query optimization"
        ]
      },
      {
        title: "Authentication and Authorization",
        lessons: [
          "User authentication strategies",
          "JSON Web Tokens (JWT)",
          "Password hashing and security",
          "Role-based access control",
          "OAuth and third-party authentication"
        ]
      },
      {
        title: "Error Handling and Logging",
        lessons: [
          "Error handling middleware",
          "Async error handling",
          "Logging with Winston and Morgan",
          "Debugging Node.js applications",
          "Implementing a robust error handling system"
        ]
      },
      {
        title: "Deployment and Production",
        lessons: [
          "Environment configuration",
          "Performance optimization",
          "Deploying to cloud platforms (Heroku, AWS)",
          "Containerization with Docker",
          "Final project: Complete backend application"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Full Stack MERN Development",
    description: "Combine React with Node.js, Express, and MongoDB to build complete web applications from front to back.",
    level: "Advanced",
    duration: "12 weeks",
    instructor: "Prime",
    image: "/images/courses/mern.jpg",
    price: "Free",
    rating: 4.9,
    topics: [
      "Full Stack Architecture",
      "Frontend-Backend Integration",
      "State Management",
      "Authentication Flows",
      "Database Design",
      "Deployment Strategies",
      "Performance Optimization"
    ],
    content: [
      {
        title: "MERN Stack Overview",
        lessons: [
          "Introduction to the MERN stack",
          "Setting up a full-stack development environment",
          "Project structure and organization",
          "Understanding client-server architecture",
          "Building your first full-stack application"
        ]
      },
      {
        title: "Backend Development with Express and MongoDB",
        lessons: [
          "Setting up an Express server",
          "MongoDB Atlas setup and configuration",
          "Creating RESTful API endpoints",
          "Data modeling with Mongoose",
          "Server-side validation and error handling"
        ]
      },
      {
        title: "Frontend Development with React",
        lessons: [
          "Setting up a React application",
          "Component architecture for full-stack apps",
          "Managing application state",
          "Routing with React Router",
          "Form handling and validation"
        ]
      },
      {
        title: "Frontend-Backend Integration",
        lessons: [
          "Making API calls from React to Express",
          "Handling CORS and security concerns",
          "Data fetching and caching strategies",
          "Error handling across the stack",
          "Real-time updates with WebSockets"
        ]
      },
      {
        title: "Authentication and Authorization",
        lessons: [
          "User authentication with JWT",
          "Protected routes on frontend and backend",
          "Role-based access control",
          "Secure password management",
          "Implementing social login"
        ]
      },
      {
        title: "Advanced State Management",
        lessons: [
          "Global state management with Redux",
          "Redux middleware and async actions",
          "Context API for simpler state management",
          "Optimizing state updates",
          "State persistence and local storage"
        ]
      },
      {
        title: "Deployment and DevOps",
        lessons: [
          "Preparing applications for production",
          "Deploying the MERN stack to cloud platforms",
          "Continuous integration and deployment",
          "Environment variables and configuration",
          "Monitoring and logging"
        ]
      },
      {
        title: "Capstone Project",
        lessons: [
          "Planning a full-stack application",
          "Implementing the backend API",
          "Building the frontend interface",
          "Connecting frontend and backend",
          "Testing, debugging, and deploying the complete application"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Advanced CSS & Sass",
    description: "Take your CSS skills to the next level with Sass. Learn advanced techniques for modern web design.",
    level: "Intermediate",
    duration: "6 weeks",
    instructor: "Prime",
    image: "/images/courses/sass.jpg",
    price: "Free",
    rating: 4.7,
    topics: [
      "Sass Syntax",
      "Variables & Mixins",
      "Nesting & Partials",
      "Advanced Animations",
      "CSS Architecture",
      "BEM Methodology",
      "CSS Grid Layouts"
    ],
    content: [
      {
        title: "Introduction to Sass",
        lessons: [
          "What is Sass and why use it?",
          "Setting up a Sass development environment",
          "Sass vs. SCSS syntax",
          "Compiling Sass to CSS",
          "Integrating Sass with build tools"
        ]
      },
      {
        title: "Sass Fundamentals",
        lessons: [
          "Variables and data types",
          "Nesting selectors",
          "Partials and imports",
          "Comments and documentation",
          "Practical exercises: Converting CSS to Sass"
        ]
      },
      {
        title: "Sass Functions and Operations",
        lessons: [
          "Mathematical operations",
          "Color functions",
          "List and map functions",
          "String manipulation",
          "Building a color system with functions"
        ]
      },
      {
        title: "Mixins and Extends",
        lessons: [
          "Creating and using mixins",
          "Mixin arguments and defaults",
          "The @extend directive",
          "Placeholder selectors",
          "Building a responsive mixin library"
        ]
      },
      {
        title: "CSS Architecture and Organization",
        lessons: [
          "The 7-1 pattern for Sass projects",
          "BEM (Block Element Modifier) methodology",
          "SMACSS and OOCSS principles",
          "Creating a maintainable Sass architecture",
          "Building a component-based design system"
        ]
      },
      {
        title: "Advanced Layout Techniques",
        lessons: [
          "Advanced Flexbox techniques",
          "Mastering CSS Grid",
          "Creating complex layouts",
          "Responsive design patterns",
          "Building a responsive dashboard layout"
        ]
      },
      {
        title: "Advanced Animations and Effects",
        lessons: [
          "CSS transitions and timing functions",
          "Keyframe animations",
          "3D transforms and perspective",
          "Performance optimization for animations",
          "Creating engaging UI animations"
        ]
      },
      {
        title: "Sass in Modern Development",
        lessons: [
          "Sass with CSS frameworks (Bootstrap, Tailwind)",
          "CSS-in-JS vs. Sass",
          "PostCSS and the future of CSS preprocessing",
          "Sass in component-based frameworks",
          "Final project: Advanced design system with Sass"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "TypeScript for JavaScript Developers",
    description: "Add static typing to your JavaScript applications with TypeScript. Improve code quality and developer experience.",
    level: "Intermediate",
    duration: "5 weeks",
    instructor: "Prime",
    image: "/images/courses/typescript.jpg",
    price: "Free",
    rating: 4.8,
    topics: [
      "TypeScript Basics",
      "Type Annotations",
      "Interfaces & Types",
      "Generics",
      "TypeScript with React",
      "TypeScript with Node.js",
      "Migration Strategies"
    ],
    content: [
      {
        title: "Introduction to TypeScript",
        lessons: [
          "What is TypeScript and why use it?",
          "Setting up a TypeScript development environment",
          "TypeScript compiler and configuration",
          "Your first TypeScript program",
          "TypeScript vs. JavaScript: Key differences"
        ]
      },
      {
        title: "TypeScript Basics",
        lessons: [
          "Basic types and type annotations",
          "Arrays and tuples",
          "Objects and type aliases",
          "Enums and literal types",
          "Union and intersection types"
        ]
      },
      {
        title: "Functions in TypeScript",
        lessons: [
          "Function types and signatures",
          "Optional and default parameters",
          "Rest parameters and spread operator",
          "Function overloading",
          "Building a typed utility function library"
        ]
      },
      {
        title: "Interfaces and Advanced Types",
        lessons: [
          "Creating and implementing interfaces",
          "Interface vs. type aliases",
          "Extending interfaces",
          "Index signatures",
          "Utility types (Partial, Required, Pick, etc.)"
        ]
      },
      {
        title: "Generics",
        lessons: [
          "Introduction to generics",
          "Generic functions and methods",
          "Generic interfaces and classes",
          "Generic constraints",
          "Building reusable generic components"
        ]
      },
      {
        title: "TypeScript with React",
        lessons: [
          "Setting up a React project with TypeScript",
          "Typing component props and state",
          "Event handling with TypeScript",
          "Hooks with TypeScript",
          "Building a typed React application"
        ]
      },
      {
        title: "TypeScript with Node.js",
        lessons: [
          "Setting up a Node.js project with TypeScript",
          "Typing Express applications",
          "Working with external libraries and declaration files",
          "Error handling with types",
          "Building a typed API with Express and TypeScript"
        ]
      },
      {
        title: "Advanced TypeScript and Migration",
        lessons: [
          "Migrating JavaScript projects to TypeScript",
          "Incremental adoption strategies",
          "Declaration files and @types",
          "TypeScript best practices and patterns",
          "Final project: Converting a JavaScript app to TypeScript"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Web Security Fundamentals",
    description: "Learn essential security concepts to protect your web applications from common vulnerabilities and attacks.",
    level: "Advanced",
    duration: "7 weeks",
    instructor: "Prime",
    image: "/images/courses/security.jpg",
    price: "Free",
    rating: 4.9,
    topics: [
      "OWASP Top 10",
      "Authentication Security",
      "Cross-Site Scripting (XSS)",
      "SQL Injection",
      "CSRF Protection",
      "Security Headers",
      "Secure Coding Practices"
    ],
    content: [
      {
        title: "Introduction to Web Security",
        lessons: [
          "The importance of web security",
          "Common security threats and attack vectors",
          "Security mindset and threat modeling",
          "Security in the software development lifecycle",
          "Setting up a security testing environment"
        ]
      },
      {
        title: "OWASP Top 10 Overview",
        lessons: [
          "Understanding the OWASP Top 10 project",
          "Injection vulnerabilities",
          "Broken authentication and session management",
          "Sensitive data exposure",
          "XML External Entities (XXE)"
        ]
      },
      {
        title: "Authentication and Authorization",
        lessons: [
          "Secure authentication mechanisms",
          "Password storage and management",
          "Multi-factor authentication",
          "OAuth and OpenID Connect",
          "JWT security best practices"
        ]
      },
      {
        title: "Cross-Site Scripting (XSS)",
        lessons: [
          "Understanding XSS vulnerabilities",
          "Reflected, stored, and DOM-based XSS",
          "XSS prevention techniques",
          "Content Security Policy (CSP)",
          "XSS detection and testing"
        ]
      },
      {
        title: "SQL Injection and Data Security",
        lessons: [
          "SQL injection fundamentals",
          "Preventing SQL injection",
          "Parameterized queries and ORM",
          "NoSQL injection",
          "Data validation and sanitization"
        ]
      },
      {
        title: "Cross-Site Request Forgery (CSRF)",
        lessons: [
          "Understanding CSRF attacks",
          "CSRF prevention techniques",
          "Same-origin policy and CORS",
          "Anti-CSRF tokens",
          "SameSite cookies"
        ]
      },
      {
        title: "Security Headers and Browser Security",
        lessons: [
          "HTTP security headers",
          "Content Security Policy implementation",
          "HTTPS and TLS best practices",
          "Subresource Integrity",
          "Browser security features"
        ]
      },
      {
        title: "Secure Coding and Security Testing",
        lessons: [
          "Secure coding practices",
          "Code review for security",
          "Security testing methodologies",
          "Using security tools and scanners",
          "Final project: Security audit of a web application"
        ]
      }
    ]
  }
];

export default courses;