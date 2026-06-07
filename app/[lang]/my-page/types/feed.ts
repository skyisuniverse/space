export interface PostMediaItem {
  type: "image" | "video";
  url: string;
  targetHref: string;
  aspectRatio?: string;
  duration?: string;
}

export interface PostItem {
  id: string;
  timeAgo: string;
  visibility: string;
  text: string;
  likes: number;
  comments: number;
  shares: number;
  views: string;
  isLastItem?: boolean;
  media: PostMediaItem[];
}

export interface ArticleItem {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
}
