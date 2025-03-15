import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

export const linkedin_recommendations = [
  {
    name: "Brian Cherry",
    title: "🚀 Senior Front-End Developer | UI/UX Engineer | Digital Experience Strategist | Branding & Motion Design",
    sub: "Brian was senior to Darrin but didn't manage Darrin directly",
    recommendation: "Darrin is an exceptional front-end developer with a keen eye for detail and a deep understanding of modern web technologies. His expertise in HTML, CSS, and JavaScript, combined with his ability to translate designs from Figma into pixel-perfect, responsive, cross-browser compatible code, has been invaluable to our team at Nutrisystem. Beyond his technical skills, Darrin's collaborative nature and clear communication have made him a trusted partner for designers, project managers, and fellow developers.",
    more: "His ability to optimize web assets, enhance UI components, and contribute to seamless A/B testing has played a key role in improving our web performance and user experience. Darrin's dedication to quality, problem-solving mindset, and commitment to delivering exceptional work make him a standout front-end developer. He would be a tremendous asset to any team looking for a talented and reliable professional.",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQHf3swMRkccLA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517707566927?e=1747267200&v=beta&t=T8by_3J_EVgqL3RGVB09qN-t_NYeDol65AGFBh89ZBo"
  },
  {
    name: "Miguel Ramos",
    title: "Front End Developer at Nutrisystem🔹 JavaScript | Node | React | Vue | HTML | CSS | Sass | Less | WordPress | Shopify🔹Commercial Real Estate Investor",
    sub: "Darrin was senior to Miguel but didn't manage Miguel directly",
    recommendation: "I've worked with Darrin for over a year now and I'm very lucky to be around such a high quality developer and amazing person. Darrin is always available to assist with difficult problems and gets me thinking about issues in a different way. He is constantly expanding his knowledge and improving processes while leading the team to maintain better development practices. I have learned a lot from Darrin, he is a great collaborator and invaluable team member.",
    more: "",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQElbpVbxW9xtA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516305909095?e=1747267200&v=beta&t=66vkXGuvDLIF40RG-n7N7d3-5qm1tamuTP97C-rZS3Y"
  },
  {
    name: "Andrew Borzillo",
    title: "Senior Front End Web Developer at Nutrisystem",
    sub: "Andrew worked with Darrin on the same team",
    recommendation: "I am thrilled to recommend Darrin Duncan. Having worked alongside him, I can confidently say that his passion for learning and teaching is truly inspiring. Darrin excels in HTML, CSS, and JavaScript, consistently delivering responsive builds using Bootstrap that demonstrate both his technical skills and his keen eye for design.What sets Darrin apart is his genuine desire to help others. He is always willing to share his knowledge, making complex concepts accessible and engaging for those around him.",
    more: "His enthusiasm for technology is infectious, especially as he explores areas like cloud computing, multicloud strategies, DevOps, AWS, and React. Darrin is not just a talented developer; he's also a joy to work with. His positive attitude and unwavering good spirits create an uplifting environment for our team. I have no doubt that he will achieve his goals in multicloud specialization and continue to make a significant impact wherever he goes.I wholeheartedly recommend Darrin for any opportunity that allows him to leverage his skills and passion for technology!",
    avatar: "https://media.licdn.com/dms/image/v2/C4E03AQHxvAeH8TEM6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1596235976146?e=1747267200&v=beta&t=4OE9aST8rKb8YU-ZQpdUC2dFiekukFBk3uuqkOnBdQE"
  },
  {
    name: "Kevin Duncan",
    title: "Business Transformation and Program Implementation",
    sub: "Kevin was Darrin's client",
    recommendation: "I had the pleasure of working with Darrin Duncan, who developed a fantastic website for my company, StarrMark Solutions LLC, specializing in Agile Program Management for the GovCon space. From the start, Darrin demonstrated a deep understanding of both design and functionality, creating a sleek, modern website that not only looks professional but is highly optimized for search engines. Darrin also ensured the site was fast, responsive, and easy to navigate, which has been crucial for maintaining a strong online presence.",
    more: "Beyond the initial development, Darrin has been incredibly supportive, always available to answer my questions and provide updates or improvements when needed.Thanks to Darrin's expertise, StarrMark Solutions has a polished, user-friendly site that effectively communicates our services to potential clients. If you're looking for a Full Stack Developer who is reliable, detail-oriented, and committed to delivering high-quality results, I highly recommend Darrin Duncan for any web development project.",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQFexC4xqHdd6w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1563073594040?e=1747267200&v=beta&t=Lq3g3tR8VHKnMt0siY86BpLTbeLXZqpWH64aDhkf_DE"
  },
  {
    name: "Larry Puleo",
    title: "Executing strategic projects. Getting results and making things happen",
    sub: "Larry was senior to Darrin but didn't manage Darrin directly",
    recommendation: "Mr. Duncan is a true gentlemen and someone I had the very fortunate opportunity to have on one of my project teams. Darrin is an enthusiastic pro focused on delivering creative options and results at exceptional levels of service to his clients. Darrin demonstrates the power to inspire, motivate, and positively influence people in their professional and personal lives and is one of the few people I know who practices what he preaches regarding work and family balance. ",
    more: "He is devoted to his family and aspires to assist young children with advancing their computer skills in order to elevate themselves from an educational and societal perspective. This world could use a few more Darrin Duncan's. Feel free to call me at 570-357-0225 or email me at larry.puleo@comcast.net if you have any questions or would like more information regarding Mr. Duncan.",
    avatar: "https://media.licdn.com/dms/image/v2/C4E03AQEEYzPMatKqUg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516198669350?e=1747267200&v=beta&t=FNeIJuIBr7kJjUq7KpZa2IlFDH8YQlz8nUBRnHCY35A"
  }
];

function Reccomendations() {
  const [showMore, setShowMore] = useState([]);

  const handleShowMore = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <div className="mt-8 grid grid-cols-1 gap-6">
      {linkedin_recommendations.map((rec, idx) => (
        <motion.div key={idx} className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md outline-1 outline-gray-700 transition-transform duration-300 hover:shadow-lg p-6 text-start flex flex-col md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <div className="w-1/6">
            <Image src={rec.avatar} alt={`${rec.name}'s avatar`} className="avatar rounded-full border-2 border-white" width={100} height={100} />
          </div>
          <div className="w-5/6">
            <h3 className="text-xl font-semibold">{rec.name}</h3>
            <h4 className="text-md font-medium mt-2 text-gray-600 dark:text-gray-300">{rec.title}</h4>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{rec.sub}</p>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">{rec.recommendation}</p>
            <button onClick={() => handleShowMore(idx)} className="text-teal-500 hover:text-teal-700 mt-4 inline-block text-sm">
              {showMore[idx] ? "Show less" : "Show more"}
            </button>
            {showMore[idx] && 
              <motion.p className="text-sm mt-4 text-gray-600 dark:text-gray-300 transition-transform duration-300 " transition={{ duration: 0.8 }}>{rec.more}</motion.p>
            }
            {/* <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">{rec.more}</p> */}
          </div>


        </motion.div>
      ))}
    </div>
  );
}

export default Reccomendations;