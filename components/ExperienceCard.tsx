import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    experience: Experience;
};

function ExperienceCard({ experience }: Props) {
    return (
        <motion.article
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 100,
            }}
            className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[78vw] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-4 py-6 lg:mb-5 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
            {/* <div className="flex flex-col justify-center items-center w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] overflow-hidden bg-white"> */}
            <motion.img
                className="h-10 md:h-16 xl:h-20"
                src={
                    experience.companyImage
                        ? urlFor(experience?.companyImage).url()
                        : ""
                }
                alt="company-image"
            />
            {/* </div> */}
            <div className="px-0 md:px-10">
                <h4 className="text-2xl md:text-4xl font-light">
                    {experience.jobTitle}
                </h4>
                <p className="font-bold text-xl md:text-2xl mt-1">
                    {experience.company}
                </p>
                <div className="grid grid-cols-5 lg:grid-cols-8 gap-2 m-2">
                    {experience.technologies.map((technology) => {
                        return (
                            <div
                                key={technology._id}
                                className="h-10 w-10 md:h-20 md:w-20 rounded-full bg-white p-3 flex flex-col justify-center"
                            >
                                <img
                                    key={technology._id}
                                    className=""
                                    src={
                                        technology.image
                                            ? urlFor(technology?.image).url()
                                            : ""
                                    }
                                    alt=""
                                />
                            </div>
                        );
                    })}
                </div>
                <p className="uppercase text-sm lg:text-md py-5 text-gray-300">
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className="list-disc list-inside space-y-4 pb-4 ml-5 text-sm lg:text-md max-h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-400 scrollbar-thumb-white">
                    {experience?.points.map((point, i) => {
                        return <li key={i}>{point}</li>;
                    })}
                </ul>
            </div>
        </motion.article>
    );
}

export default ExperienceCard;
