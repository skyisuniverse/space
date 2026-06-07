import React from "react";

export interface FooterDetailItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  highlight?: boolean;
}

export interface SubscriptionItem {
  id: number;
  name: string;
  img: string;
}

export interface AudioTrackItem {
  title: string;
  duration: string;
}

export interface VideoItem {
  id: number;
  title: string;
  duration: string;
  img: string;
}
