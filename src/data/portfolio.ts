export const portfolioData = {
  hero: {
    name: "Md Meraj Ansari",
    title: "Innovator & Tech Enthusiast",
    subtitle: "B.Tech Student at Symbiosis Institute of Technology | Aspiring Innovator Specialist",
    profileImage: "/main pfp.jpeg",
    resumeLink: "MD_Meraj_Ansari_Resume_Updated.pdf",
    githubUrl: "https://github.com/MLNomad-man",
    linkedinUrl: "https://www.linkedin.com/in/mdmeraj05/"
  },
  about: {
    description: "A dedicated and innovative second-year B.Tech student at Symbiosis Institute of Technology with a strong foundation in programming and a passion for leveraging technology for societal benefit. Proven ability to lead and collaborate through roles in student clubs and event management. Eager to apply a problem-solving mindset and technical skills to real-world challenges in the tech industry.",
  },
  skills: {
    languages: [
      { name: "Python", progress: 90, color: "bg-blue-500" },
      { name: "C", progress: 85, color: "bg-green-500" },
      { name: "R", progress: 80, color: "bg-purple-500" },
      { name: "Java", progress: 50, color: "bg-orange-500" },
      { name: "HTML & CSS", progress: 55, color: "bg-pink-500" },
    ],
    libraries: [
      { name: "NumPy & Pandas", progress: 85, color: "bg-cyan-500" },
      { name: "Matplotlib & Seaborn", progress: 80, color: "bg-indigo-500" },
      { name: "OpenCV", progress: 80, color: "bg-red-500" },
      { name: "FastAPI", progress: 75, color: "bg-yellow-500" },
    ],
    tools: [
      { name: "Google Cloud", progress: 80, color: "bg-green-400" },
      { name: "IoT Development", progress: 85, color: "bg-purple-400" },
      { name: "Blockchain (Algorand)", progress: 54, color: "bg-red-400" },
    ],
  },
  experience: [
    {
      id: "ieee-chair",
      role: "Chair, IEEE Industry Applications Society (IAS)",
      organization: "Symbiosis Institute of Technology, Hyderabad",
      points: [
        "Lead the student branch chapter, organizing technical events, workshops, and seminars.",
        "Promote student membership and engagement in IEEE activities."
      ],
      iconBg: "bg-yellow-500",
      iconColor: "text-yellow-400",
      type: "ieee"
    },
    {
      id: "algo-co-lead",
      role: "Co-Lead, Algorand Blockchain Club",
      organization: "Symbiosis Institute of Technology, Hyderabad",
      points: [
        "Co-led the student-run blockchain club, fostering a learning environment.",
        "Conducted technical workshops on Algorand Blockchain."
      ],
      iconBg: "bg-cyan-500",
      iconColor: "text-cyan-400",
      type: "algo"
    },
    {
      id: "anveshan-coord",
      role: "Event Coordinator, ANVESHAN",
      organization: "Symbiosis Institute of Technology, Hyderabad",
      points: [
        "Managed coordination for ANVESHAN, the flagship event of the institute.",
        "Demonstrated strong organizational and teamwork skills."
      ],
      iconBg: "bg-pink-500",
      iconColor: "text-pink-400",
      type: "event"
    }
  ],
  achievements: [
    {
      id: "techsynapse-hackathon-2026",
      title: "TechSynapse Hackathon Winner",
      description: "Secured a win with Team Neo at the TechSynapse Hackathon during an intense 24-hour sprint. We built ArthNiti—an AI-powered financial advisor aimed at transforming raw financial data into smart, actionable insights.",
      points: [
        "Intense 24-Hour Innovation Sprint",
        "Developed 'ArthNiti' - an AI financial advisor",
        "Data Transformation & Actionable Insights",
        "Strong Team Collaboration"
      ],
      images: ["/hackathon hgeetanjali 2.jpeg", "/hackthon geetanjali .jpeg"],
      accentColor: "text-purple-400",
      subFeature: {
        title: "Project ArthNiti",
        desc: "Built an AI-powered financial advisor.",
        color: "text-purple-400"
      },
    },
    {
      id: "anveshan-2025",
      title: "ANVESHAN 2025 - Event Coordinator",
      description: "Successfully coordinated ANVESHAN 2025, the annual technical fest of Symbiosis Institute of Technology, Hyderabad. Led a team to organize a diverse range of events including treasure hunts, neon parties, esports competitions, DJ nights, and many more engaging activities.",
      points: [
        "Event Management & Team Leadership",
        "Strategic Planning & Execution",
        "Multi-Event Coordination",
        "Stakeholder Management"
      ],
      images: ["/anveshan_1.jpg", "/anveshan_2.jpg"],
      accentColor: "purple-accent",
      subFeature: null,
    },
    {
      id: "first-induction",
      title: "First Induction Program",
      description: "Participated in the inaugural induction program of our college, marking the beginning of our academic journey at Symbiosis Institute of Technology, Hyderabad. This program introduced us to the college culture, academic expectations, and provided opportunities for team building and collaboration.",
      points: [
        "College Orientation & Integration",
        "Team Building Activities",
        "Academic & Cultural Introduction",
        "Peer Networking & Collaboration"
      ],
      images: ["/ind1.jpg", "/ind2.jpg"],
      accentColor: "text-green-400",
      subFeature: {
        title: "Futsal Championship Victory",
        desc: "Our team secured the first prize in futsal during the induction program, demonstrating excellent teamwork, strategic thinking, and competitive spirit.",
        color: "text-green-400"
      }
    },
    {
      id: "ieee-leadership",
      title: "IEEE IAS Student Branch Chair",
      subtitle: "Symbiosis Institute of Technology, Hyderabad",
      description: "Serving as the Chair of the IEEE Industry Applications Society Student Branch Chapter at SIT Hyderabad. Leading initiatives in industry applications, organizing technical events, and fostering innovation among students in electrical and electronics engineering.",
      points: [
        "Student Leadership & Management",
        "Technical Event Organization"
      ],
      images: ["/sb chair.jpg"],
      accentColor: "purple-accent",
      subFeature: {
        title: "Conference Participation",
        desc: "Attended IEEE ICASP 2025-International Conference on Acoustics, Speech and Signal Processing, demonstrating commitment to staying current with cutting-edge research and industry developments.",
        color: "text-blue-400",
        images: ["/ieee1.jpg", "/ieee2.jpg"]
      }
    },
    {
      id: "ai-agent",
      title: "Salesforce Agentforce Platform",
      description: "Successfully built my first AI agent using Salesforce Agentforce platform, demonstrating proficiency in AI development and enterprise solutions.",
      points: [],
      images: ["/agent.jpg"],
      accentColor: "purple-accent",
      subFeature: {
        title: "Powered by Salesforce",
        desc: "Leveraged Salesforce's cutting-edge Agentforce platform to create intelligent AI solutions for enterprise applications.",
        color: "text-blue-400"
      }
    },
    {
      id: "algoscape",
      title: "Blockchain Gaming Event",
      description: "As the Head of the Algorand Club, I organized and led AlgoScape, an innovative blockchain event inspired by Squid Game that combined competitive gaming elements with cutting-edge decentralized technology. This creative event showcased smart contracts, Web3 applications, and blockchain technology through engaging challenges, demonstrating my leadership and innovative approach to tech education and community building.",
      points: [
        "Squid Game-Inspired Event Design",
        "Competitive Gaming & Blockchain Integration",
        "Creative Tech Education & Engagement",
        "Innovative Community Building"
      ],
      images: ["/algo1.jpg", "/algo2.jpg"],
      accentColor: "text-blue-400",
      subFeature: {
        title: "Event Highlights",
        desc: "Successfully organized and led AlgoScape, a Squid Game-inspired blockchain event that provided participants with hands-on experience in Algorand's cutting-edge technology, smart contracts, DeFi, and Web3 applications through competitive and engaging challenges.",
        color: "text-blue-400"
      }
    },
    {
      id: "hackathon-2025",
      title: "ECE Department Hackathon Winner - 1st Place",
      description: "Won the prestigious Hackathon-2025 organized by the Department of ECE at KL University, Azizanagar Campus. Secured 1st place with a prize of ₹15,000 in a 24-hour challenge where hardware meets imagination.",
      points: [
        "24 Hours Innovation Challenge",
        "Hardware & Software Integration",
        "Problem Solving Under Pressure",
        "Team Collaboration & Leadership"
      ],
      images: ["/hackathon1.jpg", "/hackathon2.jpg", "/hackathon3.jpg", "/hackathon4.jpg", "/hackathon5.jpg"],
      accentColor: "text-yellow-400",
      subFeature: {
        title: "Championship Achievement - 1st Place",
        desc: "Event Date: October 8, 2025 | Prize Won: ₹15,000 INR (1st Place) | Venue: KL University, Azizanagar Campus",
        color: "text-yellow-400"
      }
    },
    {
      id: "guvi-iit-bombay",
      title: "GUVI IIT Bombay - AI Impact Summit 2026",
      subtitle: "Mission Upskill India Pre-Summit Event",
      description: "Participated in the Mission Upskill India Pre-Summit Event of the AI Impact Summit 2026, held at IIT Bombay during Techfest and organized by HCL GUVI. The event offered valuable insights into AI awareness, industry expectations, and the skills needed to stay relevant in an AI-driven future.",
      points: [
        "AI Awareness & Industry Insights",
        "Held at IIT Bombay during Techfest",
        "Organized by HCL GUVI & India AI",
        "Practical understanding to shape an AI-ready workforce"
      ],
      images: ["/guvi iit bombay certificate.jpeg"],
      accentColor: "text-blue-400",
      subFeature: {
        title: "Certificate of Participation",
        desc: "Certified by Arun Prakash M, Founder and CEO of HCL GUVI. Date: 23 December, 2025.",
        color: "text-blue-400"
      }
    },
    {
      id: "ieee-paper-presentation",
      title: "IEEE Paper Presentation - Sign Language Recognition",
      subtitle: "2025 IEEE 3rd Global Conference on Wireless Computing and Networking (GCWCN)",
      description: "Presented a research paper entitled 'Sign Language Recognition Using Artificial Intelligence and Machine Learning' at the 2025 IEEE 3rd Global Conference on Wireless Computing and Networking (GCWCN). This work aims to make communication more accessible through technology.",
      points: [
        "Published Research Paper at IEEE Conference",
        "Sign Language Recognition Using AI & ML",
        "IEEE Bombay Section - Sinhgad Institutes",
        "Advancing Accessibility Through Technology"
      ],
      images: ["/paper presnted.png"],
      accentColor: "text-cyan-400",
      subFeature: {
        title: "Conference Details",
        desc: "IEEE GCWCN 2025 | 22nd - 23rd November, 2025 | Chaired by Dr. Dnyaneshwar S. Mantri & Dr. Sachin D. Babar | View Certificate (PDF)",
        color: "text-cyan-400"
      }
    },
    {
      id: "ieee-hackathon-leadership",
      title: "IEEE Hackathon Winner - Leadership Summit 2025",
      subtitle: "3rd Major Hackathon Victory",
      description: "Secured victory at the IEEE Hackathon held during the IEEE Leadership Summit 2025. This marks our third major hackathon title together as a team, demonstrating consistent ability to blend high productivity with innovation.",
      points: [
        "3rd Major Hackathon Win as a Team",
        "IEEE Leadership Summit 2025",
        "Team: Raj Aryan, Pramit Panigrahi, Smaran Jaianand",
        "Previously won: Hardware Hackathon at KLH University"
      ],
      images: ["/ieee hackthon image.jpeg"],
      accentColor: "text-yellow-400",
      subFeature: {
        title: "Team Achievement",
        desc: "Core team consistently demonstrated collaborative spirit, dedication, and technical talent across multiple hackathon victories.",
        color: "text-yellow-400"
      }
    }
  ],
  projects: [
    {
      id: "robot-car",
      title: "Obstacle-Avoiding Robot Car",
      description: "This project showcases skills in hardware integration and real-time programming by creating an autonomous vehicle that uses ultrasonic sensors to intelligently navigate its environment.",
      tags: ["Arduino", "C++", "Robotics"],
      demoUrl: "#",
      codeUrl: "https://github.com/MLNomad-man/Arduino-Obstacle-Avoiding-Robot-Car-4WD"
    },
    {
      id: "ai-assistant",
      title: "AI Voice Assistant",
      description: "Built to explore natural language processing, this assistant demonstrates the ability to integrate multiple Python libraries for speech recognition and task automation.",
      tags: ["Python", "Speech Recognition"],
      demoUrl: "#",
      codeUrl: "https://github.com/MLNomad-man/Ai-Assistant-using-python"
    },
    {
      id: "sign-language",
      title: "Sign Language Detection",
      description: "Real-time Sign Language Recognition using YOLO with dataset prep, training pipeline, and inference scripts. Features end-to-end pipeline for data collection, labeling, training, validation, and deployment.",
      tags: ["Python", "YOLO", "Computer Vision", "OpenCV"],
      demoUrl: "#",
      codeUrl: "https://github.com/MLNomad-man/sign-language-detection-"
    },
    {
      id: "speech-to-text",
      title: "Speech-to-Text System",
      description: "Real-time Speech-to-Text system for accurate, low-latency transcription with optional streaming and offline Whisper support. Features microphone to markdown transcription in seconds.",
      tags: ["Python", "Whisper", "Speech Recognition", "Real-time"],
      demoUrl: "#",
      codeUrl: "https://github.com/MLNomad-man/Speech-to-text-using-Python"
    },
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description: "The very site you're on, this portfolio was built from scratch to demonstrate proficiency in modern frontend development, including React and responsive design with Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      demoUrl: "#",
      codeUrl: "https://github.com/MLNomad-man/my-portfolio-2025"
    }
  ],
  demos: [
    {
      id: "ai-assistant-demo",
      title: "AI Voice Assistant",
      subtitle: "Python • Speech Recognition • NLP",
      videoUrl: "/ai assistant.mp4",
      description: "Watch the AI Assistant in action, demonstrating speech recognition, natural language processing, and automated task execution.",
      features: ["Voice Commands", "Task Automation", "Natural Language"],
      colorTheme: "blue",
    },
    {
      id: "sign-language-demo",
      title: "Sign Language Detection",
      subtitle: "YOLO • Computer Vision • OpenCV",
      videoUrl: "/sign language.mp4",
      description: "Experience real-time sign language recognition using YOLO, showcasing computer vision and machine learning capabilities.",
      features: ["Real-time Detection", "YOLO Model", "Computer Vision"],
      colorTheme: "green",
    }
  ],
  certifications: [
    { id: "ml-cert", title: "Machine Learning Certification", issuer: "Codesoft", color: "text-cyan-400" },
    { id: "python-cert", title: "Python Coding Certification", issuer: "Internpe", color: "text-pink-400" },
    { id: "gcp-badges", title: "Google Cloud Skill Boost Badges", issuer: "Google Cloud", color: "text-yellow-400" },
    { id: "conference-hack", title: "Conference & Hackathon", issuer: "Participation", color: "text-green-400" },
  ],
  contact: {
    phone: "+91-8639961862",
    email: "mdmeraj3500@gmail.com",
    linkedin: "mdmeraj05",
    github: "MLNomad-man",
    linkedinUrl: "https://www.linkedin.com/in/mdmeraj05/",
    githubUrl: "https://github.com/MLNomad-man"
  }
};
