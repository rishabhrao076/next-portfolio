import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-22 lg:w-22 rounded-full bg-white p-3 flex flex-col justify-center"
            >
                <img
                    className=""
                    src={skill?.image ? urlFor(skill.image).url() : ""}
                    alt="tech-stack-image"
                />
            </motion.div>
            <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-22 lg:w-22 absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">
                        {skill.progress}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
