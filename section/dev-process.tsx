import React from "react";
import {
    ArrowRight,
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
    description: "Understanding project requirements and Goals.",
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

const DevProcess = () => {
  return (
    <>
      <div className="dev-process-container bg-gray-900 p-5 ">
        <h1 className="text-3xl font-bold text-white text-center p-6">Development Process</h1>
        <div className="dev-process flex flex-wrap justify-center gap-4 p-10  bg-gray-900 border-y-1 border-gray-700">
          {values.map((step, index) => (
            <div key={index} className="step flex flex-col items-center gap-2  p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300">
              <div className="icon text-2xl text-white">{step.icon}</div>
              <h3 className="title text-lg font-semibold text-white ">
                {step.title}
              </h3>
              <p className="description text-center text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DevProcess;
