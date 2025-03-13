import { motion } from "framer-motion";

const ContactButton = ({ icon, linkUrl }) => {
    return (
        <>
            <motion.a
                href={linkUrl} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-block bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 p-6 rounded-xl shadow-md outline-1 outline-gray-700 text-white text-lg font-medium transition-all m-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            >
                {icon}
            </motion.a>
        </>
    )
}

export default ContactButton