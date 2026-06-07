// app/[lang]/my-page/components/layouts/MyPageSkeletonFallback.tsx
import React from "react";
import { Container, Skeleton, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

export const MyPageSkeletonFallback: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* 1. Header Hero Shell Skeleton Box */}
      <Skeleton
        variant="rectangular"
        height={320}
        sx={{ borderRadius: "24px", mb: 4, width: "100%" }}
      />

      {/* 2. Main Columns Interface Skeleton Grid */}
      <Grid container spacing={4}>
        {/* Left column sidebar block */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={4}>
            <Skeleton
              variant="rectangular"
              height={260}
              sx={{ borderRadius: "16px" }}
            />
            <Skeleton
              variant="rectangular"
              height={260}
              sx={{ borderRadius: "16px" }}
            />
          </Stack>
        </Grid>

        {/* Right column core content feed timeline block */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={4}>
            <Skeleton
              variant="rectangular"
              height={120}
              sx={{ borderRadius: "16px" }}
            />
            <Skeleton
              variant="rectangular"
              height={400}
              sx={{ borderRadius: "16px" }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
