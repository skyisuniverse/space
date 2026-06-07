// app/[lang]/my-page/components/sidebar/ProfileAudioItem.tsx
import React from "react";
import Link from "next/link";
import {
  ListItem,
  Box,
  IconButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

interface ProfileAudioItemProps {
  title: string;
  duration: string;
  lang: string;
}

export const ProfileAudioItem: React.FC<ProfileAudioItemProps> = ({
  title,
  duration,
  lang,
}) => {
  return (
    <ListItem disableGutters sx={{ py: 0.5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: "12px",
          px: 1,
          py: 0.75,
          transition: "background-color 0.25s ease, transform 0.25s ease",
          "&:hover": {
            bgcolor: "action.hover",
            transform: "translateX(4px)",
          },
        }}
      >
        <IconButton
          size="small"
          sx={{
            mr: 1.5,
            bgcolor: "primary.light",
            color: "primary.contrastText",
            width: 32,
            height: 32,
            "&:hover": { bgcolor: "primary.main" },
          }}
        >
          <PlayArrow fontSize="small" />
        </IconButton>

        {/* Safe internal composition wrapper layout block */}
        <Link
          href={`/${lang}/audios?title=${encodeURIComponent(title)}`}
          style={{
            flex: 1,
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <ListItemText
            primary={title}
            primaryTypographyProps={{
              fontSize: "0.875rem",
              fontWeight: 600,
              noWrap: true,
            }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ ml: 1, fontWeight: 500 }}
          >
            {duration}
          </Typography>
        </Link>
      </Box>
    </ListItem>
  );
};
