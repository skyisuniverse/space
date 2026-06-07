// app/[lang]/my-page/_data/queries.ts
import { useQuery } from "@tanstack/react-query"; // Or your preferred fetching client
import { PostItem, ArticleItem } from "../types";

export function useProfileFeed(lang: string) {
  return useQuery<PostItem[]>({
    queryKey: ["profileFeed", lang],
    queryFn: async () => {
      const res = await fetch(`/api/profile/posts?lang=${lang}`);
      if (!res.ok) throw new Error("Failed to load feed");
      return res.json();
    },
  });
}

export function useProfileArticles() {
  return useQuery<ArticleItem[]>({
    queryKey: ["profileArticles"],
    queryFn: async () => {
      const res = await fetch("/api/profile/articles");
      return res.json();
    },
  });
}
