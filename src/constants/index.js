import mediisha from "../assets/projects/mediisha.png";
import boia from "../assets/projects/boia.png";
import ttd from "../assets/projects/ttd.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Flutter developer with over 2 years of experience crafting dynamic and user-friendly mobile and web applications. Skilled in technologies like React, Node.js, PostgreSQL, Supabase, Firebase, Flutter, and MongoDB, I aim to deliver innovative solutions that enhance user experiences and drive business success.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Flutter developer with a passion for building efficient and user-friendly mobile and web applications. With over 2 years of professional experience, I have honed my skills in technologies such as React, Node.js, PostgreSQL, Supabase, Firebase, Flutter, and MongoDB. My journey in development began with a curiosity for solving problems, and it has grown into a career where I continuously embrace new challenges and innovations. I thrive in collaborative environments and enjoy crafting solutions that meet user needs and business goals. Outside of coding, I enjoy exploring new technologies and staying engaged in the tech community.`;

export const EXPERIENCES = [
  {
    year: "2024 - March 2025",
    role: "Flutter Developer",
    company: "Algorithm Squad",
    description: `As a Flutter Developer at Algorithm Squad, I specialized in designing and developing innovative applications for various platforms, including mobile, web, and desktop. My work involved creating applications that focused on enhancing user engagement and providing seamless experiences. I also contributed to tools for social media marketing and productivity management. Leveraging the versatility of Flutter, I ensured the delivery of high-quality, cross-platform solutions while collaborating with teams to maintain clean and scalable codebases.`,
    technologies: ["Flutter", "Supabase", "Firebase", "Riverpod"],
  },
  // {
  //   year: "Jun 2023 - 2023",
  //   role: "Flutter Developer",
  //   company: "ShotCoder Tech",
  //   description: `At Shotcoder Tech, I contributed to the development of Shikshya, a comprehensive school management application. My responsibilities included integrating RESTful APIs into the Flutter application to enable seamless data flow and efficient communication between the frontend and backend systems. Utilizing the BLoC state management pattern, I implemented robust and scalable features that enhanced the application's functionality and user experience. This experience sharpened my skills in API integration, Flutter development, and state management, allowing me to deliver a high-quality, user-friendly solution.`,
  //   technologies: ["Flutter", "Bloc", "Cubit"],
  // },
  // {
  //   year: "Jun 2023 -July 2023",
  //   role: "Flutter Intern & Trainee",
  //   company: "Optiwise Management",
  //   description: `As an Intern and Trainee at Optiwise Management, I was responsible for developing a web application for OKR (Objectives and Key Results) management. Working as a single developer, I designed and implemented features using Flutter and Provider for state management, ensuring an intuitive and efficient user experience. This role allowed me to gain hands-on experience in web application development, state management, and delivering scalable solutions, while contributing to a product that streamlined organizational goal tracking.`,
  //   technologies: ["Flutter", "Provider", "Flutter Web"],
  // },
];

export const PROJECTS = [
  {
    title: "Mediisha",
    image: mediisha,
    description:
      "Mediisha is a comprehensive digital health platform that offers mental health consultations, health information management solutions, health insurance program facilitation, and more",
    technologies: ["Flutter", "Riverpod"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.mediisha.user&hl=en", // Add your actual link here
    appStoreLink: null,
  },
  {
    title: "Boia Stories",
    image: boia,
    description:
      "Boia Stories offers you a diverse range of templates that you can customize according to your preferences. Boia Stories is an interactive and multifunctional application with an interface that inspires creativity and innovation.",
    technologies: ["Flutter", "Riverpod", "Firebase"],
    playStoreLink: null,
    appStoreLink: null,
  },
  {
    title: "Transform the Day",
    image: ttd,
    description:
      "Transform The Day is a powerful AI-driven social media assistant designed to take the hassle out of content creation. Leveraging 16 years of marketing expertise, it provides 365 personalized strategies, engaging stories, captivating posts, and impactful headlines. Stay ahead with weekly TikTok and Instagram trends, access real business insights, and get custom strategies crafted through an advanced profiling questionnaire.",
    technologies: ["Flutter", "Riverpod", "Firebase"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=transform.the.day&hl=en", // Add your actual link here
    appStoreLink: null,
  },
];

export const CONTACT = {
  address: "Melbourne, Victoria",
  phoneNo: "+61 0414497740",
  email: "riteshlama5@gmail.com",
};

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/rjlama07",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://jsmastery.com/",
  // },
  // {
  //   id: 3,
  //   text: "Twitter/X",
  //   icon: "/icons/twitter.svg",
  //   bg: "#ff866b",
  //   link: "https://x.com/jsmasterypro",
  // },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ritesh-jung-lama-b343b12b4/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Boia Stories",
      icon: "/images/boia.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Boia Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Boia Stories offers you a diverse range of templates that you can customize according to your preferences.",
            "Boia Stories is an interactive and multifunctional application with an interface that inspires creativity and innovation.",
          ],
        },
        {
          id: 2,
          name: "Boia",
          icon: "/images/AppStore.png",
          kind: "file",
          fileType: "url",
          href: "https://apps.apple.com/ro/app/boia-stories/id6450309212",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Boia.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/projectBoia.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Mediisha",
      icon: "/images/mediisha.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Mediisha.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Mediisha is a comprehensive digital health platform that offers mental health consultations, health information management solutions, health insurance program facilitation, and more",
          ],
        },
        {
          id: 2,
          name: "Mediisha",
          icon: "/images/playstore.svg",
          kind: "file",
          fileType: "url",
          href: "https://play.google.com/store/apps/details?id=com.mediisha.user&hl=en",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Mediisha.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/projectMediisha.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Transform the day",
      icon: "/images/ttd.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "TTD.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Transform The Day is a powerful AI-driven social media assistant designed to take the hassle out of content creation.",
            "Leveraging 16 years of marketing expertise, it provides 365 personalized strategies, engaging stories, captivating posts, and impactful headlines.",
            "Stay ahead with weekly TikTok and Instagram trends, access real business insights, and get custom strategies crafted through an advanced profiling questionnaire.",
          ],
        },
        {
          id: 2,
          name: "TTD",
          icon: "/images/playstore.svg",
          kind: "file",
          fileType: "url",
          href: "https://play.google.com/store/apps/details?id=transform.the.day&hl=en",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "TTD.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/projectTTD.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/rj.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Aboutme.jpeg",
    },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/rj.png",

      description: [
        "Hey! I’m Ritesh 👋,a dedicated and versatile Cross Platform developer with a passion for building efficient and user-friendly mobile and web applications.",
        "With over 2 years of professional experience, I have honed my skills in technologies such as React, Node.js, PostgreSQL, Supabase, Firebase, Flutter, and MongoDB.",
        "My journey in development began with a curiosity for solving problems, and it has grown into a career where I continuously embrace new challenges and innovations.",
        "I thrive in collaborative environments and enjoy crafting solutions that meet user needs and business goals. Outside of coding, I enjoy exploring new technologies and staying engaged in the tech community.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  // trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
