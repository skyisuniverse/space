// import React from "react";
// import { Box } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import {
//   ProfileSidebarCard,
//   ProfilePhotoGridItem,
//   ProfilePostComposer,
//   ProfileTabsContainer,
//   ProfileTabsFeed,
// } from "../index";
// import { PostItem, ArticleItem } from "../../types";

// interface MyPageContentFeedProps {
//   lang: string;
//   tabValue: number;
//   onTabChange: (_event: React.SyntheticEvent, newValue: number) => void;
//   avatarSrc: string;
//   profileName: string;
//   photos: string[];
//   feedPosts: PostItem[];
//   articles: ArticleItem[];
// }

// export const MyPageContentFeed: React.FC<MyPageContentFeedProps> = ({
//   lang,
//   tabValue,
//   onTabChange,
//   avatarSrc,
//   profileName,
//   photos,
//   feedPosts,
//   articles,
// }) => {
//   return (
//     <Grid size={{ xs: 12, md: 8 }}>
//       <Box sx={{ display: { xs: "none", md: "block" } }}>
//         <ProfileSidebarCard
//           title="My Photos"
//           count={151}
//           headerHref={`/${lang}/photos`}
//         >
//           {photos.map((url, i) => (
//             <ProfilePhotoGridItem
//               key={i}
//               src={url}
//               alt={`My Photo ${i + 1}`}
//               href={`/${lang}/photos/${i + 1}`}
//               size={3}
//             />
//           ))}
//         </ProfileSidebarCard>
//       </Box>

//       <ProfilePostComposer avatarSrc={avatarSrc} profileName={profileName} />

//       <ProfileTabsContainer tabValue={tabValue} onTabChange={onTabChange}>
//         <ProfileTabsFeed
//           tabValue={tabValue}
//           posts={feedPosts}
//           articles={articles}
//           avatarSrc={avatarSrc}
//           profileName={profileName}
//           lang={lang}
//         />
//       </ProfileTabsContainer>
//     </Grid>
//   );
// };

// app/[lang]/my-page/components/layouts/MyPageContentFeed.tsx
import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  ProfileSidebarCard,
  ProfilePhotoGridItem,
  ProfilePostComposer,
  ProfileTabsContainer,
  ProfileTabsFeed,
} from "../index";
import { PostItem, ArticleItem } from "../../types";

interface MyPageContentFeedProps {
  lang: string;
  tabValue: number;
  onTabChange: (_event: React.SyntheticEvent, newValue: number) => void;
  searchQuery: string; // 🟢 Added prop
  onSearchChange: (val: string) => void; // 🟢 Added prop
  avatarSrc: string;
  profileName: string;
  photos: string[];
  feedPosts: PostItem[];
  articles: ArticleItem[];
}

export const MyPageContentFeed: React.FC<MyPageContentFeedProps> = ({
  lang,
  tabValue,
  onTabChange,
  searchQuery,
  onSearchChange,
  avatarSrc,
  profileName,
  photos,
  feedPosts,
  articles,
}) => {
  return (
    <Grid size={{ xs: 12, md: 8 }}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <ProfileSidebarCard
          title="My Photos"
          count={151}
          headerHref={`/${lang}/photos`}
        >
          {photos.map((url, i) => (
            <ProfilePhotoGridItem
              key={i}
              src={url}
              alt={`My Photo ${i + 1}`}
              href={`/${lang}/photos/${i + 1}`}
              size={3}
            />
          ))}
        </ProfileSidebarCard>
      </Box>

      <ProfilePostComposer avatarSrc={avatarSrc} profileName={profileName} />

      <ProfileTabsContainer
        tabValue={tabValue}
        onTabChange={onTabChange}
        searchQuery={searchQuery} // 🟢 Forwarded down safely
        onSearchChange={onSearchChange} // 🟢 Forwarded down safely
      >
        <ProfileTabsFeed
          tabValue={tabValue}
          posts={feedPosts}
          articles={articles}
          avatarSrc={avatarSrc}
          profileName={profileName}
          lang={lang}
        />
      </ProfileTabsContainer>
    </Grid>
  );
};
