import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import linux from "../assets/skills/linux.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import typescript from "../assets/skills/typescript.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"
import github from "../assets/skills/github.svg"
import bootstrap from "../assets/skills/bootstrap.svg"
import nextjs from "../assets/skills/nextjs.svg"
import firebase from "../assets/skills/firebase.svg"
import postgresql from "../assets/skills/postgresql.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="typescript" experience="1 years" img={typescript} />
                <SkillCard name="javascript" experience="3 years" img={javascript} />
                <SkillCard name="react" experience="2 years" img={reactIcon} />
                <SkillCard name="nextjs" experience="2 years" img={nextjs} />
                <SkillCard name="firebase" experience="1 years" img={firebase} />
                <SkillCard name="postgresql" experience="1 years" img={postgresql} />
                <SkillCard name="tailwind" experience="1 years" img={tailwind} />
                <SkillCard name="bootstrap" experience="3 years" img={bootstrap} />
                <SkillCard name="docker" experience="1 years" img={docker} />
                <SkillCard name="git" experience="3 years" img={git} />
                <SkillCard name="express" experience="1 years" img={express} />
                <SkillCard name="gitlab" experience="1 years" img={gitlab} />
                <SkillCard name="github" experience="2 years" img={github} />
                <SkillCard name="linux" experience="4 years" img={linux} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}