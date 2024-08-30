import React from "react";
import ProjectItem from "./ProjectItem";
import schoolImg from "../images/school.png";
import freelancerImg from "../images/freelancer.jpg";
import websiteImg from "../images/website.jpg";
import webdevImg from "../images/webdev.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-[#001b5e] font-[Raleway]">
        Projects
      </h1>

      <p className="text-center py-8 font-[Raleway]">
        Welcome to my portfolio, where innovation meets the digital realm! I am
        a passionate and dedicated web developer, constantly pushing the
        boundaries of creativity and functionality to craft captivating online
        experiences. With a blend of technical prowess and artistic finesse, I
        specialize in bringing visions to life through pixel-perfect designs,
        seamless user interactions, and efficient code. As you explore my
        projects, you'll discover a fusion of cutting-edge technologies and
        elegant aesthetics, all meticulously tailored to meet the unique needs
        of each client. Join me on this digital journey, where every line of
        code is an expression of my commitment to transforming ideas into
        captivating web realities.
      </p>

      <div>
        {" "}
        <div className="grid sm:grid-cols-2 gap-14">
          <a href="https://brochow-school.netlify.app/" target="blank">
            <ProjectItem img={schoolImg} title="School" />
          </a>
          <a href="https://talknative.pl" target="blank">
            {" "}
            <ProjectItem img={freelancerImg} title="Freelancer" />
          </a>
          <a href="https://patrickosullivan.dev" target="blank">
            <ProjectItem img={webdevImg} title="Web Developer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
