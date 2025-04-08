"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import CursorFollower from "@/utils/follower";
import Experience from "@/components/Experience";
import Recommend from "@/components/Recommend";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Recommend />
      <Contact />
      <CursorFollower />
    </main>
  );
}