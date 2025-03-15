"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { IoIosContact } from "react-icons/io";
import { GiPointySword } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <motion.div className="fixed bottom-0 flex w-full px-4 p-6 z-50"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.6 }}>
      <nav className="w-md mx-auto bg-gray-950/80 bg-opacity-50 backdrop-blur-sm p-4 outline-1 outline-gray-700 rounded-full shadow-lg shadow-cyan-500/20 overflow-hidden">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <ul className="flex items-center gap-10 justify-between">
            <li>
              <Link href="#about">
                <div className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-cyan-500 transition-colors uppercase flex flex-col items-center">
                  <IoIosContact className="flex md:hidden" />
                  <span className="sm:hidden md:flex text-md">About</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#experience">
                <div className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-cyan-500 transition-colors uppercase flex flex-col items-center">
                <GiPointySword className="flex md:hidden" />
                  <span className="sm:hidden md:flex text-md">Experience</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <div className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-cyan-500 transition-colors uppercase flex flex-col items-center">
                <IoRocketSharp className="flex md:hidden" />
                  <span className="sm:hidden md:flex text-md">Projects</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <div className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-cyan-500 transition-colors uppercase flex flex-col items-center">
                <MdPermContactCalendar className="flex md:hidden" />
                  <span className="sm:hidden md:flex text-md">Contact</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}
