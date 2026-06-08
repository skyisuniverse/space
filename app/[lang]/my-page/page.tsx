// app/[lang]/my-page/page.tsx
import * as React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { MyPageHeader, MyPageSidebar } from "./components";
import { MyPageInteractiveFeed } from "./components/layouts/MyPageInteractiveFeed";
import * as data from "./data";

interface PageProps {
  params: Promise<{ lang: string }>;
}

// ⏱️ Local Testing Helper: Delays server execution by custom milliseconds
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function MyPage({ params }: PageProps) {
  const { lang } = await params;

  // 🧪 ARTIFICIAL LOADING TIMER FOR TESTING Skeleton
  // Change 3000 (3 seconds) to whatever duration you want to see the skeleton for!
  await sleep(1000);

  // Fast runtime dataset resolutions
  const footerDetails = data.getFooterDetails(lang);
  const subscriptions = data.getSubscriptionData();
  const videos = data.getVideoData();
  const feedPosts = data.getFeedPosts(lang);
  const articles = data.getArticlesData();

  const labels = {
    friends: "Friends",
    music: "Audios",
    video: "Videos",
  };

  return (
    <Container
      maxWidth="xl"
      disableGutters // ⚡ Instantly removes the default mobile padding (16px) causing the scroll
      sx={{
        px: { xs: 0, sm: 3, md: 4 }, // Zero padding on mobile, clean spacing on desktop
        py: { xs: 0, sm: 4 }, // Removes the heavy top/bottom margins on mobile
      }}
    >
      {/* HEADER AREA */}
      <MyPageHeader
        coverUrl={data.starshipImages.profile}
        avatarUrl={data.starshipImages.avatar}
        profileName={data.profile.name}
        profileStatus={data.profile.status}
        lang={lang}
        footerDetails={footerDetails}
      />

      {/* MAIN TWO-COLUMN LAYOUT INTERFACE */}
      <Grid
        container
        columnSpacing={4} // ⚡ Keeps the clean 32px column separation on desktop side-by-side grids
        rowSpacing={{ xs: 0, md: 4 }} // ⚡ Fix: Drops rowSpacing to 0 on mobile, keeps 32px on desktop boards
      >
        <MyPageSidebar
          lang={lang}
          labels={labels}
          images={data.starshipImages}
          subscriptions={subscriptions}
          audioTracks={data.audioTracks}
          videos={videos}
        />

        <MyPageInteractiveFeed
          lang={lang}
          avatarSrc={data.starshipImages.avatar}
          profileName={data.profile.name}
          photos={data.starshipImages.photos}
          feedPosts={feedPosts}
          articles={articles}
        />
      </Grid>
    </Container>
  );
}
