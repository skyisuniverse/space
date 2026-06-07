// app/[lang]/my-page/components/header/ProfileHeader.tsx
import React from "react";
import { Paper, Box, Divider } from "@mui/material";
import { ProfileCover } from "./ProfileCover";

interface ProfileHeaderProps {
  coverUrl: string;
  coverAlt: string;
  mainContent: React.ReactNode;
  footerContent: React.ReactNode;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  coverUrl,
  coverAlt,
  mainContent,
  footerContent,
}) => {
  return (
    <Paper
      sx={{
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
        mb: 4,
      }}
    >
      <ProfileCover src={coverUrl} alt={coverAlt} />
      <Box sx={{ px: { xs: 2, sm: 4 }, pb: 4, pt: 2, position: "relative" }}>
        {mainContent}
        <Divider sx={{ my: 3 }} />
        {footerContent}
      </Box>
    </Paper>
  );
};
