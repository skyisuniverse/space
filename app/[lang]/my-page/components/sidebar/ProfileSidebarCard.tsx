// app/[lang]/my-page/components/sidebar/ProfileSidebarCard.tsx
import React from "react";
import Link from "next/link";
import { Paper, Box, Typography, Grid } from "@mui/material";

interface ProfileSidebarCardProps {
  title: string;
  count: number;
  headerHref: string;
  children: React.ReactNode;
}

export const ProfileSidebarCard: React.FC<ProfileSidebarCardProps> = ({
  title,
  count,
  headerHref,
  children,
}) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        mb: 4,
        borderRadius: "16px",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2.5,
        }}
      >
        <Link
          href={headerHref}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{
              fontFamily: "var(--font-roboto)",
              display: "flex",
              alignItems: "center",
              gap: 1,
              transition: "color 0.2s ease",
              "&:hover": { color: "primary.main" },
            }}
          >
            {title}{" "}
            <Box
              component="span"
              sx={{ color: "text.secondary", fontWeight: 400 }}
            >
              {count}
            </Box>
          </Typography>
        </Link>
      </Box>
      <Grid container spacing={1.5}>
        {children}
      </Grid>
    </Paper>
  );
};
