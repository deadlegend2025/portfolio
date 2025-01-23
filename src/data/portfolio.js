const about = {
  title: "Hi , I am Ankit Singh",
  description:
    "I am a front-end developer passionate about crafting seamless user experiences. Skilled in modern web technologies, I specialize in building responsive, dynamic, and visually appealing web applications. I enjoy turning ideas into reality with clean and efficient code.",
  github: "https://github.com/deadlegend2025",
  linkedin: "https://www.linkedin.com/in/ankit-singh2026/",
  cv: "https://drive.google.com/file/d/1tDpfrTwYm8kgGzTN1pAhw3JYxZFpUFuq/view?usp=sharing",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Job Portal App",
      short:
        "A platform for job seekers and employers to connect, featuring user authentication and job postings.",
      description:
        "This application provides a seamless experience for job seekers to browse and apply for jobs while allowing employers to post job listings. Built with React.js and styled using Material-UI, the app integrates Supabase for authentication and database management.",
      technologies: ["#React.js", "#Supabase", "#Material-UI"],
      github: "https://github.com/deadlegend2025/Job-Portal---",
      demo: "#", // Add demo link if applicable
    },
    {
      title: "Echo AI Chat Bot App",
      short:
        "An AI-powered chat application built using Google Gemini and Clerk authentication.",
      description:
        "This app leverages the power of AI to provide a real-time, responsive chatbot experience. It features user authentication with Clerk, a sleek typing animation for a modern touch, and a backend powered by the MERN stack.",
      technologies: ["#React.js", "#MongoDB", "#Express.js", "#Clerk"],
      github: "https://github.com/deadlegend2025/chatgpt",
      demo: "#", // Add demo link if applicable
    },
    {
      title: "React Chat Application",
      short:
        "A real-time chat application with user authentication and message synchronization.",
      description:
        "This chat app provides a responsive interface for real-time communication. Built with React.js for the front end, it ensures a seamless user experience. Firebase handles authentication and real-time message storage.",
      technologies: ["#React.js", "#Firebase"],
      github: "https://github.com/deadlegend2025/chat-application",
      demo: "#", // Add demo link if applicable
    },
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Frontend Developer Intern",
      company: "Navodita Infotech",
      duration: "May 2024 - Jul 2024",
      description:
        "Contributed to building responsive and intuitive web applications using React.js and Material-UI. Collaborated closely with the design team to ensure consistent and high-quality user interfaces.",
    },
    {
      title: "Smart India Hackathon Participant",
      company: "Smart India Hackathon 2024",
      duration: "Mar 2024",
      description:
        "Worked on a travel and tourism problem statement, developing an innovative solution with a strong focus on user experience and functionality. Qualified for the internal round at IIIT Bhagalpur.",
    },
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Languages & Frameworks",
      skills: [
        "#HTML",
        "#CSS",
        "#JavaScript",
        "#React.js",
        "#TailwindCSS",
        "#Node.js",
        "#Express.js",
        "c++",
      ],
    },
    {
      title: "Databases",
      skills: ["#MongoDB", "mysql", "#Supabase"],
    },
    {
      title: "Others",
      skills: ["#Git", "#Material-UI", "#Clerk", "#Figma"],
    },
  ],
};

export { about, projects, experience, skills };
