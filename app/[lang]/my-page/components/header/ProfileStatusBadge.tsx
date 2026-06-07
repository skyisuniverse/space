// app/[lang]/my-page/components/header/ProfileStatusBadge.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

export const ProfileStatusBadge: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: "rgba(74, 222, 128, 0.12)",
        border: "1px solid rgba(74, 222, 128, 0.25)",
        px: 1.75,
        py: 0.5,
        borderRadius: "100px",
      }}
    >
      <Box
        sx={{
          width: 8,
          height: 8,
          bgcolor: "#4ade80",
          borderRadius: "50%",
          boxShadow: "0 0 0 4px rgba(74, 222, 128, 0.2)",
        }}
      />
      <Typography
        variant="caption"
        color="success.main"
        fontWeight={700}
        sx={{ letterSpacing: "0.02em" }}
      >
        ONLINE
      </Typography>
    </Box>
  );
};
