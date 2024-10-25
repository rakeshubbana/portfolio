import {
  mobile,
  backend,
  creator,
  web,
  stadium,
  reactjs,
  nodejs,
  by,
  mnnit,
  java,
  javascript,
  python,
  github,
  personal,
  reviews,
  uc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Java",
    icon: java,
  },
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "Node",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Graduate Software Developer",
    company_name: "University of Cincinnati",
    icon: uc,
    iconBg: "#E6DEDD",
    date: "Jan 2024- July 2024",
    points: [
      "Developed a robust web application using Java and Spring Boot for backend services, ensuring efficient data processing and secure API management.",
      "Implemented a dynamic user interface with React, enhancing user experience through responsive design and real-time updates for seamless interaction.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Blue yonder",
    icon: by,
    iconBg: "#383E56",
    date: "July 2020 - August 2023",
    points: [
      "Implemented UI for contract lifecycle modules React plugin architecture, measured based on the project delivery times, resulted in 20% reduction of team workload.",
      "Spearheaded the design and development of backend microservices-based contract creation platform using Java Spring Boot,measured through New Relic and Postman, resulted in a 30% improvement in the contract creation page load time and a 40% reduction in API data retrieval time by migrating SQL data to Neo4j",
    ],
  },
  {
    title: "Club Member",
    company_name: "Institution of Engineering and Technology, MNNIT",
    icon: mnnit,
    iconBg: "#E6DEDD",
    date: "May 2017 - July 2019",
    points: [
      "Delivered weekly seminars on Data Structures, programming, and web technologies to juniors",
    ],
  },
];

const projects = [
  {
    name: "Stadium ops App",
    description:
      "Developed a comprehensive stadium operations management application utilizing Java and Spring Boot for the backend, React and JavaScript for the frontend, and MySQL for data storage. Implemented core features such as ticket booking, event scheduling, and seat management, enabling users to seamlessly manage and monitor stadium operations. Leveraged Spring Boot’s dependency injection, MVC structure, and RESTful API capabilities to create a scalable and maintainable backend architecture. Built a responsive and user-friendly interface using React and JavaScript, allowing smooth navigation and real-time updates for event and seating data. Employed MySQL to ensure efficient data handling and integrity, while version control and collaboration were maintained through Git and GitHub, enabling effective teamwork and streamlined code management.",
    tags: [
      {
        name: "Java",
        color: "teal-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: stadium,
    source_code_link: "",
    minImg: github,
  },
  {
    name: "Review Analyzer",
    description:
      "Developed a sentiment analysis application for processing user reviews, categorizing them as positive or negative, using Python, machine learning algorithms, and React during my undergraduate studies. Implemented natural language processing techniques to clean and preprocess textual data and utilized machine learning algorithms such as Naive Bayes and Support Vector Machines for accurate sentiment classification. Designed a responsive and interactive front-end interface using React, allowing users to input reviews and receive immediate feedback on the sentiment analysis results. Employed Python’s data handling libraries and machine learning frameworks to ensure efficient processing and reliable predictions. Managed version control and collaboration using Git and GitHub, supporting effective teamwork and project tracking.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Websocket",
        color: "pink-text-gradient",
      },
    ],
    image: reviews,
    source_code_link: "",
    minImg: github,
  },

  {
    name: "Personal Portfolio",
    description: "You are surfing on the same Project",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: personal,
    source_code_link: "",
    minImg: github,
  },
];

export { services, technologies, experiences, projects };
