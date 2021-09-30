/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aniket's Portfolio",
  description:
    "A Passionate Competitive Programmer and a Full-Stack Developer who likes to learn new skills and aspire to become a Software Developer. ",
  og: {
    title: "Aniket Shrivastav Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Aniket Shrivastav",
  logo_name: "AshutoshHathidara",

  subTitle:
    "A Passionate Competitive Programmer and a Full-Stack Developer who likes to learn new skills and aspire to become a Software Developer.",
  resumeLink:
    "https://drive.google.com/file/d/1KQiRfp4qBMQJOMMrtUuxcNG-ytSw3opA/view?usp=sharing",
  portfolio_repository: "https://github.com/aniket173000",
};

const socialMediaLinks = [
  // github: "https://github.com/aniket173000",
  // linkedin: "https://www.linkedin.com/in/aniketshrivastav/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/aniket173000",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aniketshrivastav/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:aniketshrivastav02@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100008316495433",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/aniket173000/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Competitive Programming",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Solved almost 600+ Problems based on Data Structures and Algorithms.",
        "⚡ Regular Practice on Codeforces, Codechef and Leetcode.",
        "⚡ Currently I am rated as Specialist at Codeforces and 4 ⭐ at Codechef.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React.",
        "⚡ Developing useful Web Application using MERN stack.",
        "⚡ Creating application backend in Node, Express & Socket.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Technical Content Writing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Researched and Published aroud 10+ articles on GeeksforGeeks.",
        "⚡ The articles were based on Data Structures and Algorithms.",
        "⚡ Improved some articles based on Problem Solving and DSA.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/aniket173000",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/aniket173000",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/aniket173000",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@aniketshrivastav02",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA500",
      },
      profileLink: "https://leetcode.com/aniket173000/",
    },
    {
      siteName: "GFG",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#008000",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/aniket173000/practice/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Nagpur",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIIT Nagpur",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Data Structures and Algorithms, Compter Networks, OOPS, DBMS and Operating System.",
        "⚡ Along with this I have learnt Application Programming, Theory of Computations, Software Architecture and Discrete Mathematics.",
        "⚡ I secured Rank 1 in IOT_WAVE, Rank 7 in ACM-ICPC and Rank 1 in Fall For Code 3.0.",
      ],
      website_link: "http://iiitn.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ChatBot with Rasa and Python",
      subtitle: "- Coursera",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1mTPLJW0NuFUAGgqbmkjSNZ_i6mo4DpuK/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Web Development",
      subtitle: "- TechTomatoes",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1wYXxsIO9a5miWJtKYyBY5dbEi-tyayER/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Competitive Programming",
      subtitle: "TechGIG",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1iE1PjidAB3Esvtwkpqf4uxjdJZFCv5GF/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Kickstart 2021",
      subtitle: "- Coding",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1yVnUBYO3fWkRdyACa0WZ3fPX8AENekUB/view?usp=sharing",
      alt_name: "Kickstart",
      color_code: "#1F70C199",
    },
    {
      title: "Google Codejam 2021",
      subtitle: "- Coding",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/17VuY8nkJyu6uUXWsJajCwRtwGjUxywse/view?usp=sharing",
      alt_name: "Codejam",
      color_code: "#D83B0199",
    },
    {
      title: "Google Hashcode 2020",
      subtitle: "- Hashcode",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15uxfNoqxwY_DnB2c8Pj0ANjB7YCKvL3W/view?usp=sharing",
      alt_name: "google",
      color_code: "#1F70C199",
    },
    {
      title: "Uber Hacktag",
      subtitle: "- Coding",
      logo_path: "uber.png",
      certificate_link:
        "https://drive.google.com/file/d/16I2uZav9v1n8QXnTqyDVdLuE1ucoQoji/view?usp=sharing",
      alt_name: "Uber",
      color_code: "#0C9D5899",
    },
    {
      title: "Publicis Sapient",
      subtitle: "- DSA",
      logo_path: "sapient.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "sapient",
      color_code: "#00000099",
    },
    {
      title: "IOT WAVE",
      subtitle: "- Electronic Models",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1iRdHuUr8NjUAy3D5Q6Om2_yTJ3j7VTa6/view?usp=drivesdk",
      alt_name: "IOT",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and Mentorships",
  description:
    "I have worked as a Web Development Intern at an emerging startup Tech Tomatoes and also Contibuted as a Technical Content Writer Intern at GeeksforGeeks.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "Tech Tomatoes",
          company_url: "https://techtomatoes.in/",
          logo_path: "techtomatoes.png",
          duration: "June 2021 - August 2021",
          location: "Indore, Madhya Pradesh",
          description:
            "I have worked on their user experience of their website using React and TailwindCSS. I also Contributed on their personal portfolio platform where I made 2 Portfolio's from scratch using HTML, CSS, JavaScript and made it completely responsive using React. Some more technologies which I used were GraphQL, Node.js, Bootstrap, TypeScript etc. ",
          color: "#ee3c26",
        },
        {
          title: "Technical Content Writing Intern",
          company: "GeeksforGeeks",
          company_url: "https://www.geeksforgeeks.org/",
          logo_path: "gfg.png",
          duration: "November 2020 - October 2021",
          location: "Work From Home",
          description:
            "Researched and Published 10+ articles based on Data Structures and Algorithms on their portal. Improved many articles based on problem solving and syntax error. Published some articles on Advanced Data structures and algorithms in C++ and Python.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Mentorships",
      experiences: [
        {
          title: "Winter of Code 2021",
          company: "DotSlash Community",
          company_url: "https://iiitn.ac.in/page.php?id=230",
          logo_path: "pp.png",
          duration: "January 2021 - Present",
          location: "IIIT Nagpur",
          description:
            "Mentored 50+ students in a code camp by solving their doubts of Data Structures & Algorithms and also was a Head Convenor of DotSlash Community.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full-Stack Development projects based on MERN stack and deploy them to web applications.I have also created some projects depicting Application of Data Structures and Algorithms.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },

  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //publicationsHeader,
  contactPageData,
};
