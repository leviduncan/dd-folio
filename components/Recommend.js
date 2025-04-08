import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import RecommendCard from "./RecommendCard";
const WP_URL = process.env.NEXT_PUBLIC_WP_URL;


function Recommend() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showMore, setShowMore] = useState([]);

  const handleShowMore = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

        useEffect(() => {
            const fetchPosts = async () => {
                try {
                    const response = await fetch(`${WP_URL}/wp-json/wp/v2/recommendation/`);
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
        }, [])
    return (
        <section id="recommend" className="py-20 px-6 max-w-5xl mx-auto text-center">
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
              Over the years, I have had the privilege of working with some incredible professionals who have shared their experiences and feedback. Here are some of the recommendations from my LinkedIn profile, highlighting my skills, work ethic, and the impact I&apos;ve had on various projects and teams.
            </motion.p>
            <motion.div>
                <a href="https://www.linkedin.com/in/darrinduncan/" target="_blank" rel="noreferrer" className="text-cyan-500 hover:underline">View what others are saying on LinkedIn</a>
            </motion.div>
            {
                posts.sort((a, b) => a.acf.fullname.localeCompare(b.acf.fullname)).map((item, index) => (
                    <RecommendCard key={index} item={item}/>
                ))
            }
        </section>
      );
}

export default Recommend