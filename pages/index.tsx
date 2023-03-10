import { ArrowUpIcon } from "@heroicons/react/24/solid";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfos } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll scroll-smooth overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-400 scrollbar-thumb-white  z-0">
            <Head>
                <title>
                    {pageInfo?.name}
                    &apos;s Portfolio
                </title>
            </Head>

            {/* Header */}
            <Header socials={socials} />
            {/* Hero */}
            <section id="hero" className="snap-center">
                <Hero pageInfo={pageInfo} />
            </section>
            {/* About */}
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>
            {/* Experience */}
            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </section>
            {/* Skills */}
            <section id="skills" className="snap-center">
                <Skills skills={skills} />
            </section>
            {/* Projects */}
            <section id="projects" className="snap-center">
                <Projects projects={projects} />
            </section>
            {/* Contact Me */}
            <section id="contact" className="snap-center">
                <Contact pageInfo={pageInfo} />
            </section>
            <footer className="sticky bottom-8 sm:bottom-16 w-full filter grayscale hover:greyscale-0 flex justify-center z-20">
                <Link href="#hero">
                    <div className="rounded-full h-10 w-10 p-2 cursor-pointer bg-slate-400">
                        <ArrowUpIcon />
                    </div>
                </Link>
            </footer>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfos();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 100,
    };
};
