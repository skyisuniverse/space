// app/[lang]/my-page/components/header/ProfileActions.tsx
import React from "react";
import { Stack, Button } from "@mui/material";
import { Edit, BarChart } from "@mui/icons-material";

export const ProfileActions: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        pb: { md: 1.5 },
        width: { xs: "100%", sm: "auto" },
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        startIcon={<Edit />}
        size="large"
        sx={{
          borderRadius: "100px",
          px: 3.5,
          py: 1.2,
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
          },
        }}
      >
        Edit
      </Button>
      <Button
        variant="outlined"
        startIcon={<BarChart />}
        size="large"
        sx={{
          borderRadius: "100px",
          px: 3.5,
          py: 1.2,
          textTransform: "none",
          fontWeight: 600,
          borderColor: "divider",
          "&:hover": {
            bgcolor: "action.hover",
            borderColor: "text.primary",
          },
        }}
      >
        Statistics
      </Button>
    </Stack>
  );
};
