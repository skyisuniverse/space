// app/[lang]/music/page.tsx
import * as React from "react";
import { Container } from "@mui/material";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { MusicViewOrchestrator } from "./components/MusicViewOrchestrator";
import { audioCatalog } from "./data";
import { MusicLabels } from "./types";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Music({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const labels: MusicLabels = {
    music: dict.music || "Audios",
    musicSubtitle: dict.musicSubtitle || "My Audio Library",
    tracksAvailable: "tracks available",
    noTracksFound: "No tracks found in this sector",
    adjustSearch: "Try modifying your search criteria fields.",
    searchPlaceholder: "Search by title, artist",
  };

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3 },
      }}
    >
      <MusicViewOrchestrator
        tracks={audioCatalog}
        lang={lang}
        labels={labels}
      />
    </Container>
  );
}
