import Reccomendations from "./Reccomendations";
import { motion } from "framer-motion";

const LinkedInRecommendations = () => {
   return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>LinkedIn Recommendations</motion.h2>
        <motion.p 
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          Over the years, I have had the privilege of working with some incredible professionals who have shared their experiences and feedback. Here are some of the recommendations from my LinkedIn profile, highlighting my skills, work ethic, and the impact I've had on various projects and teams.
        </motion.p>
        <motion.a>
            <a href="https://www.linkedin.com/in/darrinduncan/" target="_blank" rel="noreferrer" className="text-cyan-500 hover:underline">View what others are saying on LinkedIn</a>
        </motion.a>
        <Reccomendations />
    </section>
  );
};

export default LinkedInRecommendations;
