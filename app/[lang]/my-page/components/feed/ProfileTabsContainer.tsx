// app/[lang]/my-page/components/feed/ProfileTabsContainer.tsx
import React from "react";
import { Box, Paper, Tabs, Tab, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

interface ProfileTabsContainerProps {
  tabValue: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  children: React.ReactNode;
}

export const ProfileTabsContainer: React.FC<ProfileTabsContainerProps> = ({
  tabValue,
  onTabChange,
  children,
}) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: "16px",
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
      }}
    >
      {/* Header bar hosting the Tabs navigation switcher and Search action */}
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          px: 3,
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Tabs
            value={tabValue}
            onChange={onTabChange}
            sx={{
              minHeight: 52,
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
            }}
          >
            <Tab
              label="Posts"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                minHeight: 52,
              }}
            />
            <Tab
              label="Articles"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                minHeight: 52,
              }}
            />
          </Tabs>

          <IconButton
            size="small"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              p: 1,
              borderRadius: "50%",
            }}
          >
            <Search fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Render selected panels or dynamic timelines beneath the divider line */}
      {children}
    </Paper>
  );
};
