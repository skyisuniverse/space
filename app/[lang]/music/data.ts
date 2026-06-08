// app/[lang]/music/data.ts
import { AudioTrackItem } from "./types";

const audioTitles = [
  "Evening Echoes",
  "Silent Horizon",
  "Daybreak Melodies",
  "Serene Pathway",
  "Midnight Reflection",
  "Ocean Breeze",
  "Vibrant Pulse",
  "Nostalgic Memory",
  "Tranquil Flow",
  "Urban Exploration",
];

const audioPerformers = [
  "Acoustic Project",
  "Studio Ensemble",
  "Sound Design Lab",
  "Creator",
  "Music Collective",
  "Melodic Collaboration",
];

export const audioCatalog: AudioTrackItem[] = Array.from({ length: 200 }).map(
  (_, index) => {
    const idNum = index + 1;
    const titleBase = audioTitles[index % audioTitles.length];
    const performerBase = audioPerformers[index % audioPerformers.length];

    // Creates realistic duration formats from short clips to multi-hour tracks
    const hours = index % 5 === 0 ? `${Math.floor(index / 45) + 1}:` : "";
    const minutes = String((index * 7 + 12) % 60).padStart(2, "0");
    const seconds = String((index * 13 + 42) % 60).padStart(2, "0");
    const duration = `${hours}${minutes}:${seconds}`;

    return {
      id: `st-${String(idNum).padStart(3, "0")}`,
      title: `${titleBase} (Track ${idNum})`,
      performer: `${performerBase} ${String((index % 3) + 1)}`,
      duration,
    };
  },
);
