import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    return (
        <div className="h-screen relative flex flex-col justify-evenly text-left overflow-hidden md:flex-row max-w-full mx-auto items-center z-0">
            <h3 className="sectionHeading">Side Projects</h3>
            <motion.div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-thumb-rounded scrollbar-track-gray-400 scrollbar-thumb-white z-20 ">
                {projects?.map((project, i) => {
                    return (
                        <div
                            key={project._id}
                            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-20 pt-20 md:p-44 h-screen"
                        >
                            <img
                                className="max-w-[70%] max-h-[50%] max-w-screen-md-[300px] max-h-screen-md-[300px] drop-shadow-lg"
                                src={urlFor(project?.image).url()}
                                alt=""
                            />
                            <div>
                                <h4 className="font-bold text-center text-xl tracking-wide my-2">
                                    {project?.linkToBuild ? (
                                        <a
                                            href={project?.linkToBuild}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {project.title}
                                        </a>
                                    ) : (
                                        project.title
                                    )}
                                </h4>
                                <div className="flex items-center gap-4 justify-center my-2">
                                    {project?.technologies.map((technology) => {
                                        return (
                                            <img
                                                className="h-10 w-10"
                                                key={technology._id}
                                                src={urlFor(
                                                    technology?.image
                                                ).url()}
                                                alt=""
                                            />
                                        );
                                    })}
                                </div>
                                <p className="text-md text-center md:text-left">
                                    {project.summary}
                                </p>
                                <br />
                                <p className="text-center">
                                    {i + 1} / {projects.length}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
            <div className="w-full absolute top-[30%] bg-[#ffffff]/10 left-0 h-[500px] -skew-y-12"></div>
        </div>
    );
}

export default Projects;
