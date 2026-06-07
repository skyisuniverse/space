// app/[lang]/my-page/components/header/ProfileMainRow.tsx
import React from "react";
import { Box } from "@mui/material";

interface ProfileMainRowProps {
  children: React.ReactNode;
}

export const ProfileMainRow: React.FC<ProfileMainRowProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-end" },
        gap: { xs: 2.5, md: 4 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {children}
    </Box>
  );
};
