import { ReactNode } from "react";

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: string;
}

export interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export interface AnimatedTextProps {
  text: string;
  className?: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  tag: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  accentColor?: string;
}

export interface Service {
  number: string;
  name: string;
  description: string;
  icon?: string;
  tech?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  iconName: "github" | "linkedin" | "facebook" | "mail" | "external";
}

export interface MarqueeTileData {
  id: string;
  type: "image" | "card";
  src?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  tech?: string[];
  accentColor?: string;
  link?: string;
}
