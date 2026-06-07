// app/[lang]/my-page/components/header/ProfileInfo.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { ProfileStatusBadge } from "./ProfileStatusBadge";

interface ProfileInfoProps {
  name: string;
  status: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, status }) => {
  return (
    <Box sx={{ flexGrow: 1, pb: { md: 1.5 }, pt: { xs: 1, md: 0 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          gap: 2,
          mb: 1.5,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight={800}
          sx={{ letterSpacing: "-0.02em" }}
        >
          {name}
        </Typography>
        <ProfileStatusBadge />
      </Box>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          lineHeight: 1.6,
          maxWidth: 680,
          mx: { xs: "auto", md: 0 },
        }}
      >
        {status}
      </Typography>
    </Box>
  );
};
