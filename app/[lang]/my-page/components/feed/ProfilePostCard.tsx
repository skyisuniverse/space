// app/[lang]/my-page/components/feed/ProfilePostCard.tsx
import React from "react";
import Link from "next/link";
import { Box, Avatar, Typography, IconButton, Grid } from "@mui/material";
import { ExpandMore, MoreVert, PlayArrow } from "@mui/icons-material";
import { ProfilePostActions } from "./ProfilePostActions";
import { PostMediaItem } from "../../types";

interface ProfilePostCardProps {
  id: string;
  avatarSrc: string;
  profileName: string;
  timeAgo: string;
  visibility?: string;
  text: string;
  likes: number;
  comments: number;
  shares: number;
  views: string;
  media: PostMediaItem[];
  isLastItem?: boolean; // Accept the optional boundary parameter state flag
}

export const ProfilePostCard: React.FC<ProfilePostCardProps> = ({
  id,
  avatarSrc,
  profileName,
  timeAgo,
  visibility,
  text,
  likes,
  comments,
  shares,
  views,
  media,
  isLastItem = false,
}) => {
  const getGridSize = (totalItems: number) => {
    if (totalItems === 1) return { xs: 12 };
    if (totalItems === 2) return { xs: 6 };
    if (totalItems === 4) return { xs: 6, sm: 3 };
    return { xs: 12, sm: 4 };
  };

  return (
    <Box
      sx={{
        p: 3,
        borderBottom: isLastItem ? "none" : "1px solid",
        borderColor: "divider",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Avatar
          src={avatarSrc}
          alt={profileName}
          sx={{ width: 40, height: 40 }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={700} variant="body2">
            {profileName}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {timeAgo} {visibility ? `• ${visibility}` : ""}
          </Typography>
        </Box>
        <IconButton size="small">
          {id === "post2" || id === "post5" || id === "post7" ? (
            <MoreVert fontSize="small" />
          ) : (
            <ExpandMore fontSize="small" />
          )}
        </IconButton>
      </Box>

      <Typography sx={{ mb: 2.5, lineHeight: 1.7, fontSize: "0.95rem" }}>
        {text}
      </Typography>

      {media.length > 0 && (
        <Grid container spacing={media.length === 2 ? 1.5 : 1}>
          {media.map((item, index) => (
            <Grid size={getGridSize(media.length)} key={index}>
              <Link href={item.targetHref} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    aspectRatio:
                      item.aspectRatio ||
                      (media.length === 2 ? "16/9" : "16/10"),
                    border: "1px solid",
                    borderColor: "divider",
                    transition:
                      "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                    "&:hover":
                      id === "post5" || id === "post7"
                        ? {
                            transform: "scale(1.01)",
                            boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                          }
                        : {
                            transform:
                              media.length === 4
                                ? "scale(1.04)"
                                : "scale(1.02)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                          },
                  }}
                >
                  <Box
                    component="img"
                    src={item.url}
                    alt={`${item.type} media ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: item.type === "video" ? "auto" : "100%",
                      aspectRatio: item.type === "video" ? "16/9" : "auto",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {item.type === "video" && (
                    <>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          bgcolor: "rgba(255,255,255,0.95)",
                          borderRadius: "50%",
                          p: media.length === 1 ? 1.75 : 0,
                          width: media.length === 1 ? "auto" : 36,
                          height: media.length === 1 ? "auto" : 36,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow:
                            media.length === 1
                              ? "0 4px 16px rgba(0,0,0,0.2)"
                              : "0 2px 10px rgba(0,0,0,0.15)",
                        }}
                      >
                        <PlayArrow
                          sx={{
                            fontSize: media.length === 1 ? 44 : 24,
                            color: "grey.900",
                          }}
                        />
                      </Box>

                      {item.duration && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 14,
                            right: 14,
                            bgcolor: "rgba(0,0,0,0.75)",
                            color: "white",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: "4px",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                          }}
                        >
                          {item.duration}
                        </Box>
                      )}
                    </>
                  )}
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}

      <ProfilePostActions
        likes={likes}
        comments={comments}
        shares={shares}
        views={views}
      />
    </Box>
  );
};
