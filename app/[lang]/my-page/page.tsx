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
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <MyPageHeader
        coverUrl={data.starshipImages.profile}
        avatarUrl={data.starshipImages.avatar}
        profileName={data.profile.name}
        profileStatus={data.profile.status}
        lang={lang}
        footerDetails={footerDetails}
      />

      <Grid container spacing={4}>
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
