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

  const handleTabChange = React.useCallback(
    (_e: React.SyntheticEvent, val: number) => {
      setTabValue(val);
    },
    [],
  );

  return (
    <MyPageContentFeed
      lang={lang}
      tabValue={tabValue}
      onTabChange={handleTabChange}
      avatarSrc={avatarSrc}
      profileName={profileName}
      photos={photos}
      feedPosts={feedPosts}
      articles={articles}
    />
  );
};
