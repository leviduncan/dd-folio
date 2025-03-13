"use client";

import { motion } from "framer-motion";
import data from '@/app/work'
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="">
      {/* Featured Work Section */}
      <section
        id="projects"
        className="py-20 px-6 max-w-5xl mx-auto text-center projects"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Work
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Here are some of my favorite projects, where I’ve combined modern design principles, simplicity, and a passion for delivering value to create engaging and effective user experiences.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            data.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))
          }
        </div>
      </section>
    </div>
  );
}
