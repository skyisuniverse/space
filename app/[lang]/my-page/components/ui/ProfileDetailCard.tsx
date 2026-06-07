// app/[lang]/my-page/components/ui/ProfileDetailCard.tsx
import React from "react";
import Link from "next/link";
import { Grid, Paper, Box, Typography } from "@mui/material";

interface ProfileDetailCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  highlight?: boolean;
}

export const ProfileDetailCard: React.FC<ProfileDetailCardProps> = ({
  icon,
  label,
  value,
  href,
  highlight = false,
}) => {
  return (
    <Grid size={{ xs: 12, sm: 4 }}>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: "16px",
          borderColor: "divider",
          bgcolor: "background.default",
          display: "flex",
          alignItems: "center",
          gap: 2,
          height: "100%",
          transition: "border-color 0.25s ease, background-color 0.25s ease",
          "&:hover": {
            borderColor: "primary.main",
            bgcolor: "action.hover",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 1.25,
            borderRadius: "12px",
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {label}
          </Typography>
          <Link href={href} style={{ textDecoration: "none" }}>
            <Typography
              variant="body2"
              fontWeight={600}
              color={highlight ? "primary.main" : "text.primary"}
              sx={{
                "&:hover": {
                  color: highlight ? "primary.dark" : "primary.main",
                  textDecoration: "underline",
                },
              }}
            >
              {value}
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
};
