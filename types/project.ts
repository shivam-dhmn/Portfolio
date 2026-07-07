import { IconType } from "react-icons";

export interface Project {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies: {
    name: string;
    icon: IconType;
    color: string;
  }[];
  github: string;
  demo: string;
}