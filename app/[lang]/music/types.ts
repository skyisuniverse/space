// app/[lang]/music/types.ts
export interface AudioTrackItem {
  id: string;
  title: string;
  performer: string;
  duration: string;
}

export interface MusicLabels {
  music: string;
  musicSubtitle: string;
  tracksAvailable: string;
  noTracksFound: string;
  adjustSearch: string;
  searchPlaceholder: string;
}
