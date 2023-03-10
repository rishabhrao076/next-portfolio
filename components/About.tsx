import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <motion.h3
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
                className="sectionHeading"
            >
                About
            </motion.h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                src={urlFor(pageInfo?.profilePic).url()}
                className="-mb-20 mt-12 md:mb-0 flex-shrink-0 w-2/3 h-eqw rounded-xl object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                alt=""
            />
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                }}
                className="space-y-10 px-0 md:px-10"
            >
                <h4 className="text-3xl md:text-4xl font-semibold">About Me</h4>
                <p className="text-lg md:text-xl">
                    {pageInfo.backgroundInformation}
                </p>
            </motion.div>
        </div>
    );
}

export default About;
