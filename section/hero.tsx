"use client";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animations

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-gray-900 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.15,
          }}
          className="max-w-2xl"
        >
          <motion.h1
            variants={fadeUp}
            transition={{
              duration: 0.6,
            }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Building Fast, Modern & Scalable Web Applications
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{
              duration: 0.6,
            }}
            className="mt-4 text-base leading-8 text-gray-300 sm:text-lg"
          >
            Crafting high-performance user interfaces with a focus on precision
            and scalability. I bridge the gap between design and engineering to
            build digital experiences.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base text-white sm:text-lg"
          >
            Available for freelance work
          </motion.p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/919896508141?text=Hi%20Shivam,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-white opacity-40">
              <span>Download Resume</span>
              <Download className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="relative flex w-full max-w-xl items-center justify-center "
        >
          <div className="absolute h-[260px] w-[260px] rounded-full bg-blue-400/15 blur-[80px] sm:h-[350px] sm:w-[450px]" />
          <Image
          
            src="/images/laptop.png"
            alt="Laptop Image"
            width={700}
            height={440}
            priority
            className="relative z-10 w-full rounded-lg shadow-lg "
          />
        </motion.div>
      </div>
    </section>
  );
}
