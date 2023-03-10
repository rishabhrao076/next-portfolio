import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { wrap } from "popmotion";

type Props = {
    projects: Project[];
};

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? window.innerWidth : -window.innerWidth,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 15000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

function Projects({ projects }: Props) {
    const [[page, direction], setPage] = useState([0, 0]);

    const projectIndex = wrap(0, projects?.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="h-screen relative flex flex-col justify-evenly text-left overflow-hidden md:flex-row max-w-full mx-auto items-center z-0">
            <h3 className="sectionHeading">Side Projects</h3>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={projects[projectIndex]._id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    transition={{
                        x: { type: "spring", stiffness: 500, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center px-20 pt-20 md:p-44 h-screen"
                >
                    <img
                        className="max-w-[70%] max-h-[50%] max-w-screen-md-[300px] max-h-screen-md-[300px] drop-shadow-lg"
                        src={urlFor(projects[projectIndex]?.image).url()}
                        alt=""
                    />
                    <div>
                        <h4 className="font-bold text-center text-xl tracking-wide my-2">
                            {projects[projectIndex]?.linkToBuild ? (
                                <a
                                    href={projects[projectIndex]?.linkToBuild}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {projects[projectIndex].title}
                                </a>
                            ) : (
                                projects[projectIndex].title
                            )}
                        </h4>
                        <div className="flex items-center gap-4 justify-center my-2">
                            {projects[projectIndex]?.technologies.map(
                                (technology) => {
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
                                }
                            )}
                        </div>
                        <p className="text-md text-center md:text-left">
                            {projects[projectIndex].summary}
                        </p>
                        <br />
                        <p className="text-center">
                            {projectIndex + 1} / {projects.length}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div
                className="absolute z-40 top-[50%] right-3 lg:right-6 bg-white text-black rounded-full w-10 h-10 flex justify-center items-center select-none hover:cursor-pointer font-bold text-lg"
                onClick={() => paginate(1)}
            >
                {"‣"}
            </div>
            <div
                className="absolute z-40 top-[50%] left-3 bg-white text-black rounded-full w-10 h-10 flex justify-center items-center select-none hover:cursor-pointer font-bold text-lg transform -scale-[1]"
                onClick={() => paginate(-1)}
            >
                {"‣"}
            </div>
            <div className="w-full absolute top-[30%] bg-[#ffffff]/10 left-0 h-[500px] -skew-y-12"></div>
        </div>
    );
}

export default Projects;
