// app/[lang]/my-page/components/feed/ProfileTabsFeed.tsx
import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ProfilePostCard } from "./ProfilePostCard";
import { ProfileArticleCard } from "./ProfileArticleCard";
import { PostItem, ArticleItem } from "../../types";

interface ProfileTabsFeedProps {
  tabValue: number;
  posts: PostItem[];
  articles: ArticleItem[];
  avatarSrc: string;
  profileName: string;
  lang: string;
}

export const ProfileTabsFeed: React.FC<ProfileTabsFeedProps> = ({
  tabValue,
  posts,
  articles,
  avatarSrc,
  profileName,
  lang,
}) => {
  return (
    <>
      {/* Tab 0 — Posts Timeline Content Grid */}
      {tabValue === 0 && (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {posts.map((post) => (
            <ProfilePostCard
              key={post.id}
              id={post.id}
              avatarSrc={avatarSrc}
              profileName={profileName}
              timeAgo={post.timeAgo}
              visibility={post.visibility}
              text={post.text}
              likes={post.likes}
              comments={post.comments}
              shares={post.shares}
              views={post.views}
              media={post.media}
              isLastItem={post.isLastItem}
            />
          ))}
        </Box>
      )}

      {/* Tab 1 — Articles Panel Grid View */}
      {tabValue === 1 && (
        <Box sx={{ p: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight={800}
            sx={{ mb: 3, letterSpacing: "-0.015em" }}
          >
            Latest Articles
          </Typography>

          <Stack spacing={4}>
            {articles.map((article) => (
              <ProfileArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                subtitle={article.subtitle}
                desc={article.desc}
                lang={lang}
              />
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
};
