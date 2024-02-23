import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import goflashdealsImg from "@/public/goflashdeals.png";
import kuromiImg from "@/public/kuromi.png";
import youniImg from "@/public/youni.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Front-end Developer",
    location: "Beijing, China",
    description:
      "Engage with clients to gather requirements and develop relevant projects in collaboration with other colleagues.",
    icon: React.createElement(LuGraduationCap),
    date: "2015-2018",
  },
  {
    title: "Senior Front-End Developer",
    location: "Beijing, China",
    description:
      "I worked as a front-end developer and Leader to develop company logistics system. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Beijing, China",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Goflashdeals",
    description: "This is a discount website from the United States.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NestJs"],
    imageUrl: goflashdealsImg,
  },
  {
    title: "kuromi",
    description: "This is an immigration consulting website from Canada.",
    tags: ["TypeScript", "Next.js", "NestJs", "Ant Design Pro"],
    imageUrl: kuromiImg,
  },
  {
    title: "youni",
    description: "This is a campus social platform from Canada.",
    tags: ["Vue.js", "TypeScript", "Next.js", "NestJs"],
    imageUrl: youniImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Nuxt.js",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
