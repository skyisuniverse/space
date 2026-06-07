import React from "react";
import { Cake, LocationCity, RocketLaunch } from "@mui/icons-material";
import { FooterDetailItem } from "../types";

export const profile = {
  name: "Nick Jones",
  status:
    "Interested in space exploration, building the future with AI, Robots, reusable rockets and open-source Nanotech.",
  birthday: "May 12, 1995",
  city: "Space",
  activity: "Working on a new orbital launch simulation tool",
};

export const starshipImages = {
  profile: "/images/strings.jpg",
  avatar: "/images/terraform-mars.jpg",
  achievements: [
    "/images/strings-1.jpg",
    "/images/strings-2.jpg",
    "/images/strings-3.jpg",
    "/images/strings-4.jpg",
    "/images/strings-5.jpg",
    "/images/strings-6.jpg",
  ],
  friends: [
    "/images/friends-1.jpg",
    "/images/friends-2.jpg",
    "/images/friends-3.jpg",
    "/images/friends-4.jpg",
    "/images/friends-5.jpg",
    "/images/friends-6.jpg",
  ],
  subscriptions: {
    SpaceX: "/images/space-1.jpeg",
    Neuralink: "/images/space-2.jpeg",
    Tesla: "/images/space-3.jpeg",
    xAI: "/images/space-4.jpeg",
  },
  photos: [
    "/images/terraform-mars-1.jpg",
    "/images/terraform-mars-2.jpg",
    "/images/terraform-mars-3.jpg",
    "/images/terraform-mars-4.jpg",
  ],
  postImages: {
    post1: [
      "/images/post-1.jpeg",
      "/images/post-2.jpeg",
      "/images/post-3.jpeg",
    ],
    post2: { preview1: "/images/post-4.jpeg", preview2: "/images/post-5.jpeg" },
    post3: ["/images/quantum-data-center-space.jpg"],
    post5: "/images/robots-ai-satellite.jpg",
    post4: [
      "/images/post-4-1.jpg",
      "/images/post-4-2.jpg",
      "/images/post-4-3.jpg",
      "/images/post-4-4.jpg",
    ],
    post6: ["/images/post-6-1.jpg", "/images/post-6-2.jpg"],
    post7: "/images/post7.jpg",
    post8: "/images/post8.jpg",
  },
  videos: {
    preview1: "/images/video-1.jpeg",
    preview2: "/images/video-2.jpeg",
  },
};

export const getFooterDetails = (lang: string): FooterDetailItem[] => [
  {
    icon: React.createElement(Cake, { sx: { color: "primary.main" } }),
    label: "Birthday",
    value: profile.birthday,
    href: `/${lang}/profile/birthday`,
  },
  {
    icon: React.createElement(LocationCity, { sx: { color: "primary.main" } }),
    label: "City",
    value: profile.city,
    href: `/${lang}/profile/city`,
  },
  {
    icon: React.createElement(RocketLaunch, { sx: { color: "primary.main" } }),
    label: "Activity",
    value: profile.activity,
    href: `/${lang}/profile/activity`,
    highlight: true,
  },
];
