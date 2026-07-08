import type { ComponentType, SVGProps } from "react";

export interface Project {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies: {
    name: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    color: string;
  }[];
  github: string;
  demo: string;
}
