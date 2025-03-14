"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-gray-950/80 bg-opacity-50 backdrop-blur-sm py-4 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <div className="text-lg font-bold text-gray-800 dark:text-gray-200">Darrin.</div>
          </Link>
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <Link href="#about">
                <div className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">About</div>
              </Link>
            </li>
            <li>
              <Link href="#experience">
                <div className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Experience</div>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <div className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Projects</div>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <div className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Contact</div>
              </Link>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-full cursor-pointer" onClick={toggleMenu}>
            <span className="block w-4 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-transform mb-1"></span>
            <span className="block w-4 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-transform mb-1"></span>
            <span className="block w-4 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-transform"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* Semi-transparent overlay */}
        <div className="fixed inset-0 bg-black/50" onClick={toggleMenu}></div>

        {/* Sliding Menu Panel */}
        <div className={`fixed inset-y-0 left-0 w-3/4 bg-white dark:bg-gray-900 px-6 py-6 transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">Menu</span>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200" onClick={toggleMenu}>
              <span className="sr-only">Close menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6">
            <div className="space-y-4">
              <Link href="#about" className="block text-lg font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition" onClick={toggleMenu}>About</Link>
              <Link href="#projects" className="block text-lg font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition" onClick={toggleMenu}>Experience</Link>
              <Link href="#projects" className="block text-lg font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition" onClick={toggleMenu}>Projects</Link>
              <Link href="#contact" className="block text-lg font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
