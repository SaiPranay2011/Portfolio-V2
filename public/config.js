module.exports = {
  email: "chebiumsaipranay@gmail.com",

  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/SaiPranay2011",
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/bchiang7',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/bchiang7',
    // },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sai-pranay-chebium/",
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
  ],

  navLinks: [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Work",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "NextJs",
    "Node.js",
    "FastAPI",
    "ReactNative",
  ],

  jobs: [
    {
      title: "Software Developer Intern",
      company: "Amal",
      location: "Dubai, UAE",
      range: "November 2022 - June 2023",
      url: "https://www.amal.com/en",
      description:[
        "Built web pages and mobile application pages using react and react native.",
        "Worked on IOS and Android applications.",
        "Worked with back end services like firebase and microservices."
      ],
        
    },
    {
      title: "Intern",
      company: "UTP",
      location: "Perak, Malaysia",
      range: "19th June, 2022 - 25th June, 2022",
      url: "",
      description:[
        "It was a immersion program where we were taught courses as well as buisiness management and projects were done individually and by group."
      ],
    },
    {
      title: "Intern",
      company: "APSSDC",
      location: "Vijayawada, Andhra Pradesh",
      range: "June 2021 - July 2021",
      url: "",
      description:["Industrial Training Internship on Android App Development using Java"],
       
    }
  ],

  featuredProjects:[
    {
      title:"Portfolio-V1",
      cover:"/assets/Projects/portfolioV1.png",
      github:"https://github.com/SaiPranay2011/Portfolio-V1",
      external:"",
      tech:[
        "React",
        "CSS"
      ],
      description:"A Personal Portfolio Version-1 developed by using web technology ReactJS. Portfolio comprise of my personal information and my projects."
    },
  ],
  projects:[
    {
      title:"Amal web and mobile application",
      external:"https://www.amal.com/en",
      tech:[
        "NextJS",
        "ReactNative",
        "Firebase",
        "Jira",
      ],
      company:"Amal",
      showInProjects: true,
    },
    {
      title: "MerchWorld",
      tech:[
        "React",
        "FastAPI"
      ],
      showInProjects:true,
      description:"The website acts as a centralised platform for actors, musicians, YouTubers, and other artists to showcase and sell their items globally"
    },
    {
      title: "Meble",
      tech:[
        "Java",
        "XML",
        "Android Studio"
      ],
      showInProjects:false,
      description:"An app designed using Java and Android Studio which enables users to select from a wide range of traditional and contemporary furniture to improve their aesthetic appearance of their commercial or private property."
    }
  ]
};
