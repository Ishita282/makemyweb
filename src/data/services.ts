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

        mcqs: [
            {
                id: "pages",
                question: "How many pages do you need?",
                options: [
                    { label: "Up to 5 pages", value: "5", price: 0 },
                    { label: "6-10 pages", value: "10", price: 2500 },
                    { label: "11-20 pages", value: "20", price: 5000 },
                    { label: "20+ pages", value: "custom", price: 10000 },
                ],
            },
            {
                id: "cms",
                question: "Do you need a CMS to manage your content?",
                options: [
                    { label: "No", value: "no", price: 0 },
                    { label: "Yes", value: "yes", price: 3000 },
                ],
            },
            {
                id: "seo",
                question: "Do you need SEO setup?",
                options: [
                    { label: "Basic SEO", value: "basic", price: 0 },
                    { label: "Advanced SEO", value: "advanced", price: 4000 },
                ],
            },
            {
                id: "forms",
                question: "Do you need advanced forms or lead generation?",
                options: [
                    { label: "Basic contact form", value: "basic", price: 0 },
                    { label: "Advanced lead generation", value: "advanced", price: 2500 },
                ],
            },
        ],
    },

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

        mcqs: [
            {
                id: "app-type",
                question: "What type of application do you need?",
                options: [
                    {
                        label: "Business Dashboard",
                        value: "dashboard",
                        price: 0,
                    },
                    {
                        label: "CRM",
                        value: "crm",
                        price: 7000,
                    },
                    {
                        label: "SaaS Platform",
                        value: "saas",
                        price: 15000,
                    },
                    {
                        label: "Enterprise Application",
                        value: "enterprise",
                        price: 25000,
                    },
                ],
            },
            {
                id: "authentication",
                question: "Do you need user authentication?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "Yes",
                        value: "yes",
                        price: 4000,
                    },
                ],
            },
            {
                id: "admin",
                question: "Do you need an admin dashboard?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "Yes",
                        value: "yes",
                        price: 5000,
                    },
                ],
            },
            {
                id: "api",
                question: "Do you need third-party API integrations?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "1-2 integrations",
                        value: "few",
                        price: 4000,
                    },
                    {
                        label: "3+ integrations",
                        value: "many",
                        price: 8000,
                    },
                ],
            },
        ],
    },

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

        mcqs: [
            {
                id: "products",
                question: "How many products will your store have?",
                options: [
                    {
                        label: "Up to 20 products",
                        value: "20",
                        price: 0,
                    },
                    {
                        label: "21-100 products",
                        value: "100",
                        price: 4000,
                    },
                    {
                        label: "101-500 products",
                        value: "500",
                        price: 8000,
                    },
                    {
                        label: "500+ products",
                        value: "500plus",
                        price: 12000,
                    },
                ],
            },
            {
                id: "payment",
                question: "Do you need online payment integration?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "Yes",
                        value: "yes",
                        price: 4000,
                    },
                ],
            },
            {
                id: "inventory",
                question: "Do you need inventory management?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "Yes",
                        value: "yes",
                        price: 5000,
                    },
                ],
            },
            {
                id: "accounts",
                question: "Do customers need accounts?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "Yes",
                        value: "yes",
                        price: 3000,
                    },
                ],
            },
        ],
    },

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

        mcqs: [
            {
                id: "solution",
                question: "What AI solution do you need?",
                options: [
                    {
                        label: "AI Chatbot",
                        value: "chatbot",
                        price: 0,
                    },
                    {
                        label: "AI Automation",
                        value: "automation",
                        price: 5000,
                    },
                    {
                        label: "AI Content Generation",
                        value: "content",
                        price: 4000,
                    },
                    {
                        label: "Custom AI Workflow",
                        value: "custom",
                        price: 10000,
                    },
                ],
            },
            {
                id: "integration",
                question: "How many systems need to be integrated?",
                options: [
                    {
                        label: "None",
                        value: "none",
                        price: 0,
                    },
                    {
                        label: "1 system",
                        value: "one",
                        price: 3000,
                    },
                    {
                        label: "2-3 systems",
                        value: "few",
                        price: 6000,
                    },
                    {
                        label: "4+ systems",
                        value: "many",
                        price: 10000,
                    },
                ],
            },
            {
                id: "support",
                question: "Do you need AI-powered customer support?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "Yes",
                        value: "yes",
                        price: 4000,
                    },
                ],
            },
        ],
    },

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

        mcqs: [
            {
                id: "dashboard",
                question: "What type of analytics solution do you need?",
                options: [
                    {
                        label: "Basic Dashboard",
                        value: "basic",
                        price: 0,
                    },
                    {
                        label: "Interactive Dashboard",
                        value: "interactive",
                        price: 4000,
                    },
                    {
                        label: "Business Intelligence",
                        value: "bi",
                        price: 8000,
                    },
                ],
            },
            {
                id: "sources",
                question: "How many data sources need to be connected?",
                options: [
                    {
                        label: "1 source",
                        value: "one",
                        price: 0,
                    },
                    {
                        label: "2-3 sources",
                        value: "few",
                        price: 3000,
                    },
                    {
                        label: "4+ sources",
                        value: "many",
                        price: 7000,
                    },
                ],
            },
            {
                id: "reporting",
                question: "Do you need automated reporting?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "Yes",
                        value: "yes",
                        price: 4000,
                    },
                ],
            },
        ],
    },

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

        mcqs: [
            {
                id: "service",
                question: "What do you need help with?",
                options: [
                    {
                        label: "Technical SEO",
                        value: "seo",
                        price: 0,
                    },
                    {
                        label: "Brand Identity",
                        value: "branding",
                        price: 3000,
                    },
                    {
                        label: "UI/UX Design",
                        value: "uiux",
                        price: 4000,
                    },
                    {
                        label: "Full Digital Presence",
                        value: "full",
                        price: 8000,
                    },
                ],
            },
            {
                id: "content",
                question: "Do you need content strategy?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "Yes",
                        value: "yes",
                        price: 3000,
                    },
                ],
            },
            {
                id: "marketing",
                question: "Do you need digital marketing?",
                options: [
                    {
                        label: "No",
                        value: "no",
                        price: 0,
                    },
                    {
                        label: "Yes",
                        value: "yes",
                        price: 5000,
                    },
                ],
            },
        ],
    },

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

        mcqs: [
            {
                id: "platform",
                question: "Which platforms do you need?",
                options: [
                    {
                        label: "Android",
                        value: "android",
                        price: 0,
                    },
                    {
                        label: "iOS",
                        value: "ios",
                        price: 0,
                    },
                    {
                        label: "Android + iOS",
                        value: "both",
                        price: 5000,
                    },
                ],
            },
            {
                id: "complexity",
                question: "How complex is your application?",
                options: [
                    {
                        label: "Simple",
                        value: "simple",
                        price: 0,
                    },
                    {
                        label: "Medium",
                        value: "medium",
                        price: 7000,
                    },
                    {
                        label: "Advanced",
                        value: "advanced",
                        price: 15000,
                    },
                ],
            },
        ],
    },
];

export type Service = (typeof services)[number];
