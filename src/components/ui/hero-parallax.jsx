"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./dropdown-menu";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const jobPostings = [
    {
      title: "Software Engineer",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeAJM00Y8gjWWWEC4E2ao4BaHC4v9yPZYDwUbcUCIUJaDZfiw/viewform?usp=sf_link",
    },
    {
      title: "Data Scientist",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeAJM00Y8gjWWWEC4E2ao4BaHC4v9yPZYDwUbcUCIUJaDZfiw/viewform?usp=sf_link",
    },
    {
      title: "Devops Engineer",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeAJM00Y8gjWWWEC4E2ao4BaHC4v9yPZYDwUbcUCIUJaDZfiw/viewform?usp=sf_link",
    },
    {
      title: "UI/UX Designer",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeAJM00Y8gjWWWEC4E2ao4BaHC4v9yPZYDwUbcUCIUJaDZfiw/viewform?usp=sf_link",
    },
    {
      title: "Cyber Security Analyst",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfHTvWMlv88O45KmxNyTU08ZxUB31gfARKTUBgoh2bHqOAz3w/viewform?usp=sf_link",
    },
  ];

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        HRTechNest <br />
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
      <div className="mt-8 relative z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
              View Job Postings
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {jobPostings.map((job) => (
              <DropdownMenuItem
                key={job.title}
                onClick={() => window.open(job.url, "_blank")}
              >
                {job.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
