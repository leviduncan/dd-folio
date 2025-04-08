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
    <motion.div className="fixed bottom-0 flex w-full pb-10 z-50"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.6 }}>
      <nav className="w-full md:w-md mx-auto px-6 bg-teal-400/80 bg-opacity-50 backdrop-blur-sm p-4 outline-2 outline-white-700 rounded-full shadow-lg shadow-black-500/80 overflow-hidden">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <ul className="flex items-center gap-10 justify-between">
            <li>
              <Link href="#about">
                <div className="text-gray-800 dark:text-gray-700 hover:text-gray-900 dark:hover:bg-teal transition-colors uppercase flex flex-col items-center px-2 ">
                  <IoIosContact className="flex md:hidden" />
                  <span className="hidden sm:hidden md:flex text-md">About</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#experience">
                <div className="text-gray-800 dark:text-gray-700 hover:text-gray-900 dark:hover:text-teal transition-colors uppercase flex flex-col items-center">
                <GiPointySword className="flex md:hidden" />
                  <span className="hidden sm:hidden md:flex text-md">Experience</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <div className="text-gray-800 dark:text-gray-700 hover:text-gray-900 dark:hover:text-teal transition-colors uppercase flex flex-col items-center">
                <IoRocketSharp className="flex md:hidden" />
                  <span className="hidden sm:hidden md:flex text-md">Projects</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <div className="text-gray-800 dark:text-gray-700 hover:text-gray-900 dark:hover:text-teal transition-colors uppercase flex flex-col items-center">
                <MdPermContactCalendar className="flex md:hidden" />
                  <span className="hidden sm:hidden md:flex text-md">Contact</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}
