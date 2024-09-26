import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
// import projectImage5 from "../assets/project5.jpeg";
// import projectImage6 from "../assets/project6.jpeg";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#bio" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "I'm Ananta.",
  text: "I'm a",
  greet: "Full Stack Developer",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",

};

export const PROJECTS = [
  {
    title: "Valorant Avatar",
    image: projectImage1,
    description:
      "This project is a front-end focused web application that highlights my proficiency in React and animation using Framer Motion. I built reusable React components to dynamically display Valorant characters, integrating smooth animations for an engaging user experience. Although not optimized for responsiveness, this project serves as a showcase of my front-end development and animation skills.",
    anchor:"https://valorant-avatar.netlify.app/",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: projectImage2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      anchor:"",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: projectImage3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
      anchor:"",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: projectImage4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      anchor:"",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const BIO = [
  "I’m a passionate and dedicated full-stack developer specializing in the MERN stack. With a solid foundation in both frontend and backend technologies, I love building scalable and robust applications that solve real-world problems. My expertise includes working with MongoDB and Mongoose for efficient NoSQL databases, SQL and PostgreSQL for designing relational databases, and Web3 for diving into decentralized technologies. I'm skilled in managing cloud infrastructure with AWS and deploying containerized applications using Docker. On the frontend, I specialize in React.js and Next.js for creating dynamic and high-performance web applications, while utilizing tools like Tailwind CSS, Bootstrap, and GSAP to design visually engaging and responsive user interfaces. I’m also proficient in JavaScript (ES6+), building clean, modular, and maintainable code. Whether it's developing complex interfaces, ensuring smooth backend integration, or deploying apps on cloud platforms, I thrive on delivering high-quality projects. When I’m not coding, I’m always exploring new technologies to enhance my skills and stay ahead in the industry. Let’s work together to bring your ideas to life!"
];

export const EXPERIENCES = [
  {
    title: "Proficient Developer with 1 Year of Frontend Experience in Building UI",
    description:
      "I am a highly skilled frontend developer with 1 year of experience in building dynamic, responsive, and user-friendly interfaces. Proficient in JavaScript, React.js, with hands-on experience in modern UI frameworks like Tailwind CSS. I have successfully contributed to multiple projects, focusing on crafting intuitive user experiences and optimizing design performance.",
  },
  // {
  //   title: "Junior Web Developer",
  //   company: "Bright Future Technologies",
  //   duration: "August 2014 - January 2016",
  //   description:
  //     "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  // },
];

export const EDUCATION = [
  // {
  //   degree: "Master of Science in Computer Science",
  //   institution: "Stanford University",
  //   duration: "September 2012 - June 2014",
  //   description:
  //     "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  // },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Mumbai University, Mumbai",
    duration: "SIES College of Arts, Science and Commerce",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and SQL. Completed a senior project on developing an e-commerce platform. Graduated with a high CGPA (overall- 7.9 CGPA).",
  },
];

export const SOCIAL_MEDIA_LINKS = [

  {
    href: "https://www.instagram.com/anantavigave/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/AnantaInsights",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Ananta2003",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ananta-vigave/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
