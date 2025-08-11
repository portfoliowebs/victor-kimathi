import { v4 as uuidv4 } from 'uuid';
import {
  ProfileData,
  ContactData,
  FooterContent,
  PortfolioItem,
  Service,
  Testimonial,
  StatItem,
  ValuePropItem,
} from '../types/interfaces';

export const profileData: ProfileData = {
  name: "Victor Kimathi",
  tagline: "Software Engineer",
  profileImage: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/profile_images/1754922964274_homecar.jpg",
  shortBio: "Passionate Full Stack AI Engineer and tech enthusiast with a knack for problem-solving and developing innovative solutions. Experienced in building scalable web and mobile applications, leveraging technologies like React, Flutter, and AI-driven tools like langchain. Currently building StudyBae mobile application. Flexible with time zone communications and driven to create impactful software that changes the world. Adheres to a disciplined software development process emphasizing simplicity, automation, and security.Its not about the code but its about the problem you are trying to solve.",
  summary: "",
  address: "",
  email: "victorcodes9532@gmail.com",
  experience: [
    {
      title: "Founder",
      company: "StudyBae mobile application",
      location: "Location",
      years: "2020 - Present",
      responsibilities: [
        "Transform the way you study with StudyBae, the powerful AI-powered study assistant that brings together all your academic resources in one intuitive app. https://mystudybae.vercel.app/",
        "Responsibility 2"
      ],
    },
    {
      title: "Founder",
      company: "Logisticx mobile application",
      location: "Location",
      years: "2020 - Present",
      responsibilities: [
        "Currently in development  https://fmattyev.manus.space/ LogistiX is conceived as a technology platform designed to address the significant challenges faced by Small and Medium Enterprises (SMEs) in Kenya's burgeoning e-commerce sector, specifically concerning last-mile delivery. High costs, unreliability, lack of transparency, and difficulties in managing multiple courier relationships hinder SME growth. LogistiX aims to provide an affordable, reliable, and easy-to-use delivery aggregation service, connecting merchants with a network of independent couriers through a unified platform.",
        "Responsibility 2"
      ],
    },
    {
      title: "Technical Lead",
      company: "Egerton University Computer Science Association",
      location: "Location",
      years: "Present",
      responsibilities: [
        "Leading technical projects and mentoring students in software development. Organizing workshops and hackathons to foster innovation and collaboration.",
        "Responsibility 2"
      ],
    },
    {
      title: "Mobile App Development Intern",
      company: "CodeSoft",
      location: "Location",
      years: "Past",
      responsibilities: [
        "Designed and developed an e-commerce mobile app for agricultural products in Meru using React Native. Delivered cross-platform solutions for iOS and Android, enhancing user accessibility.",
        "Responsibility 2"
      ],
    },
    {
      title: "Engineer Intern",
      company: "HNG Internship",
      location: "Location",
      years: "Past",
      responsibilities: [
        "Contributed to a web-based platform using React.js, improving interactivity and user experience. Collaborated with a team to implement responsive and scalable features.",
        "Responsibility 2"
      ],
    }
  ],
  education: [
    {
      institution: "Egerton University",
      degree: "Bachelor of Science in Computer Science",
      graduated: "Graduation Year",
    }
  ],
  skills: [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Flutter",
  "Spring Boot",
  "Lang Chain",
  "project management",
  "AWS",
  "MongoDB",
  "Streamlit"
],
  callToActionText: "View My Work",
  callToActionLink: "/portfolio",
};

export const contactData: ContactData = {
  title: "Get In Touch",
  description: "Feel free to reach out for collaborations or just a friendly hello",
  cardTitle: "Contact Information",
  email: {
    label: "Email",
    value: "victorcodes9532@gmail.com",
    link: "mailto:victorcodes9532@gmail.com",
  },
  address: {
    label: "Location",
    value: "Remote",
  },
  phone: undefined,
  footerNote: "I'll get back to you as soon as possible",
};

export const footerContent: FooterContent = {
  companyName: "Victor Kimathi Portfolio",
  tagline: "Software Engineer",
  slogan: "Building digital experiences that matter",
  contactEmail: "victorcodes9532@gmail.com",
  contactPhone: "",
  contactAddress: "",
  quickLinks: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/VictorKimathi",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/victor-kimathi-517501267",
      icon: "linkedin",
    },
  ],
};

export const portfolioItems: PortfolioItem[] = [
    {
      id: uuidv4(),
      image: "/project-1.jpg",
      title: "Shebang Real Estate Application",
      description: "Building a modern real estate platform using Next.js, TypeScript, Tailwind CSS, and GSAP. Features include property listings and user-friendly interfaces. https://projects-realestate-ebon.vercel.app/",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922964275_victorcodesResume.pdf",
    },
    {
      id: uuidv4(),
      image: "/project-2.jpg",
      title: "StudyBae University Revision App",
      description: "Developed a mobile app providing revision materials for university students using Flutter, Spring Boot, MongoDB, and AWS. https://mystudybae.vercel.app/",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922964275_victorcodesResume.pdf",
    },
    {
      id: uuidv4(),
      image: "/project-3.jpg",
      title: "Medical AI AI-Powered Medical Image Analysis",
      description: "Created a web app for analyzing medical images using Python, Streamlit, and Gemini AI. https://medicalaiassistant-faostpb3lhevvvu2vkmi2v.streamlit.app/",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922964275_victorcodesResume.pdf",
    },
    {
      id: uuidv4(),
      image: "/project-4.jpg",
      title: "Kili Connect Community Services App",
      description: "Built a mobile app for Kilimani citizens to access essential services using React Native. https://drive.google.com/drive/folders/16V0q9nMjMq-mBtXshfQLPRo8BzrZgs1H",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922964275_victorcodesResume.pdf",
    },
    {
      id: uuidv4(),
      image: "/project-5.jpg",
      title: "Finance AI Financial Management Platform",
      description: "Developed a web app for managing finances using Next.js, TypeScript, and Tailwind CSS. https://mai-lyart.vercel.app/",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922964275_victorcodesResume.pdf",
    },
    {
      id: uuidv4(),
      image: "/project-6.jpg",
      title: "DeoxFoods Food Delivery Mobile App",
      description: "Created a food delivery app using Flutter, Spring Boot, MongoDB, and AWS. https://victorkimathi.vercel.app/",
      pdfLink: "https://jicxsnfkyffvmieomgwd.supabase.co/storage/v1/object/public/portfolio-files/50b4d353-10bb-4398-a67a-12ef418c56a5/resumes/1754922964275_victorcodesResume.pdf",
    }
  ];

export const servicesData: Service[] = [
  {
    id: uuidv4(),
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    icon: "code",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly"],
  },
  {
    id: uuidv4(),
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces",
    icon: "design",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: uuidv4(),
    quote: "Professional and delivered beyond our expectations.",
    author: "Client Name",
    title: "CEO",
    company: "Company Name",
    image: undefined,
  },
];

export const statsData: StatItem[] = [
  {
    value: "5+",
    label: "Projects",
    description: "Completed",
    icon: "projects",
  },
  {
    value: "5+",
    label: "Years",
    description: "Experience",
    icon: "experience",
  },
];

export const valuePropsData: ValuePropItem[] = [
  {
    title: "Quality",
    description: "I deliver high-quality solutions that stand the test of time",
    icon: "quality",
  },
  {
    title: "Communication",
    description: "Clear and consistent communication throughout the project",
    icon: "communication",
  },
];