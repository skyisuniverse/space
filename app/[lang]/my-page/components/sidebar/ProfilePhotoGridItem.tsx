// app/[lang]/my-page/components/sidebar/ProfilePhotoGridItem.tsx
import React from "react";
import Link from "next/link";
import { Grid as Grid, Box } from "@mui/material";

interface ProfilePhotoGridItemProps {
  src: string;
  alt: string;
  href: string;
  size?: any;
}

export const ProfilePhotoGridItem: React.FC<ProfilePhotoGridItemProps> = ({
  src,
  alt,
  href,
  size = { xs: 6, sm: 3 },
}) => {
  return (
    <Grid size={size}>
      {/* ⚡ Safe Next.js composition link wrapper */}
      <Link href={href} style={{ textDecoration: "none", display: "block" }}>
        <Box
          sx={{
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            aspectRatio: "1/1",
            border: "1px solid",
            borderColor: "divider",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            },
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
            }}
          />
        </Box>
      </Link>
    </Grid>
  );
};
