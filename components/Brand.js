import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from "next/link";

function Brand() {
    return (
        <motion.div
            className="flex brand fixed top-0 left-0 w-10 h-10 my-4 mx-6 z-50 justify-center items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Link href="/">
                <Image src="/images/logo.png" alt="Darrin Duncan Logo" width={40} height={40} />
            </Link>
        </motion.div>
    )
}

export default Brand