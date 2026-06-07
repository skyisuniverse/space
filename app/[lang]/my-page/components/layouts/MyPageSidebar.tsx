import React from "react";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  ProfileSidebarCard,
  ProfileImageGridItem,
  ProfileSubscriptionItem,
  ProfileAudioItem,
  ProfileVideoItem,
  ProfilePhotoGridItem,
} from "../index";
import { SubscriptionItem, AudioTrackItem, VideoItem } from "../../types";

interface MyPageSidebarProps {
  lang: string;
  labels: { friends: string; music: string; video: string };
  images: { achievements: string[]; friends: string[]; photos: string[] };
  subscriptions: SubscriptionItem[];
  audioTracks: AudioTrackItem[];
  videos: VideoItem[];
}

export const MyPageSidebar: React.FC<MyPageSidebarProps> = ({
  lang,
  labels,
  images,
  subscriptions,
  audioTracks,
  videos,
}) => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <ProfileSidebarCard
        title="Achievements"
        count={310}
        headerHref={`/${lang}/achievements`}
      >
        {images.achievements.map((url, i) => (
          <ProfileImageGridItem
            key={i}
            src={url}
            alt={`Achievement ${i + 1}`}
            href={`/${lang}/achievements/${i + 1}`}
            variant="square"
          />
        ))}
      </ProfileSidebarCard>

      <ProfileSidebarCard
        title={labels.friends}
        count={450}
        headerHref={`/${lang}/friends`}
      >
        {images.friends.map((url, i) => (
          <ProfileImageGridItem
            key={i}
            src={url}
            alt={`Friend ${i + 1}`}
            href={`/${lang}/friends/${i + 1}`}
            variant="avatar"
          />
        ))}
      </ProfileSidebarCard>

      <ProfileSidebarCard
        title="Subscriptions"
        count={230}
        headerHref={`/${lang}/subscriptions`}
      >
        <Grid size={12}>
          {subscriptions.map((sub) => (
            <ProfileSubscriptionItem
              key={sub.id}
              id={sub.id}
              name={sub.name}
              img={sub.img}
              lang={lang}
            />
          ))}
        </Grid>
      </ProfileSidebarCard>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <ProfileSidebarCard
          title="My Photos"
          count={151}
          headerHref={`/${lang}/photos`}
        >
          {images.photos.map((url, i) => (
            <ProfilePhotoGridItem
              key={i}
              src={url}
              alt={`My Photo ${i + 1}`}
              href={`/${lang}/photos/${i + 1}`}
            />
          ))}
        </ProfileSidebarCard>
      </Box>

      <ProfileSidebarCard
        title={labels.music}
        count={350}
        headerHref={`/${lang}/audios`}
      >
        <Grid size={12}>
          {audioTracks.map((audio, i) => (
            <ProfileAudioItem
              key={i}
              title={audio.title}
              duration={audio.duration}
              lang={lang}
            />
          ))}
        </Grid>
      </ProfileSidebarCard>

      <ProfileSidebarCard
        title={labels.video}
        count={130}
        headerHref={`/${lang}/videos`}
      >
        <Grid size={12}>
          <Stack spacing={2.5}>
            {videos.map((video) => (
              <ProfileVideoItem
                key={video.id}
                id={video.id}
                title={video.title}
                duration={video.duration}
                img={video.img}
                lang={lang}
              />
            ))}
          </Stack>
        </Grid>
      </ProfileSidebarCard>
    </Grid>
  );
};
