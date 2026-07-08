"use client";
import { motion } from "framer-motion";

import {
  ClipboardList,
  CodeXml,
  FlaskConical,
  Rocket,
  SquarePen,
} from "lucide-react";

const values = [
  {
    id: 1,
    icon: <ClipboardList />,
    title: "Discover",
    description: "Understanding project requirements and goals.",
  },
  {
    id: 2,
    icon: <SquarePen />,
    title: "Plan & Design",
    description: "Planning the architecture and designing the user interface.",
  },
  {
    id: 3,
    icon: <CodeXml />,
    title: "Develop",
    description: "Writing clean, efficient and scalable code.",
  },
  {
    id: 4,
    icon: <FlaskConical />,
    title: "Test",
    description: "Testing the application for bugs and issues.",
  },
  {
    id: 5,
    icon: <Rocket />,
    title: "Deploy",
    description: "Deploying the application to the production environment.",
  },
];

// Animaions

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const DevProcess = () => {
  return (
    <section className="bg-gray-900 px-4 py-10 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="px-2 pb-8 text-center text-2xl font-bold text-white sm:text-3xl">
          Development Process
        </h2>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        
        className="mx-auto grid max-w-7xl gap-4 border-y border-gray-700 py-8 sm:grid-cols-2 lg:grid-cols-5 "
      >
        {values.map((step) => (
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            key={step.id}
            className="flex min-h-[170px] flex-col items-center justify-center gap-3 rounded-lg bg-gray-800 p-5 transition duration-300 hover:bg-gray-700 hover:shadow-[0_0_30px_rgba(37,99,235,.15)] cursor-pointer"
          >
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="text-2xl text-white "
            >
              {step.icon}
            </motion.div>
            <h3 className="text-center text-lg font-semibold text-white">
              {step.title}
            </h3>
            <p className="text-center text-sm leading-6 text-gray-400">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DevProcess;
