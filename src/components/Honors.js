import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Work Experiences</h1>
            <p className="font-light text-gray-400">Here are some of my work experiences</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Fullstack Software Developer" issued="PT. Adi Media Expertindo" desc="I work on a variety of projects ranging from Customer Relationship Management (CRM), Enterprise Resource Planning (ERP), to Content Management Systems (CMS). With a strong focus on web development, I primarily utilize ReactJS and ExpressJS to craft robust and user-friendly web applications. Additionally, I possess expertise in Java, allowing me to develop powerful and efficient Desktop Applications." />
                <HonorCard name="Fullstack Web Developer" issued="UKMGO Digital" desc="In this advertisment company, I possess a diverse skill set that enables me to address various client requirements effectively. I excel in crafting dynamic and feature-rich web applications using PHP, Golang, and Wordpress, catering to the specific needs and preferences of clients." />
                <HonorCard name="System Analyst Specialist" issued="Sagara Technologhy" desc="I specialize in designing and implementing robust and efficient information systems. My expertise lies in creating Entity-Relationship Diagrams (ERDs) that serve as a blueprint for data modeling, ensuring seamless data organization and relationships within the system." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
