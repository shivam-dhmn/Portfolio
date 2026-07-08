"use client";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-gray-900 px-4 pb-6 sm:px-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="mx-auto max-w-7xl bg-gray-900"
      >
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-zinc-800
            bg-[#0C1220]
            p-5
            sm:p-8
            transition-all
            duration-500
            hover:border-blue-500/40
          "
        >
          {/* Background Glow */}

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left Side */}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30" />

                <motion.div
                  whileHover={{
                    rotate: -8,
                    scale: 1.1,
                  }}
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    sm:h-20
                    sm:w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    shadow-lg
                  "
                >
                  <Send className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                </motion.div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Let&apos;s Build Something Great Together
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                  Have a project in mind or want to work together? Let&apos;s
                  create something amazing with modern web technologies.
                </p>
              </div>
            </div>

            {/* Button */}

            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="https://wa.me/919896508141?text=Hi%20Shivam,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-blue-600
                px-8
                py-4
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-blue-700
                hover:shadow-[0_0_30px_rgba(37,99,235,0.45)]
                sm:w-auto
              "
            >
              Get In Touch
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
