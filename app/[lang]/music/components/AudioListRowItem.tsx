// app/[lang]/music/components/AudioListRowItem.tsx
import React from "react";
import {
  ListItem,
  Box,
  IconButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { PlayArrow, MoreVert } from "@mui/icons-material";
import Link from "next/link";
import { AudioTrackItem } from "../types";

interface AudioListRowItemProps {
  track: AudioTrackItem;
  lang: string;
}

export const AudioListRowItem: React.FC<AudioListRowItemProps> = ({
  track,
  lang,
}) => {
  return (
    <ListItem
      divider
      secondaryAction={
        <IconButton size="small" edge="end" sx={{ color: "text.secondary" }}>
          <MoreVert fontSize="small" />
        </IconButton>
      }
      sx={{
        px: { xs: 2, sm: 3 }, // ⚡ Responsive padding: tighter on mobile screen edges
        py: 1.5,
        bgcolor: "background.paper",
        transition: "background-color 0.2s ease",
        "&:hover": { bgcolor: "action.hover" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          pr: { xs: 2, sm: 4 }, // ⚡ Leaves clean clearance for the secondary action button
        }}
      >
        {/* Play Action Bubble button */}
        <IconButton
          size="medium"
          sx={{
            mr: { xs: 1.5, sm: 2 }, // ⚡ Optimized spacing for mobile thumbs
            bgcolor: "primary.light",
            color: "primary.contrastText",
            width: { xs: 36, sm: 40 }, // ⚡ Slightly smaller play button on mobile
            height: { xs: 36, sm: 40 },
            flexShrink: 0,
            boxShadow: "0 2px 8px rgba(25, 118, 210, 0.15)",
            "&:hover": { bgcolor: "primary.main", transform: "scale(1.04)" },
            transition: "all 0.2s ease",
          }}
        >
          <PlayArrow
            sx={{
              // ⚡ Bypasses the strict property types to scale font-size responsively via CSS
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          />
        </IconButton>

        {/* Responsive Content Metadata Split Row Block */}
        <Box
          component={Link}
          href={`/${lang}/music/${track.id}`}
          style={{
            textDecoration: "none",
            color: "inherit",
            flex: 1,
            minWidth: 0,
          }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // ⚡ Stacks details on mobile, splits inline on desktop
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: { xs: 0.5, sm: 2 },
          }}
        >
          {/* Main Track Text Node */}
          <Box sx={{ minWidth: 0, width: "100%" }}>
            <Typography
              variant="body2"
              fontWeight={600}
              noWrap
              sx={{
                fontSize: { xs: "0.875rem", sm: "0.95rem" },
                letterSpacing: "-0.005em",
                color: "text.primary",
              }}
            >
              {track.title}
            </Typography>
            <Typography
              variant="caption"
              fontWeight={500}
              noWrap
              sx={{
                display: "block",
                mt: 0.25,
                color: "text.secondary",
                fontSize: { xs: "0.75rem", sm: "0.8rem" },
              }}
            >
              {track.performer}
            </Typography>
          </Box>

          {/* Duration Badge Tag */}
          <Box sx={{ flexShrink: 0, mt: { xs: 0.25, sm: 0 } }}>
            <Typography
              variant="caption"
              fontWeight={600}
              color="text.secondary"
              sx={{
                fontFamily: "monospace",
                bgcolor: "background.default",
                border: "1px solid",
                borderColor: "divider",
                px: { xs: 1, sm: 1.25 },
                py: { xs: 0.25, sm: 0.5 },
                borderRadius: "6px",
                fontSize: { xs: "0.7rem", sm: "0.75rem" },
              }}
            >
              {track.duration}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
};
