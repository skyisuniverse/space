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

export default async function MyPage({ params }: PageProps) {
  const { lang } = await params;

  // ⚡ INSTANT SERVER RESOLUTION: No network lag, no skeleton wait times
  const footerDetails = data.getFooterDetails(lang);
  const subscriptions = data.getSubscriptionData();
  const videos = data.getVideoData();
  const feedPosts = data.getFeedPosts(lang);
  const articles = data.getArticlesData();

  // Mock dictionary labels fallback (Replace with your actual server dict lookup if needed)
  const labels = {
    friends: "Friends",
    music: "Audios",
    video: "Videos",
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* HERO COVER & PROFILE OVERVIEW HEADER */}
      <MyPageHeader
        coverUrl={data.starshipImages.profile}
        avatarUrl={data.starshipImages.avatar}
        profileName={data.profile.name}
        profileStatus={data.profile.status}
        lang={lang}
        footerDetails={footerDetails}
      />

      {/* DUAL-COLUMN LAYOUT INTERFACE */}
      <Grid container spacing={4}>
        <MyPageSidebar
          lang={lang}
          labels={labels}
          images={data.starshipImages}
          subscriptions={subscriptions}
          audioTracks={data.audioTracks}
          videos={videos}
        />

        {/* Stateful interactions are safely isolated inside this client child wrapper */}
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
