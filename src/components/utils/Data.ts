import {
    Image,
    LucideIcon,
    GraduationCap,
    Share2,
    Terminal,
    CloudyIcon,
    GitPullRequestClosedIcon,
    CalendarDays,
    LineChart,
    FilmIcon,
    Quote,
    XCircle,
    Calculator,
    Sigma,
    Puzzle,
    Frame,
} from "lucide-react";

export interface ISectionCardData {
    id: number;
    title: string;
    src: string;
    //exp: string;
    // snippetCount: number;
    progress: number;
    href?: string;
}

export interface IProjectSectionCardData {
    id: number;
    Icon: LucideIcon;
    title: string;
    bgColor: string;
    techStack: string;
    href?: string;
    url?: string;
    description?: string;
    isCompleted: boolean;
    isLive: boolean;
}

//Project Section
export const projectCard: IProjectSectionCardData[] = [
    {
        id: 1,
        title: "SavorSoul ",
        techStack: "ReactJS, Java, Html, CSS, Python",
        Icon: GraduationCap,
        bgColor: "darkred",
        href: "https://github.com/ArpanJain5/YummyRestro1",
        url: "",
        description: "Streamlined table reservations and instantly check real-time availability at premier restaurants via messaging-based platform, seamlessly accommodating preferred number of guests with an AI-powered responsive Bot with 20% increased speed Developed innovative interfaces using React.JS, JSON and Java for storing data, resulting in a 40% increase in user engagement and reduction in bounce rate",
        isCompleted: true,  
        isLive: false,
    },
    {
        id: 2,
        title: "CareConnect",
        techStack: "ReactJS, Java, Html, CSS",
        Icon: GraduationCap,
        bgColor: "darkblue",
        href: "https://github.com/ArpanJain5/DoctorFin",
        url: "",
        description: "Enhanced user experience by introducing a friendly appointment booking feature with flexible time slots and multi-hospital doctor options, resulting in heightened trust and a increase in user reliance Spearheaded the adoption of Java programming language to develop a robust backend system, improving application performance by React.JS and JavaScript by and enabling seamless scalability to accommodate 10x growth",
        isCompleted: true,
        isLive: false,
    },
    {
        id: 3,
        title: "ECommerce",
        techStack: "HTML, CSS, JavaScript, Bootstrap, Java",
        Icon: GraduationCap,
        bgColor: "gold",
        href: "https://github.com/ArpanJain5/Ecommerce-MERN",
        url: "",
        description: "",
        isCompleted: true,
        isLive: false,
    },
    {
        id: 4,
        title: "Voice Modulator Bot",
        techStack: "Python",
        Icon: GraduationCap,
        bgColor: "darkviolet",
        href: "https://github.com/ArpanJain5/Python--voice-modulation",
        url: "",
        description: "",
        isCompleted: true,
        isLive: false,
    },
    {
        id: 5,
        title: "Dappcord",
        techStack: "BlockChain",
        Icon: GraduationCap,
        bgColor: "darkgreen",
        href: "https://github.com/ArpanJain5/Dappcord_Blockchain",
        url: "",
        description: "",
        isCompleted: true,    
        isLive: false,
    },
    {
        id: 6,
        title: "Mitra",
        techStack: "HTML, CSS, Bootstrap, JavaScript, Java",
        Icon: GraduationCap,
        bgColor: "purple",
        href: "https://github.com/ArpanJain5/Mitra",
        url: "",
        description: "",
        isCompleted: true,
        isLive: false,
    },
    // {
    //     id: 7,
    //     title: "",
    //     techStack: "",
    //     Icon: GraduationCap,
    //     bgColor: "",
    //     href: "",
    //     url: "",
    //     description: "",
    //     isCompleted: true, 
    //     isLive: true,
    // },
    // {
    //     id: 8,
    //     title: "",
    //     techStack: "",
    //     Icon: GraduationCap,
    //     bgColor: "",
    //     href: "",
    //     url: "",
    //     description: "",
    //     isCompleted: true, 
    //     isLive: true,
    // },
];

//tech stack section
//frontend
export const frontendCard: ISectionCardData[] = [
    {
        id: 1,
        title: "HTML",
        src: "/tech/frontend/html.jpeg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        id: 2,
        title: "CSS",
        src: "/tech/frontend/css.jpeg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
    },
    {
        id: 3,
        title: "JavaScript",
        src: "/tech/frontend/js.jpg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 85,
    },
    {
        id: 4,
        title: "Tailwind CSS",
        src: "/tech/frontend/tailwind.jpg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
    },
    {
        id: 5,
        title: "BootStrap",
        src: "/tech/frontend/bootstrap.jpeg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
    },
    {
        id: 6,
        title: "React.Js",
        src: "/tech/frontend/ReactJS.jpg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
];

export const backendCard: ISectionCardData[] = [
    {
        id: 1,
        title: "Node.Js",
        src: "/tech/backend/nodejs.webp",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: "Express.Js",
        src: "/tech/backend/express.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    
    {
        id: 3,
        title: 'Java',
        src: '/tech/backend/java.png',
        progress: 60,
    },
    // {
    //     id: 4,
    //     title: 'PHP',
    //     src: '/tech/backend/php.png',
    //exp: '1 day ago',
    // snippetCount: 1128,
    //     progress: 70,
    // },
];

export const databaseCard: ISectionCardData[] = [
    {
        id: 1,
        title: "Java",
        src: "/tech/backend/java.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: 'MySQL',
        src: '/tech/database/mysql.jpeg',
        progress: 80,
    },
];

export const devopsCards: ISectionCardData[] = [
    {
        id: 1,
        title: "Docker",
        src: "/tech/devops/docker.webp",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: "Kubernetes",
        src: "/tech/devops/k8s.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: "GIT",
        src: "/tech/devops/git.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 4,
        title: "Jenkins",
        src: "/tech/devops/jenkins.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 70,
    },
    {
        id: 5,
        title: "Terraform",
        src: "/tech/devops/terraform.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 60,
    },
];

export const web3Cards: ISectionCardData[] = [
    {
        id: 1,
        title: "Solidity",
        src: "/tech/web3/solidity.jfif",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: "Hardhat",
        src: "/tech/web3/hardhat.jpeg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: "Metamask",
        src: "/tech/web3/metamask.webp",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 90,
    },
    {
        id: 4,
        title: "Chainlink",
        src: "/tech/web3/chainlink.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
    {
        id: 5,
        title: "OpenZeppelin",
        src: "/tech/web3/openzeppelin.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 70,
    },
];

export const otherCards: ISectionCardData[] = [
    {
        id: 1,
        title: "GIT",
        src: "/tech/others/git.png",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 60,
    },
    {
        id: 2,
        title: "GitHub",
        src: "/tech/others/github2.jpg",
        //exp: "1 day ago",
        // snippetCount: 1128,
        progress: 80,
    },
];
export const languages: ISectionCardData[] = [
    {
        id: 1,
        title: "C Programming",
        src: "/tech/programming/cprogram.png",
        //exp: '1 day ago',
        // snippetCount: 1128,
        progress: 70,
    },
    {
        id: 2,
        title: "C++ Programming",
        src: "/tech/programming/CPP.png",
        //exp: '1 day ago',
        // snippetCount: 1128,
        progress: 70,
    },
    {
        id: 3,
        title: "Python",
        src: "/tech/programming/python2.jpg",
        //exp: '1 day ago',
        // snippetCount: 1128,
        progress: 60,
    },
    {
        id: 4,
        title: "Java",
        src: "/tech/backend/java.png",
        //exp: '1 day ago',
        // snippetCount: 1128,
        progress: 60,
    },
];
