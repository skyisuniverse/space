// // app/[lang]/my-page/components/layouts/MyPageInteractiveFeed.tsx
// "use client";

// import * as React from "react";
// import { MyPageContentFeed } from "../index";
// import { PostItem, ArticleItem } from "../../types";

// interface MyPageInteractiveFeedProps {
//   lang: string;
//   avatarSrc: string;
//   profileName: string;
//   photos: string[];
//   feedPosts: PostItem[];
//   articles: ArticleItem[];
// }

// export const MyPageInteractiveFeed: React.FC<MyPageInteractiveFeedProps> = ({
//   lang,
//   avatarSrc,
//   profileName,
//   photos,
//   feedPosts,
//   articles,
// }) => {
//   const [tabValue, setTabValue] = React.useState(0);

//   const handleTabChange = React.useCallback(
//     (_e: React.SyntheticEvent, val: number) => {
//       setTabValue(val);
//     },
//     [],
//   );

//   return (
//     <MyPageContentFeed
//       lang={lang}
//       tabValue={tabValue}
//       onTabChange={handleTabChange}
//       avatarSrc={avatarSrc}
//       profileName={profileName}
//       photos={photos}
//       feedPosts={feedPosts}
//       articles={articles}
//     />
//   );
// };

// app/[lang]/my-page/components/layouts/MyPageInteractiveFeed.tsx
"use client";

import * as React from "react";
import { MyPageContentFeed } from "../index";
import { PostItem, ArticleItem } from "../../types";

interface MyPageInteractiveFeedProps {
  lang: string;
  avatarSrc: string;
  profileName: string;
  photos: string[];
  feedPosts: PostItem[];
  articles: ArticleItem[];
}

export const MyPageInteractiveFeed: React.FC<MyPageInteractiveFeedProps> = ({
  lang,
  avatarSrc,
  profileName,
  photos,
  feedPosts,
  articles,
}) => {
  const [tabValue, setTabValue] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleTabChange = React.useCallback(
    (_e: React.SyntheticEvent, val: number) => {
      setTabValue(val);
    },
    [],
  );

  const handleSearchChange = React.useCallback((val: string) => {
    setSearchQuery(val);
  }, []);

  const filteredPosts = React.useMemo(() => {
    if (!searchQuery.trim()) return feedPosts;
    return feedPosts.filter((post) =>
      post.text.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, feedPosts]);

  const filteredArticles = React.useMemo(() => {
    if (!searchQuery.trim()) return articles;
    return articles.filter(
      (art) =>
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.desc.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, articles]);

  return (
    <MyPageContentFeed
      lang={lang}
      tabValue={tabValue}
      onTabChange={handleTabChange}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      avatarSrc={avatarSrc}
      profileName={profileName}
      photos={photos}
      feedPosts={filteredPosts}
      articles={filteredArticles}
    />
  );
};
