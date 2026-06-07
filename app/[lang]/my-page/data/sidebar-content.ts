import { AudioTrackItem, SubscriptionItem, VideoItem } from "../types";
import { starshipImages } from "./profile";

export const audioTracks: AudioTrackItem[] = [
  { title: "Space-based AI", duration: "3:45" },
  { title: "Nanotech R&D", duration: "12:20" },
  { title: "Rocket Science 101", duration: "8:10" },
];

export const getVideoData = (): VideoItem[] => [
  {
    id: 1,
    title: "Space Habitation 1",
    duration: "3:12",
    img: starshipImages.videos.preview1,
  },
  {
    id: 2,
    title: "Space Habitation 2",
    duration: "3:12",
    img: starshipImages.videos.preview2,
  },
];

export const getSubscriptionData = (): SubscriptionItem[] => [
  {
    id: 1,
    name: "Space Exploration & Habitation",
    img: starshipImages.subscriptions.SpaceX,
  },
  {
    id: 2,
    name: "Neuro-interfaces & BCIs",
    img: starshipImages.subscriptions.Neuralink,
  },
  { id: 3, name: "AI & Robotics", img: starshipImages.subscriptions.Tesla },
  { id: 4, name: "Nanotechnology", img: starshipImages.subscriptions.xAI },
];
