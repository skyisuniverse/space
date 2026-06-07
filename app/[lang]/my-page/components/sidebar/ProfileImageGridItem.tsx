// app/[lang]/my-page/components/sidebar/ProfileImageGridItem.tsx
import React from "react";
import Link from "next/link";
import { Grid, Box, Avatar } from "@mui/material";

interface ProfileImageGridItemProps {
  src: string;
  alt: string;
  href: string;
  variant?: "square" | "avatar";
}

export const ProfileImageGridItem: React.FC<ProfileImageGridItemProps> = ({
  src,
  alt,
  href,
  variant = "square",
}) => {
  return (
    <Grid size={4}>
      {/* ⚡ Safe Next.js composition link wrapper */}
      <Link href={href} style={{ textDecoration: "none", display: "block" }}>
        {variant === "square" ? (
          <Box
            sx={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              aspectRatio: "1/1",
              bgcolor: "grey.100",
              border: "1px solid",
              borderColor: "divider",
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
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src={src}
              alt={alt}
              sx={{
                width: "100%",
                height: "auto",
                aspectRatio: "1/1",
                borderRadius: "16px", // M3 styled soft rounded corners
                border: "1px solid",
                borderColor: "divider",
                transition:
                  "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                "&:hover": {
                  transform: "scale(1.06)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                },
              }}
            />
          </Box>
        )}
      </Link>
    </Grid>
  );
};
