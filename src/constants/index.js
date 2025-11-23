import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    gmail,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    bootstrap,
   
    nodejs,
    pricewise,
    react,
    
    snapgram,
    summiz,
    tailwindcss,
    threads,
    postgresql,
    java,
    instagram,
   
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },


    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
   
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    
    
    // {
    //     imageUrl: bootstrap,
    //     name: "Bootstrap",
    //     type: "Frontend",
    // },
  
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

    
   
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com/rio__akash__/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/akashm1110',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akash-m-35a855263/',
    }
];

export const projects = [
    {
        // iconUrl: pricewise,
        // theme: 'btn-back-red',
        name: 'Ecommerce Application',
        description: 'A Ecommerce website is developed using MERN with backend,frontend,admin panel.Using admin panel admin can add new products and its prices,categories...Each time it update with website and database..',
        link: 'https://ecommerce-application-1-20gq.onrender.com/auth/login',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Real Time Chat Application',
        description: 'I have built a real-time chat application using the MERN stack and WebSocket, featuring secure authentication for user interactions. It enables instant messaging with a seamless, responsive experience..',
        link: 'https://realtime-chat-app-1-ew1h.onrender.com/login',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Mini-Ecommerce Application',
        description: 'A Mini-Ecommerce website is developed using MERN with backend,frontend and add new products and its prices,categories by own...Each time it update with website and database.',
        link: 'https://github.com/akashm1110/Mini-Ecommerce',
    },
];