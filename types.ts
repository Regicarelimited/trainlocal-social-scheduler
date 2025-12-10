import { ReactNode } from "react";

export type VibeType = 'classic' | 'industrial' | 'sunrise' | 'midnight' | 'motivation' | 'luxury' | 'eco' | 'neon';

export interface VibeConfig {
  id: VibeType;
  label: string;
  backgroundImage?: string;
  colors: {
    bg: string;
    text: string;
    accent: string;
    secondary: string;
    gradient: string;
    overlay?: string; // Tailwind class for overlay opacity e.g., 'bg-black/80'
  };
  font: {
    heading: string;
    body: string;
  };
  assetCategory?: string; // Links vibe to asset category
}

export interface ContentAngle {
  id: number;
  label: string;
  category: string;
  icon: ReactNode;
  fields: string[];
  template: string;
  requiresImage?: boolean;
  defaultHashtags?: string;
}

export interface PostData {
  [key: string]: string | undefined;
  customBackground?: string;
}

export interface ScheduledPost {
  id: number;
  date: string;
  angleId: number;
  vibe: VibeType;
  type: 'post' | 'story';
  data: PostData;
}

export interface Trainer {
  id: string;
  name: string;
  location: string;
  specialism: string;
  image?: string;
}

export interface Asset {
  id: string;
  url: string;
  category: 'gym' | 'nature' | 'urban' | 'abstract' | 'luxury';
  tags: string[];
}