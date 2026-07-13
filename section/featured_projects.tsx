"use client";
import { motion } from "framer-motion";

import { BarChart3, Check, CircleDollarSign, Search } from "lucide-react";

const projects = [
  {
    title: "Living Expense",
    description:
      "A smart expense tracking application for roommates, friends and groups. Split bills, track expenses, set budgets and visualize spending.",
    features: [
      "Real-time expense tracking",
      "Shared rooms & friends management",
      "Turn-based expense settlement",
      "Analytics & monthly insights",
      "Responsive and modern UI/UX",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
    ],
    accent: "blue",
    preview: "expense",
  },
  {
    title: "TuitionStar",
    description:
      "A platform connecting students with verified tutors and institutes. Students can find tutors, book classes and manage their learning.",
    features: [
      "Student & Tutor dashboard",
      "Booking & class management",
      "Secure authentication & authorization",
      "Clean and interactive UI",
      "Fully responsive design",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    accent: "violet",
    preview: "tuition",
  },
] as const;

// Animation
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

function ExpensePreview() {
  return (
    <div className="flex h-[252px] w-full overflow-hidden rounded-lg border border-slate-700 bg-gray-900 text-[8px] text-slate-200 shadow-2xl max-[480px]:h-[200px]">
      <aside className="w-[22%] border-r border-[#182334] bg-[#0b111c] px-2 py-4 max-[480px]:hidden">
        <div className="mb-[18px] flex items-center gap-1 whitespace-nowrap font-bold text-slate-200 [&>svg]:text-blue-500">
          <CircleDollarSign size={16} /> Living Expense
        </div>
        {["Dashboard", "Expenses", "Analytics", "Budgets", "Rooms"].map(
          (item, index) => (
            <div
              className={`mb-[3px] flex items-center gap-1.5 rounded-[3px] p-1.5 ${index === 0 ? "bg-[#10213a] text-blue-400" : "text-slate-500"}`}
              key={item}
            >
              {index === 0 ? (
                <BarChart3 size={12} />
              ) : (
                <span className="size-1 rounded-full bg-slate-500" />
              )}
              {item}
            </div>
          ),
        )}
      </aside>
      <div className="flex-1 px-3 py-4">
        <div className="flex justify-between [&_small]:mt-[3px] [&_small]:block [&_small]:text-slate-500">
          <div>
            <b className="block text-[11px] text-white">Hello, Shivam</b>
            <small>Welcome back to your dashboard</small>
          </div>
          <small>June 2026</small>
        </div>
        <div className="mt-[15px] grid grid-cols-4 gap-1.5">
          {["Total Balance", "This Month", "Total Savings", "Rooms"].map(
            (label, i) => (
              <div
                className="rounded-[5px] border border-[#121d2b] bg-[#0a111c] p-[7px] [&>*]:block [&_b]:my-1 [&_b]:text-[10px] [&_b]:text-slate-200"
                key={label}
              >
                <small className="text-[#77849a]">{label}</small>
                <b>{i === 3 ? "4" : ["₹24,668", "₹8,452", "₹12,810"][i]}</b>
                <i className="text-[6px] not-italic text-emerald-400">+8.4%</i>
              </div>
            ),
          )}
        </div>
        <div className="mt-2 grid h-28 grid-cols-[1.6fr_1fr] gap-[7px] max-[480px]:h-[90px] max-[480px]:grid-cols-1">
          <div className="rounded-[5px] border border-[#121d2b] bg-[#080f19] p-[9px]">
            <small className="font-semibold text-slate-400">
              Expense Overview
            </small>
            <svg
              className="mt-3 w-full"
              viewBox="0 0 220 75"
              aria-hidden="true"
            >
              <path
                className="fill-none stroke-blue-500 [stroke-width:2]"
                d="M3 66 C28 63 30 42 54 47 S84 60 101 39 S125 51 143 20 S171 47 187 25 S205 31 218 8"
              />
            </svg>
          </div>
          <div className="rounded-[5px] border border-[#121d2b] bg-[#080f19] p-[9px] max-[480px]:hidden">
            <small className="font-semibold text-slate-400">
              Category Breakdown
            </small>
            <div className="relative mx-auto my-4 size-[58px] rounded-full bg-[conic-gradient(#3b82f6_0_30%,#8b5cf6_30%_57%,#fb7185_57%_80%,#64748b_80%)] after:absolute after:inset-[11px] after:rounded-full after:bg-[#080f19]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TuitionPreview() {
  return (
    <div className="relative h-[252px] w-full overflow-hidden rounded-lg border border-slate-700 bg-[linear-gradient(145deg,#0c1320,#050910)] px-[18px] text-slate-200 shadow-2xl max-[480px]:h-[200px] max-[480px]:px-2.5">
      <header className="flex h-[42px] items-center gap-6 text-[7px] text-slate-400 [&>span]:max-[800px]:hidden">
        <b className="mr-auto text-[9px] text-white">● TuitionStar</b>
        <span>Find Tutors</span>
        <span>Become a Tutor</span>
        <span>Dashboard</span>
        <small className="ml-auto">Sign in</small>
      </header>
      <div className="grid h-40 grid-cols-[1.35fr_.85fr] items-center max-[480px]:grid-cols-1">
        <div>
          <h3 className="text-xl leading-[1.08] font-bold text-white">
            Find the Best Tutors
            <br />
            Near You
          </h3>
          <p className="mt-2.5 text-[7px] leading-relaxed text-slate-400">
            Connect with verified tutors and institutes.
            <br />
            Learn, grow and achieve your goals.
          </p>
          <div className="mt-3.5 flex h-[25px] w-[290px] max-[480px]:w-full [&>span]:flex [&>span]:flex-1 [&>span]:items-center [&>span]:gap-1 [&>span]:border-r [&>span]:border-slate-200 [&>span]:bg-white [&>span]:px-2 [&>span]:text-[6px] [&>span]:text-slate-500">
            <span className="rounded-l">
              <Search size={10} /> Search for a subject...
            </span>
            <span>Enter your location</span>
            <button className="rounded-r bg-blue-600 px-3 text-[6px] text-white">
              Search Tutors
            </button>
          </div>
        </div>
        <div className="relative h-[136px] overflow-hidden rounded-[9px] bg-[linear-gradient(145deg,#d2b38e,#8b684c)] max-[480px]:hidden">
          <div className="absolute inset-0">
            <div className="absolute top-3.5 left-1/2 h-[90px] w-[70px] -translate-x-1/2 rounded-[45px_45px_20px_20px] bg-[#1a1514]" />
            <div className="absolute top-[23px] left-1/2 h-[58px] w-[47px] -translate-x-1/2 rounded-[45%_45%_50%_50%] bg-[#d9a07e]" />
            <div className="absolute -bottom-[15px] left-1/2 h-20 w-[100px] -translate-x-1/2 rounded-[42px_42px_0_0] bg-[#4c82a8]" />
            <div className="absolute right-0 -bottom-1 h-[65px] w-[42px] -rotate-[7deg] border-[3px] border-[#a9b0b3] bg-[#e6e8e7]" />
          </div>
        </div>
      </div>
      <div className="grid h-[49px] grid-cols-4 border-t border-[#162131] text-center">
        {[
          ["500+", "Tutors"],
          ["1000+", "Students"],
          ["50+", "Subjects"],
          ["4.9★", "Rating"],
        ].map(([number, label]) => (
          <div className="grid place-content-center" key={label}>
            <b className="text-[10px] text-white">{number}</b>
            <small className="mt-0.5 text-[6px] text-slate-500">{label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectInfo({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.2,
      }}
      className="flex flex-col items-start justify-center px-7 py-6 max-[800px]:p-6"
    >
      <span
        className={`mb-2 rounded px-1.5 py-[3px] text-[8px] ${project.accent === "violet" ? "bg-violet-950 text-violet-300" : "bg-blue-950 text-blue-400"}`}
      >
        Featured Project
      </span>
      <h3 className="text-[25px] leading-none font-bold tracking-[-.03em] text-white">
        {project.title}
      </h3>
      <p className="mt-2 max-w-[490px] text-xs leading-relaxed text-slate-400">
        {project.description}
      </p>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true,
          amount: 0.2
         }}
        className="mt-3 grid gap-[5px] text-[11px] text-slate-300"
      >
        {project.features.map((feature) => (
          <motion.li
            variants={itemVariants}
            className="flex items-center gap-[7px]"
            key={feature}
          >
            <span
              className={`grid size-3.5 place-items-center rounded-full text-white ${project.accent === "violet" ? "bg-violet-600" : "bg-blue-600"}`}
            >
              <Check size={11} />
            </span>
            {feature}
          </motion.li>
        ))}
      </motion.ul>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            className="rounded border border-slate-800 bg-slate-900 px-2 py-1 text-[8px] text-slate-300"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-3.5 flex gap-2 max-[480px]:w-full"></div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      className="relative overflow-hidden bg-[#030810] px-6 py-[72px] text-slate-50 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,.08),transparent_35%)] max-[800px]:px-4 max-[800px]:py-14"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mb-[30px] w-full max-w-[1080px] text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-[52px] bg-gradient-to-r from-transparent to-violet-600" />
          <h2 className="text-xs font-bold tracking-[.18em] text-violet-300">
            FEATURED PROJECTS
          </h2>
          <span className="h-px w-[52px] bg-gradient-to-l from-transparent to-violet-600" />
        </div>
        <p className="mt-2.5 text-xs text-slate-500">
          Here are some of the projects I&apos;ve worked on. Each project taught
          me something new and helped me grow.
        </p>
      </motion.div>
      <div className="relative mx-auto grid w-full max-w-[1080px] gap-[18px]">
        {projects.map((project, index) => (
          <motion.article
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -6,
            }}
            className={`relative grid min-h-[300px] overflow-hidden rounded-xl border border-[#172130] bg-[linear-gradient(130deg,rgba(10,17,27,.92),rgba(3,8,16,.96))] shadow-2xl ${index % 2 ? "grid-cols-[1.05fr_1.25fr] max-[800px]:grid-cols-1" : "grid-cols-[1fr_1.18fr] max-[800px]:grid-cols-1"}`}
            key={project.title}
          >
            <div
              className={`flex items-center p-3 max-[480px]:p-2 ${index % 2 ? "order-2 max-[800px]:order-none" : ""}`}
            >
              {project.preview === "expense" ? (
                <ExpensePreview />
              ) : (
                <TuitionPreview />
              )}
            </div>
            <ProjectInfo project={project} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
