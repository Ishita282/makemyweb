import {
    Globe,
    Smartphone,
    Bot,
    ShoppingCart,
    Search,
    Code2,
    BarChart3,
} from "lucide-react";

export const services = [
    // Website Development
    {
        id: "website-development",
        title: "Website Development",
        description:
            "Modern, responsive business websites built for speed, SEO, and conversions.",
        fullDescription:
            "We create modern, responsive websites that help businesses establish a professional online presence, attract customers, and turn visitors into leads. Every website is designed around your brand, business goals, users, performance, and search visibility.",

        features: [
            "Responsive design",
            "SEO-friendly structure",
            "Fast performance",
            "Modern UI/UX",
            "Mobile optimization",
            "Contact and lead-generation forms",
            "Analytics integration",
            "Deployment and setup",
        ],

        idealFor: [
            "Small businesses",
            "Startups",
            "Local businesses",
            "Professionals",
            "Personal brands",
        ],

        rating: 5.0,
        reviewsCount: 120,

        howItWorks: [
            {
                step: 1,
                title: "Discovery",
                description:
                    "We understand your business, audience, goals, and website requirements.",
            },
            {
                step: 2,
                title: "Planning",
                description:
                    "We plan the structure, pages, features, content, and user experience.",
            },
            {
                step: 3,
                title: "Design",
                description:
                    "We create a modern interface that matches your brand and business.",
            },
            {
                step: 4,
                title: "Development",
                description:
                    "We build and optimize the website for performance, responsiveness, and SEO.",
            },
            {
                step: 5,
                title: "Launch",
                description:
                    "We test everything and deploy your website so it is ready for customers.",
            },
        ],

        reviews: [
            {
                name: "Rahul Mehta",
                rating: 5,
                review:
                    "The website looks professional, loads quickly, and works perfectly on mobile. The whole development process was smooth.",
            },
            {
                name: "Priya Sharma",
                rating: 5,
                review:
                    "Very happy with the final website. The design was modern and the team understood our requirements well.",
            },
            {
                name: "Amit Verma",
                rating: 4,
                review:
                    "Good experience overall. The website was delivered with the features we requested and the support was helpful.",
            },
        ],

        faq: [
            {
                question: "How long does a website take to build?",
                answer:
                    "The timeline depends on the number of pages and features. A typical business website can take around 1-3 weeks.",
            },
            {
                question: "Will the website work on mobile?",
                answer:
                    "Yes. All websites are designed to work across mobile phones, tablets, laptops, and desktop screens.",
            },
            {
                question: "Will my website be SEO friendly?",
                answer:
                    "Yes. We follow SEO-friendly development practices including proper structure, metadata, performance optimization, and responsive design.",
            },
            {
                question: "Can I request custom features?",
                answer:
                    "Yes. Custom features can be added depending on your requirements.",
            },
        ],

        icon: Globe,
        color: "from-blue-500 to-cyan-500",
        image: "/images/webdev.webp",

        pricing: {
            price: 24999,
            startingAt: 6999,
            currency: "INR",
        },

        deliveryTime: "1-3 weeks",
    },

    // Web Applications
    {
        id: "web-applications",
        title: "Web Applications",
        description:
            "Custom dashboards, SaaS products, CRM systems, and enterprise web apps.",
        fullDescription:
            "We build custom web applications tailored to your business needs, including dashboards, SaaS products, CRM systems, and enterprise solutions that enhance productivity and streamline operations.",

        features: [
            "Custom development",
            "Scalable architecture",
            "User-friendly interface",
            "Authentication",
            "Database integration",
            "API integration",
            "Admin dashboards",
            "Ongoing support and maintenance",
        ],

        idealFor: [
            "Startups",
            "SaaS businesses",
            "Companies",
            "Internal business tools",
            "Online platforms",
        ],

        rating: 4.9,
        reviewsCount: 85,

        howItWorks: [
            {
                step: 1,
                title: "Requirements",
                description:
                    "We understand your application requirements and business workflow.",
            },
            {
                step: 2,
                title: "Architecture",
                description:
                    "We plan the application structure, database, APIs, and user roles.",
            },
            {
                step: 3,
                title: "UI/UX",
                description:
                    "We design the interface and user experience.",
            },
            {
                step: 4,
                title: "Development",
                description:
                    "We develop and integrate the application's core features.",
            },
            {
                step: 5,
                title: "Testing & Launch",
                description:
                    "We test the application and deploy the final product.",
            },
        ],

        reviews: [
            {
                name: "Nikhil Agarwal",
                rating: 5,
                review:
                    "The custom dashboard has made our internal workflow much easier to manage. The interface is clean and easy to use.",
            },
            {
                name: "Megha Jain",
                rating: 5,
                review:
                    "The application was built around our actual business requirements instead of using a generic solution.",
            },
            {
                name: "Saurabh Gupta",
                rating: 4,
                review:
                    "Good development experience and a well-structured application. The team was responsive to our requirements.",
            },
        ],
        faq: [
            {
                question: "Can you build a custom SaaS application?",
                answer:
                    "Yes. We can build custom SaaS applications based on your business model and requirements.",
            },
            {
                question: "Can you integrate APIs?",
                answer:
                    "Yes. Third-party APIs and custom APIs can be integrated into the application.",
            },
            {
                question: "Can the application scale later?",
                answer:
                    "Yes. Applications are designed with scalability and future expansion in mind.",
            },
        ],

        icon: Code2,
        color: "from-violet-500 to-purple-500",
        image: "/images/webapp.webp",

        pricing: {
            price: 49999,
            startingAt: 7999,
            currency: "INR",
        },

        deliveryTime: "2-6 weeks",
    },

    // E-Commerce
    {
        id: "ecommerce",
        title: "E-Commerce",
        description:
            "High-converting online stores with secure payments and modern shopping experiences.",
        fullDescription:
            "We develop high-converting e-commerce websites that provide secure payment options and modern shopping experiences, helping businesses increase sales and customer satisfaction.",

        features: [
            "Secure payment processing",
            "Modern shopping experience",
            "Product management",
            "Inventory management",
            "Order management",
            "Customer accounts",
            "Responsive design",
            "Analytics integration",
        ],

        idealFor: [
            "Online stores",
            "Retail businesses",
            "Product brands",
            "Small businesses",
            "D2C brands",
        ],

        rating: 4.8,
        reviewsCount: 95,

        howItWorks: [
            {
                step: 1,
                title: "Planning",
                description:
                    "We understand your products, customers, payment requirements, and business model.",
            },
            {
                step: 2,
                title: "Store Design",
                description:
                    "We create the shopping experience and storefront design.",
            },
            {
                step: 3,
                title: "Development",
                description:
                    "We build products, carts, checkout, accounts, and store functionality.",
            },
            {
                step: 4,
                title: "Payments",
                description:
                    "We integrate the required payment and order-management systems.",
            },
            {
                step: 5,
                title: "Launch",
                description:
                    "We test the store and prepare it for customers.",
            },
        ],

        reviews: [
            {
                name: "Neha Kapoor",
                rating: 5,
                review:
                    "Our online store looks much better now. The shopping experience is simple and easy to use.",
            },
            {
                name: "Arjun Singh",
                rating: 5,
                review:
                    "The e-commerce website was exactly what we needed. The product management and checkout experience are great.",
            },
        ],

        faq: [
            {
                question: "Can you integrate online payments?",
                answer:
                    "Yes. Payment gateways can be integrated according to your business requirements.",
            },
            {
                question: "Can I manage products myself?",
                answer:
                    "Yes. We can provide an admin system for managing products, orders, and other store information.",
            },
            {
                question: "Will the store work on mobile?",
                answer:
                    "Yes. The store will be responsive across mobile, tablet, and desktop devices.",
            },
        ],

        icon: ShoppingCart,
        color: "from-emerald-500 to-green-500",
        image: "/images/ecommerce.webp",

        pricing: {
            price: 39999,
            startingAt: 9999,
            currency: "INR",
        },

        deliveryTime: "2-5 weeks",
    },

    // AI Integration
    {
        id: "ai-integration",
        title: "AI Integration",
        description:
            "Chatbots, AI automations, content generation, and intelligent workflows.",
        fullDescription:
            "We integrate AI solutions into your business processes, including chatbots, AI automations, content generation, and intelligent workflows that enhance efficiency and customer engagement.",

        features: [
            "AI chatbot integration",
            "AI automations",
            "Content generation",
            "Intelligent workflows",
            "AI-powered customer support",
            "API integration",
            "Custom AI features",
        ],

        idealFor: [
            "Businesses",
            "Startups",
            "Customer support teams",
            "Marketing teams",
            "Online platforms",
        ],

        rating: 4.7,
        reviewsCount: 70,

        howItWorks: [
            {
                step: 1,
                title: "Identify",
                description:
                    "We identify where AI can provide real value to your business.",
            },
            {
                step: 2,
                title: "Plan",
                description:
                    "We design the AI workflow and required integrations.",
            },
            {
                step: 3,
                title: "Build",
                description:
                    "We implement the AI functionality into your website or application.",
            },
            {
                step: 4,
                title: "Test",
                description:
                    "We test the system and refine its behavior.",
            },
            {
                step: 5,
                title: "Launch",
                description:
                    "We deploy the AI solution and help you start using it.",
            },
        ],

        reviews: [
            {
                name: "Karan Malhotra",
                rating: 5,
                review:
                    "The AI chatbot has made it much easier for our customers to get answers quickly.",
            },
            {
                name: "Simran Gupta",
                rating: 4,
                review:
                    "The AI workflow helped reduce several repetitive tasks for our team.",
            },
        ],

        faq: [
            {
                question: "Can you add an AI chatbot to my website?",
                answer:
                    "Yes. AI chatbots can be integrated into websites for customer support, FAQs, lead generation, and other use cases.",
            },
            {
                question: "Can AI automate repetitive tasks?",
                answer:
                    "Yes. AI workflows can automate suitable repetitive tasks depending on your business requirements.",
            },
            {
                question: "Can you connect AI to existing software?",
                answer:
                    "Yes, where suitable APIs or integrations are available.",
            },
        ],

        icon: Bot,
        color: "from-pink-500 to-rose-500",
        image: "/images/ai.webp",

        pricing: {
            price: 49999,
            startingAt: 11999,
            currency: "INR",
        },

        deliveryTime: "1-4 weeks",
    },

    // Data Analytics
    {
        id: "data-analytics",
        title: "Data Analytics",
        description:
            "Transform raw data into actionable insights with interactive dashboards, business intelligence, performance tracking, and data-driven decision making.",
        fullDescription:
            "We provide comprehensive data analytics solutions that help businesses make informed decisions based on real-time data insights, enabling them to optimize performance and drive growth.",

        features: [
            "Interactive dashboards",
            "Business intelligence",
            "Performance tracking",
            "Data visualization",
            "KPI monitoring",
            "Reporting",
            "Data-driven decision making",
        ],

        idealFor: [
            "Businesses",
            "Startups",
            "Sales teams",
            "Marketing teams",
            "Operations teams",
        ],

        rating: 4.9,
        reviewsCount: 80,

        howItWorks: [
            {
                step: 1,
                title: "Data Review",
                description:
                    "We understand your available data and business requirements.",
            },
            {
                step: 2,
                title: "Planning",
                description:
                    "We identify the important metrics and insights.",
            },
            {
                step: 3,
                title: "Dashboard",
                description:
                    "We design clear and interactive dashboards.",
            },
            {
                step: 4,
                title: "Integration",
                description:
                    "We connect the required data sources.",
            },
            {
                step: 5,
                title: "Launch",
                description:
                    "We test and deliver the analytics solution.",
            },
        ],

        reviews: [
            {
                name: "Rohit Sharma",
                rating: 5,
                review:
                    "The analytics dashboard made it much easier for us to understand our business performance and track important metrics.",
            },
            {
                name: "Ananya Verma",
                rating: 5,
                review:
                    "The dashboards are clean, easy to understand, and give us a much better view of our data.",
            },
            {
                name: "Vikram Gupta",
                rating: 4,
                review:
                    "A useful analytics solution with a clear dashboard and helpful visualizations.",
            },
        ],

        faq: [
            {
                question: "What type of data can you visualize?",
                answer:
                    "The solution depends on your data sources and requirements. We can work with suitable structured data sources and APIs.",
            },
            {
                question: "Can dashboards be customized?",
                answer:
                    "Yes. Dashboards can be designed around the metrics that matter to your business.",
            },
        ],

        icon: BarChart3,
        color: "from-sky-500 to-cyan-500",
        image: "/images/data.webp",

        pricing: {
            price: 39999,
            startingAt: 9999,
            currency: "INR",
        },

        deliveryTime: "1-4 weeks",
    },

    // SEO & Branding
    {
        id: "seo-branding",
        title: "SEO & Branding",
        description:
            "Strengthen your online presence with technical SEO, brand identity, UI/UX design, content strategy, and digital marketing solutions.",
        fullDescription:
            "We help you strengthen your online presence with technical SEO, brand identity, UI/UX design, content strategy, and digital marketing solutions that drive traffic and conversions.",

        features: [
            "Technical SEO",
            "Brand identity",
            "UI/UX design",
            "Content strategy",
            "On-page SEO",
            "SEO-friendly website structure",
            "Digital marketing",
        ],

        idealFor: [
            "Local businesses",
            "Startups",
            "Personal brands",
            "Online businesses",
            "Growing companies",
        ],

        rating: 4.8,
        reviewsCount: 90,

        howItWorks: [
            {
                step: 1,
                title: "Audit",
                description:
                    "We review your current website, brand, and online presence.",
            },
            {
                step: 2,
                title: "Strategy",
                description:
                    "We identify opportunities and create a strategy.",
            },
            {
                step: 3,
                title: "Design",
                description:
                    "We improve your visual identity and user experience.",
            },
            {
                step: 4,
                title: "Optimization",
                description:
                    "We implement SEO and digital improvements.",
            },
            {
                step: 5,
                title: "Growth",
                description:
                    "We monitor performance and identify further opportunities.",
            },
        ],

        reviews: [
            {
                name: "Pooja Mehta",
                rating: 5,
                review:
                    "The new branding gave our business a much more professional appearance and made our online presence feel consistent.",
            },
            {
                name: "Aditya Kapoor",
                rating: 5,
                review:
                    "The SEO improvements and website optimization gave us a much better foundation for growing our online presence.",
            },
            {
                name: "Sneha Arora",
                rating: 4,
                review:
                    "Great work on the branding and UI. Everything looks much more polished and professional now.",
            },
        ],

        faq: [
            {
                question: "Does SEO guarantee first-page rankings?",
                answer:
                    "No. Search rankings depend on many factors and no legitimate SEO service can guarantee a specific ranking.",
            },
            {
                question: "Can you redesign my existing brand?",
                answer:
                    "Yes. Branding and UI/UX improvements can be developed around your existing business identity.",
            },
        ],

        icon: Search,
        color: "from-orange-500 to-yellow-500",
        image: "/images/seo.webp",

        pricing: {
            price: 19999,
            startingAt: 4999,
            currency: "INR",
        },

        deliveryTime: "1-4 weeks",
    },

    // Mobile Apps
    {
        id: "mobile-apps",
        title: "Mobile Apps",
        description:
            "Cross-platform mobile applications with premium user experiences.",
        fullDescription:
            "We develop cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices, ensuring your business reaches users wherever they are.",

        features: [
            "Cross-platform development",
            "Premium user experience",
            "Performance optimization",
            "API integration",
            "App store deployment",
            "Ongoing support and updates",
        ],

        idealFor: [
            "Startups",
            "Businesses",
            "Online platforms",
            "Service businesses",
            "New product ideas",
        ],

        rating: 4.6,
        reviewsCount: 60,

        howItWorks: [
            {
                step: 1,
                title: "Planning",
                description:
                    "We understand the app idea, target users, and required features.",
            },
            {
                step: 2,
                title: "Design",
                description:
                    "We design the mobile user experience and interface.",
            },
            {
                step: 3,
                title: "Development",
                description:
                    "We build the application and integrate required services.",
            },
            {
                step: 4,
                title: "Testing",
                description:
                    "We test the application across supported devices.",
            },
            {
                step: 5,
                title: "Launch",
                description:
                    "We prepare the application for deployment.",
            },
        ],

        reviews: [
            {
                name: "Demo User",
                rating: 5,
                review:
                    "This is a demo review for testing the mobile app service page.",
            },
        ],

        faq: [
            {
                question: "Will the app work on Android and iOS?",
                answer:
                    "Our planned mobile app service is focused on cross-platform development for Android and iOS.",
            },
            {
                question: "Is mobile app development currently available?",
                answer:
                    "This service is currently marked as coming soon.",
            },
        ],

        icon: Smartphone,
        color: "from-indigo-500 to-blue-500",
        image: "/images/mobileapp.webp",

        pricing: {
            price: 69999,
            startingAt: 17999,
            currency: "INR",
        },

        deliveryTime: "Coming Soon",
        comingSoon: true,
    },
];

export type Service = (typeof services)[number];
