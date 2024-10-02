import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Expressjs, Node.js, MySQL, Firebase, SqlLite and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Expressjs, Node.js, MySQL, SqlLite, and MongoDB, python, Flask. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

export const PROJECTS = [
  {
    title: "NoteTaker website",
    image: project1,
    description:
      "A fully functional NoteTaker website with features like authentication and authorization using JWT TOKEN , Login and signup page, and user Data stores in database.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","bootstrap"],
  },
  {
    title: "News website",
    image: project2,
    description:
      "An application for showing latest News, with features such as different categories like sports, education and Bussiness. , feeding news from newsapi.org website, and having good design, night mode theme and user interface.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCss"],
  },
  {
    title: "weather website",
    image: project4,
    description:
      "A platform for seeing current weather and temprature of different location, with features like fast response, good user interface, and getting data from weatherapi.org.",
    technologies: ["HTML", "CSS", "Bootstrap", "javascript"],
  },
];

export const CONTACT = {
  address: "Anand Nagar, Bhopal, Madhya Pradesh, India ",
  phoneNo: "+91 8340 3100 62 ",
  email: "harshitredcolour@gmail.com",
};
