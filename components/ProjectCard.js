import { motion } from "framer-motion";
import Image from 'next/image'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function ProjectCard({ idx, project }) {
    return (
        <>
            {/* Project Card */}
            <motion.div key={idx}
                className="flex flex-row text-left items-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md outline-1 outline-gray-700 transition-transform duration-300 hover:scale-101 overflow-hidden "
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image 
                src={project.img} 
                alt={project.title} 
                width={320} 
                height={200} 
                className="w-1/3" 
                sizes="(max-width: 768px) 100vw, 320px"    
                />
                <div className="p-6 w-2/3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                        {project.content}
                    </p>
                    <div className="flex gap-4">
                    <a href={project.link} target="_blank" className="text-teal-500 hover:text-teal-700 mt-4 inline-block p-4 outline-1 outline-gray-700 rounded-md inner-icon">
                        <FaExternalLinkAlt />
                    </a>
                    <a href={project.github} target="_blank" className="text-teal-500 hover:text-teal-700 mt-4 inline-block p-4 outline-1 outline-gray-700 rounded-md inner-icon">
                        <FaSquareGithub />
                    </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectCard