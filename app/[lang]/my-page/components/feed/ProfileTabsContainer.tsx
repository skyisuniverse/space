// // app/[lang]/my-page/components/feed/ProfileTabsContainer.tsx
// import React from "react";
// import { Box, Paper, Tabs, Tab, IconButton } from "@mui/material";
// import { Search } from "@mui/icons-material";

// interface ProfileTabsContainerProps {
//   tabValue: number;
//   onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
//   children: React.ReactNode;
// }

// export const ProfileTabsContainer: React.FC<ProfileTabsContainerProps> = ({
//   tabValue,
//   onTabChange,
//   children,
// }) => {
//   return (
//     <Paper
//       variant="outlined"
//       sx={{
//         borderRadius: "16px",
//         borderColor: "divider",
//         bgcolor: "background.paper",
//         overflow: "hidden",
//       }}
//     >
//       {/* Header bar hosting the Tabs navigation switcher and Search action */}
//       <Box
//         sx={{
//           borderBottom: "1px solid",
//           borderColor: "divider",
//           px: 3,
//           bgcolor: "background.paper",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <Tabs
//             value={tabValue}
//             onChange={onTabChange}
//             sx={{
//               minHeight: 52,
//               "& .MuiTabs-indicator": {
//                 height: 3,
//                 borderRadius: "3px 3px 0 0",
//               },
//             }}
//           >
//             <Tab
//               label="Posts"
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 700,
//                 fontSize: "0.95rem",
//                 minHeight: 52,
//               }}
//             />
//             <Tab
//               label="Articles"
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 700,
//                 fontSize: "0.95rem",
//                 minHeight: 52,
//               }}
//             />
//           </Tabs>

//           <IconButton
//             size="small"
//             sx={{
//               border: "1px solid",
//               borderColor: "divider",
//               p: 1,
//               borderRadius: "50%",
//             }}
//           >
//             <Search fontSize="small" />
//           </IconButton>
//         </Box>
//       </Box>

//       {/* Render selected panels or dynamic timelines beneath the divider line */}
//       {children}
//     </Paper>
//   );
// };

// app/[lang]/my-page/components/feed/ProfileTabsContainer.tsx
"use client";

import React from "react";
import {
  Box,
  Paper,
  Tabs,
  Tab,
  IconButton,
  TextField,
  Collapse,
  InputAdornment,
} from "@mui/material";
import { Search, Close } from "@mui/icons-material";

interface ProfileTabsContainerProps {
  tabValue: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  children: React.ReactNode;
}

export const ProfileTabsContainer: React.FC<ProfileTabsContainerProps> = ({
  tabValue,
  onTabChange,
  searchQuery,
  onSearchChange,
  children,
}) => {
  const [isSearching, setIsSearching] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const handleToggleSearch = React.useCallback(() => {
    if (isSearching) {
      setIsTransitioning(true);
      setIsSearching(false);

      // ⚡ Fix: Enforce a temporary layout timeout block to allow the horizontal
      // bar animation to finish sliding completely closed before resetting the lists
      setTimeout(() => {
        onSearchChange("");
        setIsTransitioning(false);
      }, 300); // Matches default MUI Collapse animation duration window
    } else {
      setIsSearching(true);
      setTimeout(() => searchInputRef.current?.focus(), 150);
    }
  }, [isSearching, onSearchChange]);

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: "16px",
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
        // ⚡ Fix: Locks min-height boundaries dynamically during transitions
        // to prevent mobile viewport scroll engines from jumping up and down
        minHeight: isTransitioning ? "600px" : "auto",
        transition: "min-height 0.2s ease",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          px: isSearching ? 0 : 3,
          bgcolor: "background.paper",
          minHeight: 53,
          display: "flex",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        {/* Dynamic Edge-to-Edge M3 Search Block */}
        <Collapse
          in={isSearching}
          orientation="horizontal"
          unmountOnExit
          sx={{
            width: "100%",
            "& .MuiCollapse-wrapper": { width: "100%" },
          }}
        >
          <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              variant="standard"
              inputRef={searchInputRef}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={
                tabValue === 0
                  ? "Search timeline posts..."
                  : "Search published articles..."
              }
              sx={{
                "& .MuiInput-root": {
                  height: 52,
                  px: 3,
                  fontSize: "0.95rem",
                  width: "100%",
                  "&:before, &:after": { display: "none" },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end" sx={{ pr: 1 }}>
                    <IconButton size="small" onClick={handleToggleSearch}>
                      <Close fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Collapse>

        {/* Default Tab Header Row Layout */}
        {!isSearching && (
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
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

            <Box sx={{ flexGrow: 1 }} />

            <IconButton
              size="small"
              onClick={handleToggleSearch}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                p: 1,
                borderRadius: "50%",
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: "action.hover",
                  borderColor: "text.primary",
                },
              }}
            >
              <Search fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Render children timeline panels */}
      {children}
    </Paper>
  );
};
