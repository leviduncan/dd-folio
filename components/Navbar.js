"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 bg-opacity-50 backdrop-blur-sm py-4">
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
        <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-full cursor-pointer" onClick={toggleMenu}>
          <span className="block w-4 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-transform mb-1"></span>
          <span className="block w-4 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-transform mb-1"></span>
          <span className="block w-4 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-transform"></span>
        </button>
      </div>
    </nav>
    {/* Mobile menu, show/hide based on menu open state.  */}
    <div className={`${!isOpen ? '' : 'hidden'} md:hidden`} role="dialog" aria-modal="true">
       {/* Background backdrop, show/hide based on slide-over state.  */}
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Darrin.</span>
          </a>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a href="#about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</a>
              <a href="#projects" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Projects</a>
              <a href="#contact" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contact</a>
            </div>
            <div className="py-6">
              <a href="#home" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}