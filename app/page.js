"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";1
import LinkedInRecommendations from "@/components/LinkedInRecommendations";
import CursorFollower from "@/utils/follower";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <LinkedInRecommendations />
      <Contact />
      <CursorFollower />
    </main>
  );
}