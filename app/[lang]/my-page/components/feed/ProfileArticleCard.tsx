// app/[lang]/my-page/components/feed/ProfileArticleCard.tsx
import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

interface ProfileArticleCardProps {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  lang: string;
}

export const ProfileArticleCard: React.FC<ProfileArticleCardProps> = ({
  id,
  title,
  subtitle,
  desc,
  lang,
}) => {
  return (
    <Box
      component={Link}
      href={`/${lang}/articles/${id}`}
      sx={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        transition:
          "background-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease",
        borderRadius: "14px",
        p: 2.5,
        border: "1px solid",
        borderColor: "divider",
        "&:hover": {
          bgcolor: "action.hover",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
          transform: "translateY(-2px)",
          borderColor: "primary.main",
        },
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        fontWeight={700}
        sx={{ fontSize: "1.1rem", lineHeight: 1.4 }}
      >
        {title}
      </Typography>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: "block", mb: 1.5, fontWeight: 500 }}
      >
        {subtitle}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.6 }}
      >
        {desc}
      </Typography>
    </Box>
  );
};
