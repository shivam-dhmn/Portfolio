"use client";
import { motion } from "framer-motion";

const languages = [
  { value: "React.js" },
  { value: "Next.js" },
  { value: "TypeScript" },
  { value: "JavaScript" },
  { value: "Tailwind CSS" },
  { value: "MongoDB" },
  { value: "Prisma" },
  { value: "Git" },
  { value: "Github" },
  { value: "Vercel" },
];

const Technologies = () => {
  return (
    <section
      id="skills"
      className="flex flex-wrap justify-center gap-3 border-y border-gray-700 bg-gray-900 px-4 py-8 sm:gap-4 sm:px-6 sm:py-10"
    >
      {languages.map((lang, index) => (
        <div>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8 + index * 0.07,
            }}
            key={lang.value}
            className="min-w-[96px] rounded-3xl border border-transparent bg-gray-800 px-4 py-3 text-center text-sm text-white transition hover:border-blue-400 sm:min-w-[110px]"
          >
            {lang.value}
          </motion.p>
        </div>
      ))}
    </section>
  );
};

export default Technologies;
