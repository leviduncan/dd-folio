import { motion } from "framer-motion";

const ContactButton = ({ icon, linkUrl }) => {
    return (
        <>
            <motion.a
                href={linkUrl} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-block bg-gray-900 outline hover:bg-gray-600 text-white p-6 rounded-lg text-lg font-medium transition-all m-2"
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