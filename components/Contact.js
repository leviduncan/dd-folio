"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-5xl mx-auto text-center contact"
      style={{ opacity: isInView ? 1 : 0, transition: "opacity 1s ease" }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I&apos;d love to hear from you! Whether you&apos;re interested in collaborating, have questions, or just want to say hi, feel free to reach out.
      </motion.p>

      <motion.div
        className="mt-8 grid grid-cols-1 gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Contact Form 
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <form onSubmit={sendEmail} className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="mt-4 p-3 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-teal-500 dark:bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>*/}

        {/* Contact Details */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md outline-1 outline-gray-700">
          <ul className="mt-4 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Email: <a href="mailto:darrin@darrinduncan.com" className="text-teal-500 hover:text-teal-700">darrin@darrinduncan.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/darrinduncan/" target="_blank" className="text-teal-500 hover:text-teal-700">https://www.linkedin.com/in/darrinduncan/</a></li>
            <li>GitHub: <a href="https://github.com/leviduncan" target="_blank" className="text-teal-500 hover:text-teal-700">https://github.com/leviduncan</a></li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}