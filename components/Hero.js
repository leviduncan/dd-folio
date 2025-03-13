"use client";

import { motion } from "framer-motion";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import ContactButton from "./ContactButton";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center hero">
            <div className="glass p-3">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row gap-1 md:gap-3 ">
                    <span>Hello, I&apos;m</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                        Darrin Duncan
                    </span>
                    </div>
                </motion.h1>

                <motion.h3
                    className="mt-4 text-xl md:text-3xl font-medium text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    A FULLSTACK DEVELOPER
                </motion.h3>

                <motion.p
                    className="mt-6 text-md md:text-xl max-w-2xl text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    From Concept to Code: I deliver robust Full Stack applications, optimized for performance and user engagement. 
                </motion.p>

                <div className="flex justify-start">
                    <ContactButton icon={<FaGithubAlt />} linkUrl={`https://github.com/leviduncan`} />
                    <ContactButton icon={<FaLinkedin />} linkUrl={`https://www.linkedin.com/in/darrinduncan/`} />
                    <ContactButton icon={<PiReadCvLogoFill />} linkUrl={`/resume.pdf`} />
                </div>
            </div>
        </section>
    );
}
