// app/[lang]/my-page/components/header/ProfileCover.tsx
import React from "react";
import { Box } from "@mui/material";

interface ProfileCoverProps {
  src: string;
  alt: string;
}

export const ProfileCover: React.FC<ProfileCoverProps> = ({ src, alt }) => {
  return (
    <Box
      sx={{
        height: { xs: 180, sm: 260, md: 320 },
        width: "100%",
        position: "relative",
        overflow: "hidden",
        bgcolor: "grey.200",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 60%)",
        }}
      />
    </Box>
  );
};
