import { useState } from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

function RecommendCard({ item }) {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="mt-8 grid grid-cols-1 gap-6">
            <motion.div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md outline-1 outline-gray-700 transition-transform duration-300 hover:shadow-lg p-6 text-start flex flex-col md:flex-row"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}>
                <div className="flex justify-between items-center md:items-start w-full md:w-2/12">
                    <Image src={item.acf.avatar} alt={`${item.acf.fullname}'s avatar`} className="avatar rounded-full border-2 border-white" width={100} height={100} />
                    <h3 className="text-xl font-semibold flex md:hidden">{item.acf.fullname}</h3>
                </div>
                <div className="w-full md:w-10/12">
                    <h3 className="text-xl font-semibold hidden md:flex">{item.acf.fullname}</h3>
                    <h4 className="text-md font-medium mt-2 text-gray-600 dark:text-gray-300">{item.acf.title}</h4>
                    <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{item.acf.subtitle}</p>
                    <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">{item.acf.content}</p>
                    <button onClick={() => setShowMore(!showMore)} className="text-teal-500 hover:text-teal-700 mt-4 inline-block text-sm">
                        {showMore ? "Show less" : "Show more"}
                    </button>
                    {showMore &&
                        <motion.p className="text-sm mt-4 text-gray-600 dark:text-gray-300 transition-transform duration-300 " transition={{ duration: 0.8 }}>{item.acf.content2}</motion.p>
                    }
                </div>


            </motion.div>
        </div>
    )
}

export default RecommendCard