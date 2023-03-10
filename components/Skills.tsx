import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = { skills: SkillType[] };

function Skills({ skills }: Props) {
    return (
        <div className="min-h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="sectionHeading">Skills</h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                hover over a skill for confidence level
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-5">
                {skills?.slice(0, skills.length / 2).map((skill) => {
                    return (
                        <Skill
                            key={skill._id}
                            skill={skill}
                            directionLeft={true}
                        />
                    );
                })}
                {skills
                    ?.slice(skills.length / 2, skills.length)
                    .map((skill) => {
                        return <Skill key={skill._id} skill={skill} />;
                    })}
            </div>
        </div>
    );
}

export default Skills;
