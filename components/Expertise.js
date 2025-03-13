'use client';

import {
  FaAws,
  FaBootstrap,
  FaCloud,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNode,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import {
  SiAdobephotoshop,
  SiCss3,
  SiExpress,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiTypescript,
} from "react-icons/si";

import { FaSass } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

export const expertiseItems = [
  { id: 1, name: "React", icon: FaReact, category: "Frontend" },
  { id: 2, name: "JavaScript", icon: SiJavascript, category: "Frontend" },
  { id: 3, name: "TypeScript", icon: SiTypescript, category: "Frontend" },
  { id: 4, name: "HTML5", icon: FaHtml5, category: "Frontend" },
  { id: 5, name: "CSS3", icon: SiCss3, category: "Frontend" },
  { id: 6, name: "Sass", icon: FaSass, category: "Frontend" },
  { id: 7, name: "GitHub", icon: FaGithub, category: "Tools" },
  { id: 8, name: "NPM", icon: FaNpm, category: "Tools" },
  { id: 9, name: "API", icon: TbApi, category: "Backend" },
  { id: 10, name: "Node.js", icon: FaNode, category: "Backend" },
  { id: 11, name: "Express", icon: SiExpress, category: "Backend" },
  { id: 12, name: "MongoDB", icon: SiMongodb, category: "Database" },
  { id: 13, name: "MySQL", icon: SiMysql, category: "Database" },
  { id: 14, name: "PHP", icon: SiPhp, category: "Backend" },
  { id: 15, name: "AWS", icon: FaAws, category: "Cloud" },
  { id: 16, name: "Cloud", icon: FaCloud, category: "Cloud" },
  { id: 17, name: "Jira", icon: SiJira, category: "Tools" },
  { id: 18, name: "Bootstrap", icon: FaBootstrap, category: "Frontend" },
  { id: 19, name: "Figma", icon: FaFigma, category: "Design" },
  { id: 20, name: "Photoshop", icon: SiAdobephotoshop, category: "Design" },
];

export function ExpertiseSection() {
  const [skills] = useState(expertiseItems); // Use expertiseItems directly
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef(null); // Updated to useRef

  useEffect(() => {
    const intervalId = setInterval(() => {
        setOffset((prevOffset) => {
            if (prevOffset < -skills.length * 200) {
                return 0;
            }
            return prevOffset - 1;
        });
    }, 60); // Adjust the interval (in milliseconds) to control speed

    return () => clearInterval(intervalId);
  }, [skills]);

  return (
      <div className="carousel-container relative overflow-hidden w-full">
        <div
          ref={carouselRef}
          className="carousel flex transition-transform duration-500"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {[...skills, ...skills, ...skills].map((skill, idx) => (
            <div
              key={idx}
              className="skill-card mx-4 flex flex-col items-center justify-center"
            >
              <skill.icon size={50} className="m-3" />
              <p className="text-center text-gray-400 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
