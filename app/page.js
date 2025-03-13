"use client";
 
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <main>
      <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
  );
}