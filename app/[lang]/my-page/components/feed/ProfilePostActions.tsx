// app/[lang]/my-page/components/feed/ProfilePostActions.tsx
import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import {
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  Visibility,
} from "@mui/icons-material";

interface ProfilePostActionsProps {
  likes: number | string;
  comments: number | string;
  shares: number | string;
  views: string;
}

export const ProfilePostActions: React.FC<ProfilePostActionsProps> = ({
  likes,
  comments,
  shares,
  views,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 3,
        pt: 1,
      }}
    >
      <Stack direction="row" spacing={1}>
        <Button
          size="small"
          startIcon={<FavoriteBorder />}
          sx={{
            textTransform: "none",
            borderRadius: "100px",
            px: 2,
            py: 0.5,
            color: "text.secondary",
          }}
        >
          {likes}
        </Button>
        <Button
          size="small"
          startIcon={<ChatBubbleOutline />}
          sx={{
            textTransform: "none",
            borderRadius: "100px",
            px: 2,
            py: 0.5,
            color: "text.secondary",
          }}
        >
          {comments}
        </Button>
        <Button
          size="small"
          startIcon={<Share />}
          sx={{
            textTransform: "none",
            borderRadius: "100px",
            px: 2,
            py: 0.5,
            color: "text.secondary",
          }}
        >
          {shares}
        </Button>
      </Stack>
      <Stack
        direction="row"
        spacing={0.5}
        sx={{ alignItems: "center", color: "text.secondary" }}
      >
        <Visibility fontSize="inherit" />
        <Typography variant="caption" sx={{ fontWeight: 500 }}>
          {views}
        </Typography>
      </Stack>
    </Box>
  );
};
