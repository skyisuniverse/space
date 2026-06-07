// app/[lang]/my-page/components/feed/ProfilePostComposer.tsx
import React from "react";
import {
  Paper,
  Box,
  Avatar,
  TextField,
  Stack,
  IconButton,
} from "@mui/material";
import {
  Image as ImageIcon,
  Videocam,
  InsertEmoticon,
  LocationOn,
  AddPhotoAlternate,
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
  // Configured actions list inside the component scope to keep template clean
  const composerActions = [
    { icon: <ImageIcon fontSize="small" />, title: "Photo" },
    { icon: <Videocam fontSize="small" />, title: "Video" },
    { icon: <InsertEmoticon fontSize="small" />, title: "Emoji" },
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
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
        }}
      >
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
          <TextField
            fullWidth
            placeholder={placeholder}
            variant="outlined"
            size="medium"
            multiline
            minRows={1}
            maxRows={4}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                bgcolor: "background.default",
                "& fieldset": {
                  borderColor: "divider",
                },
                "&:hover fieldset": {
                  borderColor: "primary.light",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  borderWidth: "1px",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{
                    alignItems: "center",
                    mr: -0.5,
                    mt: { xs: 1, sm: 0 },
                  }}
                >
                  {composerActions.map((btn, idx) => (
                    <IconButton
                      key={idx}
                      color="primary"
                      size="small"
                      title={btn.title}
                      sx={{
                        width: 32,
                        height: 32,
                        "&:hover": {
                          bgcolor: "rgba(25, 118, 210, 0.08)",
                        },
                      }}
                    >
                      {btn.icon}
                    </IconButton>
                  ))}
                </Stack>
              ),
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};
