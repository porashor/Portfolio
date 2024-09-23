import { BiLogIn, BiLogOut } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"

export const navbr = [
    {
        name: "Home",
        links: "/"
    },
    {
        name: "About me",
        links: "about"
    },
    {
        name: "Blog",
        links: "blog"
    },
]


export const services = [
    {
        icon: <BiLogOut/>,
        header: "psd to html",
        details: "i can do change the any kind of design to html template and it can gather and gain profite to your company and it is possible for you",
        btn: "get service"
    },
    {
        icon: <BiLogIn/>,
        header: "psd to react",
        details: "i can do change the any kind of design to html template and it can gather and gain profite to your company and it is possible for you",
        btn: "get service"
    },
    {
        icon: <BsPerson/>,
        header: "psd to react",
        details: "i can do change the any kind of design to html template and it can gather and gain profite to your company and it is possible for you",
        btn: "get service"
    }
]

import image1 from "../assets/por/image.png"
export const portfolioData = [
    {
        Image: image1,
        header: "Personal portfolio website",
        tec: "react",
        btn: "see project"
    },
    {
        Image: image1,
        header: "Personal portfolio website",
        tec: "react",
        btn: "see project"
    },
    {
        Image: image1,
        header: "Personal portfolio website",
        tec: "react",
        btn: "see project"
    },
]



import user from "../assets/image/parashar.png"
import { SiFreelancer } from "react-icons/si"
import { MdEmail } from "react-icons/md"
export const testimonial = [
    {
        name: "Rechat Bravo",
        Occ: "Designer",
        details: "your works is really awesome and it is most helpful for us.",
        Image:user
    },
    {
        name: "Rechat Bravo",
        Occ: "Designer",
        details: "your works is really awesome and it is most helpful for us.",
        Image:user
    },
    {
        name: "Rechat Bravo",
        Occ: "Designer",
        details: "your works is really awesome and it is most helpful for us.",
        Image:user
    }
]




export const contact = [
    {
        name: "Parashar Das",
        P: "Web developer(front-end)",
        icon: <BsPerson/>
    },
    {
        name: "Freelancer",
        P: "Available all the time",
        icon: <SiFreelancer/>
    },
    {
        name: "Email",
        P: "porashorbabu@gmail.com",
        icon: <MdEmail/>
    },
]
