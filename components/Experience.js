import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard';
import experience from '../app/experience';

function Experience() {
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

        const section = document.getElementById("experience");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section
        id="experience"
        className="py-20 px-6 max-w-5xl mx-auto experience"
        style={{ opacity: isInView ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <div className="pt-6 max-w-5xl mx-auto text-center">
            {experience.map((exp, idx) => (
                <motion.p key={idx}
                    className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <ExperienceCard exp={exp} />
                </motion.p>
            ))}
        </div>
        </section>
    );
}

export default Experience;