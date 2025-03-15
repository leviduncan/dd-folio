"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExpertiseSection } from "./Expertise";
import Image from "next/image";
import GitHubChart from "./GitHubChart";
import SlickCard from "./SlickCard";

export default function About() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto about"
      style={{ opacity: isInView ? 1 : 0, transition: "opacity 1s ease" }}
    >
      

      <motion.p
        className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex justify-between items-center md:items-start w-full md:w-2/12 mb-4">
        <Image src="../images/dd.png" className="avatar rounded-full border-2 border-white" width={100} height={100} alt="Darrin Duncan Photo" />
        <h2
        className="text-4xl md:text-5xl font-bold mb-4 flex md:hidden">
        About Me
      </h2>
        </div>
        <div className="w-full md:w-10/12 ">
        <h2
        className="text-4xl md:text-5xl font-bold mb-4 hidden md:flex">
        About Me
      </h2>
        I&apos;m Darrin Duncan, a Full Stack Developer with 8+ years of experience crafting responsive, scalable web applications. My expertise spans diverse environments, from large corporations to established mid-sized and smaller companies, where I&apos;ve honed my skills in JavaScript, React, and Node.js. My focus is on delivering measurable results through data-driven design and robust engineering, consistently driving improvements in user engagement and conversion rates. I prioritize user experience and WCAG compliance, building web applications that are both functional and accessible. I excel in collaborative environments and am committed to delivering high-quality, user-centric, and inclusive digital experiences.
        </div>
      </motion.p>

      <motion.div
        className="mt-8 flex justify-center items-center gap-6 flex-wrap"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
         <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md outline-1 outline-gray-700 w-full">
          <h3 className="text-lg font-semibold">Tech-stack</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
          Leveraging industry-leading technologies to create seamless, interactive, and visually stunning web applications.
          </p>
          <ExpertiseSection />
        </div>
        </motion.div>

    </section>
  );
}
