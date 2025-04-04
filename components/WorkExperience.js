import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import experience from '../app/experience';
import WorkExperienceCard from './WorkExperienceCard';
const WP_URL = process.env.NEXT_PUBLIC_WP_URL;

const INITIAL_COUNT = 3;

function WorkExperience() {
    const [isInView, setIsInView] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const visibleExperience = showAll ? experience : experience.slice(0, INITIAL_COUNT);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${WP_URL}/wp-json/wp/v2/posts`);
                const data = await response.json();
                setPosts(data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();

    //   -----------------------------------------------------------  

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
    }, [])

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
                Work Experience
            </motion.h2>
            <div className="pt-6 max-w-5xl mx-auto text-center">
                {visibleExperience.map((exp, idx) => (
                    <motion.div 
                        key={idx}
                        className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <WorkExperienceCard exp={exp} />
                    </motion.div>
                ))}

                {/* Show More / Show Less Button */}
                {experience.length > INITIAL_COUNT && (
                    <div className="mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-cyan-500 hover:underline"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}

                <motion.div className="mt-6">
                    <a href="https://www.linkedin.com/in/darrinduncan/" target="_blank" rel="noreferrer" className="text-cyan-500 hover:underline">
                        View more on LinkedIn
                    </a> 
                    {" | "} 
                    <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-cyan-500 hover:underline">
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default WorkExperience;
