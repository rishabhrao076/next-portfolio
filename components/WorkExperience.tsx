import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
    experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
    return (
        <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="sectionHeading">Experience</h3>
            <div className="w-full flex space-x-5 mt-36 md:max-h-auto overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-thumb-rounded scrollbar-track-gray-400 scrollbar-thumb-white">
                {experiences?.map((experience) => {
                    return (
                        <ExperienceCard
                            key={experience._id}
                            experience={experience}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default WorkExperience;
