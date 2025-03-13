"use client";

import { motion } from "framer-motion";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import ContactButton from "./ContactButton";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6 hero">
            <div className="glass p-6">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    HELLO, I&apos;M
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                        DARRIN DUNCAN
                    </span>
                </motion.h1>

                <motion.h2
                    className="mt-4 text-xl md:text-3xl font-medium px-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    A FULLSTACK DEVELOPER
                </motion.h2>

                <motion.p
                    className="mt-6 text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300 px-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    From Concept to Code: I deliver robust Full Stack applications, optimized for performance and user engagement.
                </motion.p>

                <div className="flex justify-center">
                    <ContactButton icon={<FaGithubAlt />} linkUrl={`https://github.com/leviduncan`} />
                    <ContactButton icon={<FaLinkedin />} linkUrl={`https://www.linkedin.com/in/darrinduncan/`} />
                    <ContactButton icon={<PiReadCvLogoFill />} linkUrl={`/resume.pdf`} />
                </div>
            </div>
        </section>
    );
}
