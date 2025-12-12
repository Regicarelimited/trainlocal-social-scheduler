import { ReactNode } from "react";

export type VibeType = 'classic' | 'neon' | 'burntOrange' | 'realWorld';

export interface VibeConfig {
  id: VibeType;
  label: string;
  backgroundImage?: string;
  colors: {
    bg: string; // The main background of the post
    text: string; // Main text color
    card: string; // Background for cards (usually white or dark)
    accent: string; // Text accent color
    gradient: string; // Gradient class for buttons/borders
    overlay?: string; // Overlay for image backgrounds
  };
  font: {
    heading: string;
    body: string;
  };
  assetCategory?: string;
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

export type CanvasElement = {
  id: string;
  type: 'text';
  x: number;
  y: number;
  width: number;
  height: number;
  content: string;
  fontSize?: number;
  color?: string;
}