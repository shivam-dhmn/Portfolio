"use client";

import { ArrowRight, Send } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gray-900 pb-3">
      <div className="mx-auto max-w-7xl bg-gray-900">
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-[#0C1220]
            p-8
            transition-all
            duration-500
            hover:border-blue-500/40
          "
        >
          {/* Background Glow */}

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left Side */}

            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30" />

                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    shadow-lg
                  "
                >
                  <Send className="h-8 w-8 text-white" />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Let's Build Something Great Together
                </h2>

                <p className="mt-3 max-w-2xl text-zinc-400 leading-7">
                  Have a project in mind or want to work together? Let's create
                  something amazing with modern web technologies.
                </p>
              </div>
            </div>

            {/* Button */}

            <button
              className="
                flex
                items-center
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
              "
            >
              Get In Touch
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
