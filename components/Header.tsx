import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
    socials: Social[];
};

function Header({ socials }: Props) {
    return (
        <motion.header
            initial={{
                y: -100,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                y: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1,
            }}
            className="sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 xl:items-center"
        >
            <div className="flex flex-row items-center">
                {socials.map((social) => {
                    return (
                        <SocialIcon
                            key={social._id}
                            url={social.url}
                            fgColor="gray"
                            bgColor="transparent"
                            target="__blank"
                        />
                    );
                })}
            </div>
            <Link href="#contact">
                <div className="flex flex-row items-center text-gray-300 cursor-pointer">
                    <SocialIcon
                        className="cursor-pointer"
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                        Contact me
                    </p>
                </div>
            </Link>
        </motion.header>
    );
}

export default Header;
