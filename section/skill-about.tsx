"use client";
import { motion } from "framer-motion";
import { Download, MapPin, Briefcase, CircleCheckBig } from "lucide-react";

export default function About() {
  const skills = [
    {
      title: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "Server Actions"],
    },
    {
      title: "Database",
      items: ["MongoDB", "Prisma", "Mongoose"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "ESLint", "Prettier"],
    },
    {
      title: "Deployment",
      items: ["Vercel", "Netlify", "MongoDB Atlas"],
    },
  ];

  return (
    <section id="about" className="bg-gray-900 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true,
              amount: 0.2
             }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-800 bg-[#0B0F19] p-5 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400 sm:mb-10 sm:text-sm sm:tracking-[0.35em]">
                Technical Skills
              </h2>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {skills.map((category) => (
                <div key={category.title} className="space-y-5">
                  <h3 className="font-semibold text-white">{category.title}</h3>

                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-zinc-700 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true,
                amount: 0.2
               }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-zinc-800 bg-[#0B0F19] p-5 sm:p-8 scrollbar-none"
            >
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400 sm:text-sm sm:tracking-[0.35em]">
                About Me
              </h2>

              <h3 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Hi, I&apos;m <span className="text-blue-500">Shivam</span>
              </h3>

              <p className="mb-5 leading-8 text-zinc-400">
                I&apos;m a passionate Frontend Developer who enjoys building
                fast, scalable and user-friendly web applications. I love
                turning ideas into real products using modern technologies.
              </p>

              <p className="leading-8 text-zinc-400">
                My focus is writing clean, maintainable code while continuously
                learning new technologies and improving my development workflow.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <MapPin className="mb-2 text-green-400" size={18} />

                  <p className="text-xs text-zinc-500">Location</p>

                  <p className="mt-1 font-medium text-white">India</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <Briefcase className="mb-2 text-blue-400" size={18} />

                  <p className="text-xs text-zinc-500">Experience</p>

                  <p className="mt-1 font-medium text-white">1+ Years</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <CircleCheckBig className="mb-2 text-green-400" size={18} />

                  <p className="text-xs text-zinc-500">Availability</p>

                  <p className="mt-1 font-medium text-white">Open for Work</p>
                </div>
              </div>

              <button className="mt-8 cursor-not-allowed opacity-40 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-medium text-white transition hover:bg-blue-700">
                Download Resume
                <Download size={18} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
