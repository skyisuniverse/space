// app/[lang]/my-page/components/layouts/MyPageSkeleton.tsx
import React from "react";
import { Container, Box, Paper, Stack, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";

export const MyPageSkeleton: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* 1. HERO COVER & PROFILE OVERVIEW HEADER SKELETON */}
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
        {/* Cover Photo */}
        <Skeleton
          variant="rectangular"
          height={320}
          width="100%"
          animation="wave"
        />

        {/* Overlapping Avatar & Bio Content Layout */}
        <Box sx={{ px: { xs: 2, sm: 4 }, pb: 4, pt: 2, position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-end" },
              gap: { xs: 2.5, md: 4 },
              textAlign: { xs: "center", md: "left" },
              mb: 3,
            }}
          >
            {/* Overlapping Profile Avatar */}
            <Skeleton
              variant="circular"
              sx={{
                width: { xs: 120, sm: 150, md: 170 },
                height: { xs: 120, sm: 150, md: 170 },
                aspectRatio: "1/1", // ⚡ Forces the element to remain a perfect circle
                flexShrink: 0, // ⚡ Prevents the layout container from squeezing the element bounds
                border: "6px solid",
                borderColor: "background.paper",
                mt: { xs: -8, sm: -11, md: -12 },
              }}
              animation="wave"
            />

            {/* Profile Info Details Block */}
            <Box sx={{ flexGrow: 1, width: "100%", pt: { xs: 1, md: 0 } }}>
              <Skeleton
                variant="text"
                width={220}
                height={40}
                sx={{ mx: { xs: "auto", md: 0 } }}
              />
              <Skeleton
                variant="text"
                width="80%"
                height={24}
                sx={{ mx: { xs: "auto", md: 0 }, mt: 1 }}
              />
            </Box>

            {/* Header Interactive Action Buttons */}
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                width: { xs: "100%", sm: "auto" },
                justifyContent: "center",
              }}
            >
              <Skeleton
                variant="rounded"
                width={110}
                height={44}
                sx={{ borderRadius: "100px" }}
              />
              <Skeleton
                variant="rounded"
                width={140}
                height={44}
                sx={{ borderRadius: "100px" }}
              />
            </Stack>
          </Box>
        </Box>
      </Paper>

      {/* 2. DUAL-COLUMN APP TIMELINE LAYOUT SKELETON */}
      <Grid container spacing={4}>
        {/* LEFT COLUMN SIKDEBAR HOUSING CARDS */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={4}>
            {/* Replicating Sidebar Card Containers (Achievements, Friends, Subs) */}
            {[1, 2, 3].map((cardIdx) => (
              <Paper
                key={cardIdx}
                variant="outlined"
                sx={{ p: 3, borderRadius: "16px", borderColor: "divider" }}
              >
                <Skeleton
                  variant="text"
                  width="40%"
                  height={28}
                  sx={{ mb: 2 }}
                />
                <Grid container spacing={1.5}>
                  {[1, 2, 3, 4, 5, 6].map((gridIdx) => (
                    <Grid size={4} key={gridIdx}>
                      <Skeleton
                        variant="rectangular"
                        sx={{ aspectRatio: "1/1", borderRadius: "12px" }}
                        width="100%"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            ))}
          </Stack>
        </Grid>

        {/* RIGHT COLUMN FEED CONTAINERS */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={4}>
            {/* Post Composer Composer Box Placeholder */}
            <Paper
              variant="outlined"
              sx={{ p: 2.5, borderRadius: "16px", borderColor: "divider" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Skeleton variant="circular" width={44} height={44} />
                <Skeleton
                  variant="rectangular"
                  height={44}
                  sx={{ flex: 1, borderRadius: "12px" }}
                />
              </Box>
            </Paper>

            {/* Timeline Post Cards Feed Placeholders */}
            <Paper
              variant="outlined"
              sx={{ borderRadius: "16px", borderColor: "divider", p: 3 }}
            >
              <Stack spacing={3}>
                {[1, 2].map((postIdx) => (
                  <Box
                    key={postIdx}
                    sx={{
                      pb: 3,
                      borderBottom: postIdx === 1 ? "1px solid" : "none",
                      borderColor: "divider",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Skeleton variant="circular" width={40} height={40} />
                      <Box sx={{ flex: 1 }}>
                        <Skeleton variant="text" width={140} height={20} />
                        <Skeleton variant="text" width={80} height={16} />
                      </Box>
                    </Box>
                    <Skeleton variant="text" width="95%" height={20} />
                    <Skeleton
                      variant="text"
                      width="70%"
                      height={20}
                      sx={{ mb: 2 }}
                    />
                    <Skeleton
                      variant="rectangular"
                      height={220}
                      sx={{ borderRadius: "10px", width: "100%" }}
                    />
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
