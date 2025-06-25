interface Project {
    title: string;
    description: string;
    description2: string;
    description3: string;
    description4: string[];
    description5: string;
    subtitle: string;
    text: string;
    subtitle2: string;
    text2: string;
    text3: string;
    href: string;
    img: string[];
}
const projects: Project[] = [
    {
        title: "Colivio",
        description: "This was a project made for new college students to find a roommate or to find a room to rent in a non-expensive community.",
        description2: "",
        description3: "The focus of this project was:",
        description4: [
            "Clear, intuitive layouts",
            "Cheap and affordable place to rent",
            "Minimalistic design",
            "User-first navigation",
            "Responsive design",
            "Easy to use and to connect with other people",
        ],
        description5: "",
        subtitle: "My Role here:",
        text: "I was the UX/UI Designer and the developer of this project, this was developed with some of my mates in 4geeksAcademy as a final project.",
        subtitle2: "Timeline:",
        text2: "It was a 4 weeks project, the final result was a web app that allows users to create an account, post their rooms or find a roommate, and connect with others, with basic functionalities like filter, post.",
        text3: "Thinking of a similar idea? Let's connect!",
        href: "colivio",
        img: ["../src/assets/Colivio.png", "../src/assets/Colivio2.png", "../src/assets/Colivio3.png" , "../src/assets/Colivio4.png"]
    },
    {
        title: "Portfolio UX/UI",
        description: "This UX/UI portfolio highlights my approach to creating user-friendly, visually engaging, and conversion-driven digital experiences.",
        description2: "I’ve tried to make it simple, so any person can interact easily with my web page. I want every person visiting my site gets a great impression of my work, that’s why I’ve decided to put just what is needed, not more or less.",
        description3: "My Focus is always on:",
        description4: [
            "Clear, intuitive layouts",
            "Consistent brand identity",
            "Responsive design",
            "User-first navigation",
        ],
        description5: "Whether you’re a small business, startup, or entrepreneur, these examples show how good design can directly support your goals, I like to focus always in the fluent of the design, keeping things simple but with a good taste of design, with the color palette of my preferences.",
        subtitle: "My Role here:",
        text: "I was the UX/UI Designer and the developer of this project.",
        subtitle2: "Timeline:",
        text2: "Now, talking about timeline it took me like 8 months in part-time, and always in the process i became with new ideas beacuse it was for me, this page for example, everything was almost ready but I had a brake through, I came with the idea to make an specific project page to talk more of the project. ",
        text3: "Want something like this for your business?",
        href: "portfolio",
        img: ["./src/assets/Portfolio1.png", "./src/assets/Portfolio2.png", "./src/assets/Portfolio3.png"]

    },
    {
        title: "My first Portfolio",
        description: "I've created this portfolio as quick as I could after graduating from 4Geeks Academy, it was my first portfolio and I wanted to show my skills as a UX/UI designer and developer.",
        description2: "I’ve tried to make it simple, so any person can interact easily with my web page. ",
        description3: "My focus with this was:",
        description4: [
            "Showcase my skills",
            "Show my projects",
            "Make a responsive design",
            "Keep it simple",
            "Introduce myself"
        ],
        description5: "Whether you’re a small business, startup, or entrepreneur, these examples show how good design can directly support your goals, I like to focus always in the fluent of the design, keeping things simple but with a good taste of design, with the color palette of my preferences.",
        subtitle: "My Role here:",
        text: "I was the UX/UI Designer and the developer of this project.",
        subtitle2: "Timeline:",
        text2: "It took me like 2 weeks in part-time, I wanted to show my skills as a UX/UI designer and developer, so I made it as quick as I could.",
        text3: "Want something like this for yourself? Let's Rock!",
        href: "uiux",
        img: ["./src/assets/Oport.png", "./src/assets/Opor.png",]
    }
];

export default projects;