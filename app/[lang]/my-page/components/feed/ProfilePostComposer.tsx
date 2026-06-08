// app/[lang]/my-page/components/feed/ProfilePostComposer.tsx
import React from "react";
import {
  Paper,
  Box,
  Avatar,
  TextField,
  Stack,
  IconButton,
  Button,
  InputAdornment,
} from "@mui/material";
import {
  Image as ImageIcon,
  Videocam,
  InsertEmoticon,
  LocationOn,
  AddPhotoAlternate,
  RocketLaunch,
} from "@mui/icons-material";

interface ProfilePostComposerProps {
  avatarSrc: string;
  profileName: string;
  placeholder?: string;
}

export const ProfilePostComposer: React.FC<ProfilePostComposerProps> = ({
  avatarSrc,
  profileName,
  placeholder = "What's happening in the universe today?",
}) => {
  // 1. Emoji icon is filtered out from this array since it lives inside the text area now
  const composerActions = [
    { icon: <ImageIcon fontSize="small" />, title: "Photo" },
    { icon: <Videocam fontSize="small" />, title: "Video" },
    { icon: <LocationOn fontSize="small" />, title: "Location" },
    { icon: <AddPhotoAlternate fontSize="small" />, title: "Layout" },
  ];

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.5,
        mb: 4,
        borderRadius: "16px",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 2,
          width: "100%",
        }}
      >
        {/* Avatar block */}
        <Avatar
          src={avatarSrc}
          alt={profileName}
          sx={{
            width: 44,
            height: 44,
            display: { xs: "none", sm: "flex" },
          }}
        />

        <Box sx={{ flex: 1, width: "100%" }}>
          {/* Main Input Text Field Area */}
          <TextField
            fullWidth
            placeholder={placeholder}
            variant="outlined"
            size="medium"
            multiline
            minRows={2}
            maxRows={6}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                bgcolor: "background.default",
                pr: 1, // Reduces padding on the right to make the inline emoji icon fit cleanly
                "& fieldset": { borderColor: "divider" },
                "&:hover fieldset": { borderColor: "primary.light" },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  borderWidth: "1px",
                },
              },
            }}
            // 2. Insert the Emoji button directly inside the text input area on the right side
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ alignSelf: "flex-end", mb: 1 }}
                >
                  <IconButton
                    color="primary"
                    title="Emoji"
                    sx={{
                      width: 36,
                      height: 36,
                      "&:hover": { bgcolor: "rgba(25, 118, 210, 0.08)" },
                    }}
                  >
                    <InsertEmoticon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Bottom Control Toolbar Action Row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "stretch", sm: "center" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* 1. Attachment Utility Tools Group — Horizontally left-aligned on all breakpoints */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                justifyContent: "flex-start", // Left-aligned
                flexWrap: "wrap",
              }}
            >
              {composerActions.map((btn, idx) => (
                <IconButton
                  key={idx}
                  color="primary"
                  size="medium"
                  title={btn.title}
                  sx={{
                    width: 38,
                    height: 38,
                    bgcolor: "rgba(25, 118, 210, 0.02)",
                    "&:hover": {
                      bgcolor: "rgba(25, 118, 210, 0.08)",
                    },
                  }}
                >
                  {btn.icon}
                </IconButton>
              ))}
            </Stack>

            {/* Core Action Submit Button with RocketLaunch themed alternative */}
            <Button
              variant="contained"
              endIcon={<RocketLaunch />}
              sx={{
                borderRadius: "100px",
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: 700,
                letterSpacing: "0.01em",
                boxShadow: "none",
              }}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
