// app/[lang]/my-page/page.tsx
"use client";

import * as React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  Paper,
  IconButton,
  TextField,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Edit,
  BarChart,
  PlayArrow,
  Search,
  ExpandMore,
  Image as ImageIcon,
  Videocam,
  InsertEmoticon,
  LocationOn,
  MoreVert,
  AddPhotoAlternate,
  Cake,
  LocationCity,
  RocketLaunch,
  People,
  RssFeed,
  Collections,
  Campaign,
  VideoLibrary,
  MusicNote,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  Visibility,
} from "@mui/icons-material";
import { useNavigation } from "@/app/[lang]/contexts/navigation-context";
import { profile, starshipImages } from "./data";

export default function MyPage() {
  const { dict } = useNavigation();
  const params = useParams();
  const lang = (params?.lang as string) || "en";

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Human-friendly translations mapping using the provided `dict` or fallback
  const labelFriends = dict.friends || "Friends";
  const labelPhotos = dict.photos || "Photos";
  const labelMusic = dict.music || "Audios";
  const labelVideo = dict.video || "Videos";

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* 1. HERO COVER & OVERLAPPING AVATAR PROFILE HEADER SECTION */}
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
        {/* Cover photo */}
        <Box
          sx={{
            height: { xs: 180, sm: 260, md: 320 },
            width: "100%",
            position: "relative",
            overflow: "hidden",
            bgcolor: "grey.200",
          }}
        >
          <Box
            component="img"
            src={starshipImages.profile}
            alt="Starship Cover"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
          {/* Subtle overlay gradient to make cover text readable if needed */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 60%)",
            }}
          />
        </Box>

        {/* Profile Details Container (Overlapping) */}
        <Box
          sx={{
            px: { xs: 2, sm: 4 },
            pb: 4,
            pt: 2,
            position: "relative",
          }}
        >
          {/* Row holding Overlapping Avatar + Profile Bio + Primary Action buttons */}
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
            {/* Avatar block with dynamic double-border highlight */}
            <Link href={`/${lang}/profile`} style={{ textDecoration: "none" }}>
              <Avatar
                src={starshipImages.avatar}
                alt={profile.name}
                sx={{
                  width: { xs: 120, sm: 150, md: 170 },
                  height: { xs: 120, sm: 150, md: 170 },
                  border: "6px solid",
                  borderColor: "background.paper",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  mt: { xs: -8, sm: -11, md: -12 }, // Negative top margin pulls ONLY the avatar up over the cover
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "scale(1.04)",
                  },
                }}
              />
            </Link>

            {/* Profile Information details */}
            <Box sx={{ flexGrow: 1, pb: { md: 1.5 }, pt: { xs: 1, md: 0 } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 2,
                  mb: 1.5,
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight={800}
                  sx={{ letterSpacing: "-0.02em" }}
                >
                  {profile.name}
                </Typography>

                {/* Highly-styled M3 online indicator capsule */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "rgba(74, 222, 128, 0.12)",
                    border: "1px solid rgba(74, 222, 128, 0.25)",
                    px: 1.75,
                    py: 0.5,
                    borderRadius: "100px",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: "#4ade80",
                      borderRadius: "50%",
                      boxShadow: "0 0 0 4px rgba(74, 222, 128, 0.2)",
                    }}
                  />
                  <Typography
                    variant="caption"
                    color="success.main"
                    fontWeight={700}
                    sx={{ letterSpacing: "0.02em" }}
                  >
                    ONLINE
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.6,
                  maxWidth: 680,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                {profile.status}
              </Typography>
            </Box>

            {/* Edit / Statistics actions styled with M3 pill design */}
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
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Symmetrical info footer row: Birthday, City, Activity details */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              {
                icon: <Cake sx={{ color: "primary.main" }} />,
                label: "Birthday",
                value: profile.birthday,
                href: `/${lang}/profile/birthday`,
              },
              {
                icon: <LocationCity sx={{ color: "primary.main" }} />,
                label: "City",
                value: profile.city,
                href: `/${lang}/profile/city`,
              },
              {
                icon: <RocketLaunch sx={{ color: "primary.main" }} />,
                label: "Activity",
                value: profile.activity,
                href: `/${lang}/profile/activity`,
                highlight: true,
              },
            ].map((detail, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
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
                    transition:
                      "border-color 0.25s ease, background-color 0.25s ease",
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
                    {detail.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      {detail.label}
                    </Typography>
                    <Link href={detail.href} style={{ textDecoration: "none" }}>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        color={
                          detail.highlight ? "primary.main" : "text.primary"
                        }
                        sx={{
                          "&:hover": {
                            color: detail.highlight
                              ? "primary.dark"
                              : "primary.main",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {detail.value}
                      </Typography>
                    </Link>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Quick Counter Grid: interactive, customized M3 chips layout */}
          <Grid container spacing={2}>
            {[
              {
                count: "450",
                label: labelFriends,
                href: `/${lang}/friends`,
                icon: <People sx={{ color: "primary.main" }} />,
              },
              {
                count: "378",
                label: "Subscribers",
                href: `/${lang}/subscribers`,
                icon: <RssFeed sx={{ color: "primary.main" }} />,
              },
              {
                count: "153",
                label: labelPhotos,
                href: `/${lang}/photos`,
                icon: <Collections sx={{ color: "primary.main" }} />,
              },
              {
                count: "32",
                label: "Mentions",
                href: `/${lang}/mentions`,
                icon: <Campaign sx={{ color: "primary.main" }} />,
              },
              {
                count: "230",
                label: labelVideo,
                href: `/${lang}/videos`,
                icon: <VideoLibrary sx={{ color: "primary.main" }} />,
              },
              {
                count: "10k",
                label: labelMusic,
                href: `/${lang}/audios`,
                icon: <MusicNote sx={{ color: "primary.main" }} />,
              },
            ].map((stat, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                <Link
                  href={stat.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "16px",
                      border: "1px solid",
                      borderColor: "divider",
                      textAlign: "center",
                      bgcolor: "background.paper",
                      transition:
                        "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s ease, box-shadow 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "primary.main",
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 1 }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      fontWeight={800}
                      color="primary.main"
                    >
                      {stat.count}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={500}
                      textTransform="capitalize"
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <Grid container spacing={4}>
        {/* LEFT COLUMN — 1/3 (33%) of width on desktop */}
        <Grid size={{ xs: 12, md: 4 }}>
          {/* A. ACHIEVEMENTS AREA */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 4,
              borderRadius: "16px",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2.5,
              }}
            >
              <Link
                href={`/${lang}/achievements`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  sx={{
                    fontFamily: "var(--font-roboto)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "color 0.2s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Achievements{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", fontWeight: 400 }}
                  >
                    310
                  </Box>
                </Typography>
              </Link>
            </Box>
            <Grid container spacing={1.5}>
              {starshipImages.achievements.map((url, i) => (
                <Grid size={4} key={i}>
                  <Link
                    href={`/${lang}/achievements/${i + 1}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: "12px",
                        overflow: "hidden",
                        aspectRatio: "1/1",
                        bgcolor: "grey.100",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Box
                        component="img"
                        src={url}
                        alt={`Achievement ${i + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition:
                            "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                        }}
                      />
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* B. FRIENDS LIST AREA */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 4,
              borderRadius: "16px",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2.5,
              }}
            >
              <Link
                href={`/${lang}/friends`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  sx={{
                    fontFamily: "var(--font-roboto)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "color 0.2s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {labelFriends}{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", fontWeight: 400 }}
                  >
                    450
                  </Box>
                </Typography>
              </Link>
            </Box>
            <Grid container spacing={1.5}>
              {starshipImages.friends.map((url, i) => (
                <Grid size={4} key={i}>
                  <Link
                    href={`/${lang}/friends/${i + 1}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        src={url}
                        alt={`Friend ${i + 1}`}
                        sx={{
                          width: "100%",
                          height: "auto",
                          aspectRatio: "1/1",
                          borderRadius: "16px", // M3 styled soft rounded corners instead of circles
                          border: "1px solid",
                          borderColor: "divider",
                          transition:
                            "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                          "&:hover": {
                            transform: "scale(1.06)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                          },
                        }}
                      />
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* C. SUBSCRIPTIONS LIST AREA */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 4,
              borderRadius: "16px",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <Link
                href={`/${lang}/subscriptions`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  sx={{
                    fontFamily: "var(--font-roboto)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "color 0.2s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Subscriptions{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", fontWeight: 400 }}
                  >
                    230
                  </Box>
                </Typography>
              </Link>
            </Box>
            <List dense disablePadding>
              {[
                {
                  name: "Space Exploration & Habitation",
                  img: starshipImages.subscriptions.SpaceX,
                  id: 1,
                },
                {
                  name: "Neuro-interfaces & BCIs",
                  img: starshipImages.subscriptions.Neuralink,
                  id: 2,
                },
                {
                  name: "AI & Robotics",
                  img: starshipImages.subscriptions.Tesla,
                  id: 3,
                },
                {
                  name: "Nanotechnology",
                  img: starshipImages.subscriptions.xAI,
                  id: 4,
                },
              ].map((sub) => (
                <ListItem
                  key={sub.id}
                  component={Link}
                  href={`/${lang}/subscriptions/${sub.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  sx={{
                    px: 1.5,
                    py: 1,
                    my: 0.5,
                    borderRadius: "12px",
                    transition:
                      "background-color 0.25s ease, transform 0.25s ease",
                    "&:hover": {
                      bgcolor: "action.hover",
                      transform: "translateX(6px)",
                    },
                  }}
                >
                  <ListItemAvatar sx={{ minWidth: 46 }}>
                    <Avatar
                      src={sub.img}
                      sx={{ width: 34, height: 34, borderRadius: "10px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={sub.name}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* D. RESPONSIVE MOBILE PHOTOS AREA */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Paper
              variant="outlined"
              sx={{
                p: 3,
                mb: 4,
                borderRadius: "16px",
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2.5,
                }}
              >
                <Link
                  href={`/${lang}/photos`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{
                      fontFamily: "var(--font-roboto)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      transition: "color 0.2s ease",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    My Photos{" "}
                    <Box
                      component="span"
                      sx={{ color: "text.secondary", fontWeight: 400 }}
                    >
                      151
                    </Box>
                  </Typography>
                </Link>
              </Box>
              <Grid container spacing={1.5}>
                {starshipImages.photos.map((url, i) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={i}>
                    <Link
                      href={`/${lang}/photos/${i + 1}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          borderRadius: "12px",
                          overflow: "hidden",
                          aspectRatio: "1/1",
                        }}
                      >
                        <Box
                          component="img"
                          src={url}
                          alt={`My Photo ${i + 1}`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.08)",
                            },
                          }}
                        />
                      </Box>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>

          {/* E. AUDIOS LIST AREA */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 4,
              borderRadius: "16px",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <Link
                href={`/${lang}/audios`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  sx={{
                    fontFamily: "var(--font-roboto)",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {labelMusic}
                </Typography>
              </Link>
            </Box>
            <List dense disablePadding>
              {[
                { title: "Space-based AI", duration: "3:45" },
                { title: "Nanotech R&D", duration: "12:20" },
                { title: "Rocket Science 101", duration: "8:10" },
              ].map((audio, i) => (
                <ListItem
                  key={i}
                  disableGutters
                  sx={{
                    py: 0.5,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      borderRadius: "12px",
                      px: 1,
                      py: 0.75,
                      transition:
                        "background-color 0.25s ease, transform 0.25s ease",
                      "&:hover": {
                        bgcolor: "action.hover",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        mr: 1.5,
                        bgcolor: "primary.light",
                        color: "primary.contrastText",
                        width: 32,
                        height: 32,
                        "&:hover": {
                          bgcolor: "primary.main",
                        },
                      }}
                    >
                      <PlayArrow fontSize="small" />
                    </IconButton>
                    <Box
                      component={Link}
                      href={`/${lang}/audios?title=${encodeURIComponent(audio.title)}`}
                      sx={{
                        flex: 1,
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        overflow: "hidden",
                      }}
                    >
                      <ListItemText
                        primary={audio.title}
                        primaryTypographyProps={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          noWrap: true,
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ ml: 1, fontWeight: 500 }}
                      >
                        {audio.duration}
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* F. VIDEOS PREVIEW AREA */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: "16px",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2.5,
              }}
            >
              <Link
                href={`/${lang}/videos`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  sx={{
                    fontFamily: "var(--font-roboto)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "color 0.2s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {labelVideo}{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", fontWeight: 400 }}
                  >
                    130
                  </Box>
                </Typography>
              </Link>
            </Box>

            <Stack spacing={2.5}>
              {[1, 2].map((i) => (
                <Link
                  key={i}
                  href={`/${lang}/videos/${i}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "14px",
                      overflow: "hidden",
                      border: "1px solid",
                      borderColor: "divider",
                      transition:
                        "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={
                        i === 1
                          ? starshipImages.videos.preview1
                          : starshipImages.videos.preview2
                      }
                      alt={`Video Preview ${i}`}
                      sx={{
                        width: "100%",
                        aspectRatio: "16/9",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    {/* Standardized M3 Play overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "rgba(255,255,255,0.95)",
                        borderRadius: "50%",
                        width: 44,
                        height: 44,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                      }}
                    >
                      <PlayArrow sx={{ fontSize: 28, color: "grey.900" }} />
                    </Box>

                    {/* Subtitle overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                        color: "white",
                        px: 2,
                        py: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Typography
                        variant="caption"
                        fontWeight={600}
                        sx={{
                          flex: 1,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          letterSpacing: "0.01em",
                        }}
                      >
                        Space Habitation {i}
                      </Typography>

                      <Box
                        sx={{
                          bgcolor: "rgba(0,0,0,0.65)",
                          color: "white",
                          px: 1,
                          py: 0.25,
                          borderRadius: "4px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        3:12
                      </Box>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* RIGHT COLUMN — 2/3 (67%) of width on desktop */}
        <Grid size={{ xs: 12, md: 8 }}>
          {/* A. RESPONSIVE DESKTOP PHOTOS AREA */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Paper
              variant="outlined"
              sx={{
                p: 3,
                mb: 4,
                borderRadius: "16px",
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2.5,
                }}
              >
                <Link
                  href={`/${lang}/photos`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{
                      fontFamily: "var(--font-roboto)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      transition: "color 0.2s ease",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    My Photos{" "}
                    <Box
                      component="span"
                      sx={{ color: "text.secondary", fontWeight: 400 }}
                    >
                      151
                    </Box>
                  </Typography>
                </Link>
              </Box>
              <Grid container spacing={2}>
                {starshipImages.photos.map((url, i) => (
                  <Grid size={3} key={i}>
                    <Link
                      href={`/${lang}/photos/${i + 1}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          borderRadius: "12px",
                          overflow: "hidden",
                          aspectRatio: "1/1",
                          border: "1px solid",
                          borderColor: "divider",
                          transition:
                            "transform 0.25s ease, box-shadow 0.25s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={url}
                          alt={`My Photo ${i + 1}`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>

          {/* B. POST CREATION COMPOSER AREA */}
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
                src={starshipImages.avatar}
                alt={profile.name}
                sx={{
                  width: 44,
                  height: 44,
                  display: { xs: "none", sm: "flex" },
                }}
              />

              <Box sx={{ flex: 1, width: "100%" }}>
                <TextField
                  fullWidth
                  placeholder="What's happening in the universe today?"
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
                        {[
                          {
                            icon: <ImageIcon fontSize="small" />,
                            title: "Photo",
                          },
                          {
                            icon: <Videocam fontSize="small" />,
                            title: "Video",
                          },
                          {
                            icon: <InsertEmoticon fontSize="small" />,
                            title: "Emoji",
                          },
                          {
                            icon: <LocationOn fontSize="small" />,
                            title: "Location",
                          },
                          {
                            icon: <AddPhotoAlternate fontSize="small" />,
                            title: "Layout",
                          },
                        ].map((btn, idx) => (
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

          {/* C. TABS SWITCHER FOR FEED / ARTICLES */}
          <Paper
            variant="outlined"
            sx={{
              borderRadius: "16px",
              borderColor: "divider",
              bgcolor: "background.paper",
              overflow: "hidden",
            }}
          >
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
                  onChange={handleTabChange}
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

            {/* FEED CONTENTS */}
            {tabValue === 0 ? (
              <Box>
                {/* POST 1 - 3 images aligned symmetrically */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
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
                    <Avatar
                      src={starshipImages.avatar}
                      alt={profile.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={700} variant="body2">
                        {profile.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        2 hours ago • Public
                      </Typography>
                    </Box>
                    <IconButton size="small">
                      <ExpandMore fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{ mb: 2.5, lineHeight: 1.7, fontSize: "0.95rem" }}
                  >
                    Nano-assembly, stable Quantum Computing and space-based AI
                    are the key to affordable space-exploration and habitation.
                    It gives the possibility for people to independently and
                    safely explore and inhabit space.
                  </Typography>

                  {/* High Quality Image Grid: Symmetrical Multi-Image Layout */}
                  <Grid container spacing={1}>
                    {starshipImages.postImages.post1.map((url, i) => (
                      <Grid size={{ xs: 12, sm: 4 }} key={i}>
                        <Link
                          href={`/${lang}/photos/${i + 1}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            sx={{
                              borderRadius: "10px",
                              overflow: "hidden",
                              aspectRatio: "16/10",
                              border: "1px solid",
                              borderColor: "divider",
                              transition:
                                "transform 0.2s ease, box-shadow 0.2s ease",
                              "&:hover": {
                                transform: "scale(1.02)",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={url}
                              alt={`Telemetry launch ${i + 1}`}
                              sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Social Interaction Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                      pt: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        startIcon={<FavoriteBorder />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        124
                      </Button>
                      <Button
                        size="small"
                        startIcon={<ChatBubbleOutline />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        14
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Share />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        3
                      </Button>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{ alignItems: "center", color: "text.secondary" }}
                    >
                      <Visibility fontSize="inherit" />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        3.4k
                      </Typography>
                    </Stack>
                  </Box>
                </Box>

                {/* POST 2 - 2 video previews Side-by-Side */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
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
                    <Avatar
                      src={starshipImages.avatar}
                      alt={profile.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={700} variant="body2">
                        {profile.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        2 days ago
                      </Typography>
                    </Box>
                    <IconButton size="small">
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{ mb: 2.5, lineHeight: 1.7, fontSize: "0.95rem" }}
                  >
                    Solar Dyson spheres and nano-assembly are the key to Space
                    habitation. This is the key to getting Solar system
                    inhabited.
                  </Typography>

                  <Grid container spacing={1.5}>
                    {[
                      {
                        index: 1,
                        img: starshipImages.postImages.post2.preview1,
                      },
                      {
                        index: 2,
                        img: starshipImages.postImages.post2.preview2,
                      },
                    ].map((vid) => (
                      <Grid size={6} key={vid.index}>
                        <Link
                          href={`/${lang}/videos/${vid.index}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              borderRadius: "10px",
                              overflow: "hidden",
                              border: "1px solid",
                              borderColor: "divider",
                              transition:
                                "transform 0.25s ease, box-shadow 0.25s ease",
                              "&:hover": {
                                transform: "scale(1.02)",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={vid.img}
                              alt={`Simulation Refuel Video ${vid.index}`}
                              sx={{
                                width: "100%",
                                aspectRatio: "16/9",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                bgcolor: "rgba(255,255,255,0.95)",
                                borderRadius: "50%",
                                width: 36,
                                height: 36,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                              }}
                            >
                              <PlayArrow
                                sx={{ fontSize: 24, color: "grey.900" }}
                              />
                            </Box>
                          </Box>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Social Interaction Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                      pt: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        startIcon={<FavoriteBorder />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        89
                      </Button>
                      <Button
                        size="small"
                        startIcon={<ChatBubbleOutline />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        6
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Share />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        8
                      </Button>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{ alignItems: "center", color: "text.secondary" }}
                    >
                      <Visibility fontSize="inherit" />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        2.1k
                      </Typography>
                    </Stack>
                  </Box>
                </Box>

                {/* POST 3 - Single Image */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
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
                    <Avatar
                      src={starshipImages.avatar}
                      alt={profile.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={700} variant="body2">
                        {profile.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        11 hours ago
                      </Typography>
                    </Box>
                    <IconButton size="small">
                      <ExpandMore fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{ mb: 2.5, lineHeight: 1.7, fontSize: "0.95rem" }}
                  >
                    Quantum AI data-center caught in golden hour light during
                    the latest structural reformation test. The future is
                    looking brighter than ever.
                  </Typography>

                  <Link
                    href={`/${lang}/photos/3`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid",
                        borderColor: "divider",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.01)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={starshipImages.postImages.post3[0]}
                        alt="Golden Hour Starship"
                        sx={{
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>
                  </Link>

                  {/* Social Interaction Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                      pt: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        startIcon={<FavoriteBorder />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        210
                      </Button>
                      <Button
                        size="small"
                        startIcon={<ChatBubbleOutline />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        18
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Share />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        11
                      </Button>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{ alignItems: "center", color: "text.secondary" }}
                    >
                      <Visibility fontSize="inherit" />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        4.8k
                      </Typography>
                    </Stack>
                  </Box>
                </Box>

                {/* POST 4 - 4 grid images */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
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
                    <Avatar
                      src={starshipImages.avatar}
                      alt={profile.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={700} variant="body2">
                        {profile.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Yesterday
                      </Typography>
                    </Box>
                    <IconButton size="small">
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{ mb: 2.5, lineHeight: 1.7, fontSize: "0.95rem" }}
                  >
                    Quick look at the new Quantum satellites prototype rolling
                    out of the factory. Reusability is the name of the game.
                  </Typography>

                  <Grid container spacing={1}>
                    {starshipImages.postImages.post4.map((url, i) => (
                      <Grid size={{ xs: 6, sm: 3 }} key={i}>
                        <Link
                          href={`/${lang}/photos/${i + 10}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            sx={{
                              borderRadius: "10px",
                              overflow: "hidden",
                              aspectRatio: "16/10",
                              border: "1px solid",
                              borderColor: "divider",
                              transition:
                                "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease",
                              "&:hover": {
                                transform: "scale(1.04)",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={url}
                              alt={`Factory rollout ${i + 1}`}
                              sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Social Interaction Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                      pt: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        startIcon={<FavoriteBorder />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        156
                      </Button>
                      <Button
                        size="small"
                        startIcon={<ChatBubbleOutline />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        10
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Share />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        4
                      </Button>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{ alignItems: "center", color: "text.secondary" }}
                    >
                      <Visibility fontSize="inherit" />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        3.2k
                      </Typography>
                    </Stack>
                  </Box>
                </Box>

                {/* POST 5 - Single video Player Preview */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
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
                    <Avatar
                      src={starshipImages.avatar}
                      alt={profile.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={700} variant="body2">
                        {profile.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        2 days ago
                      </Typography>
                    </Box>
                    <IconButton size="small">
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{ mb: 2.5, lineHeight: 1.7, fontSize: "0.95rem" }}
                  >
                    Testing the new AI Satellite on the test stand. The
                    engineering behind space-based web & AI hosting is
                    mind-blowing.
                  </Typography>

                  <Link
                    href={`/${lang}/videos/5`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid",
                        borderColor: "divider",
                        transition:
                          "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.01)",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={starshipImages.postImages.post5}
                        alt="Heat shield simulation"
                        sx={{
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          bgcolor: "rgba(255,255,255,0.95)",
                          borderRadius: "50%",
                          p: 1.75,
                          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                        }}
                      >
                        <PlayArrow sx={{ fontSize: 44, color: "grey.900" }} />
                      </Box>
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
                        1:45
                      </Box>
                    </Box>
                  </Link>

                  {/* Social Interaction Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                      pt: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        startIcon={<FavoriteBorder />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        142
                      </Button>
                      <Button
                        size="small"
                        startIcon={<ChatBubbleOutline />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        9
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Share />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        6
                      </Button>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{ alignItems: "center", color: "text.secondary" }}
                    >
                      <Visibility fontSize="inherit" />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        2.7k
                      </Typography>
                    </Stack>
                  </Box>
                </Box>

                {/* POST 6 - 2 images (Heat shield) */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
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
                    <Avatar
                      src={starshipImages.avatar}
                      alt={profile.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={700} variant="body2">
                        {profile.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        3 days ago
                      </Typography>
                    </Box>
                    <IconButton size="small">
                      <ExpandMore fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{ mb: 2.5, lineHeight: 1.7, fontSize: "0.95rem" }}
                  >
                    The team just finished the latest wormhole transport
                    installation. Every iteration brings us one step closer to
                    the stars.
                  </Typography>

                  <Grid container spacing={1.5}>
                    {starshipImages.postImages.post6.map((url, i) => (
                      <Grid size={6} key={i}>
                        <Link
                          href={`/${lang}/photos/${i + 20}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            sx={{
                              borderRadius: "10px",
                              overflow: "hidden",
                              aspectRatio: "16/10",
                              border: "1px solid",
                              borderColor: "divider",
                              transition:
                                "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease",
                              "&:hover": {
                                transform: "scale(1.02)",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={url}
                              alt={`Tile installment ${i + 1}`}
                              sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Social Interaction Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                      pt: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        startIcon={<FavoriteBorder />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        98
                      </Button>
                      <Button
                        size="small"
                        startIcon={<ChatBubbleOutline />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        4
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Share />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        2
                      </Button>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{ alignItems: "center", color: "text.secondary" }}
                    >
                      <Visibility fontSize="inherit" />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        1.9k
                      </Typography>
                    </Stack>
                  </Box>
                </Box>

                {/* POST 7 - Single Video (Orbital refueling) */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
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
                    <Avatar
                      src={starshipImages.avatar}
                      alt={profile.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={700} variant="body2">
                        {profile.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        4 days ago
                      </Typography>
                    </Box>
                    <IconButton size="small">
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{ mb: 2.5, lineHeight: 1.7, fontSize: "0.95rem" }}
                  >
                    After weeks of simulations we finally achieved stable
                    orbital refueling in vacuum conditions. This is a historic
                    milestone for Mars habitation. The implications for future
                    missions are enormous.
                  </Typography>

                  <Link
                    href={`/${lang}/videos/7`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid",
                        borderColor: "divider",
                        transition:
                          "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.01)",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={starshipImages.postImages.post7}
                        alt="Vacuum orbital simulator"
                        sx={{
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          bgcolor: "rgba(255,255,255,0.95)",
                          borderRadius: "50%",
                          p: 1.75,
                          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                        }}
                      >
                        <PlayArrow sx={{ fontSize: 44, color: "grey.900" }} />
                      </Box>
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
                        3:12
                      </Box>
                    </Box>
                  </Link>

                  {/* Social Interaction Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                      pt: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        startIcon={<FavoriteBorder />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        312
                      </Button>
                      <Button
                        size="small"
                        startIcon={<ChatBubbleOutline />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        27
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Share />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        19
                      </Button>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{ alignItems: "center", color: "text.secondary" }}
                    >
                      <Visibility fontSize="inherit" />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        5.6k
                      </Typography>
                    </Stack>
                  </Box>
                </Box>

                {/* POST 8 - Single Image (Telemetry overview) */}
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar
                      src={starshipImages.avatar}
                      alt={profile.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={700} variant="body2">
                        {profile.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        5 days ago
                      </Typography>
                    </Box>
                    <IconButton size="small">
                      <ExpandMore fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{ mb: 2.5, lineHeight: 1.7, fontSize: "0.95rem" }}
                  >
                    The new Neuromorphic chip prototype is looking incredible.
                    Every neuron, every synapse, every sensor is a testament to
                    what humanity can achieve when we work together toward the
                    stars.
                  </Typography>

                  <Link
                    href={`/${lang}/photos/8`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid",
                        borderColor: "divider",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.01)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={starshipImages.postImages.post8}
                        alt="Starship Prototype details"
                        sx={{
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>
                  </Link>

                  {/* Social Interaction Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                      pt: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        startIcon={<FavoriteBorder />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        187
                      </Button>
                      <Button
                        size="small"
                        startIcon={<ChatBubbleOutline />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        12
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Share />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        4
                      </Button>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{ alignItems: "center", color: "text.secondary" }}
                    >
                      <Visibility fontSize="inherit" />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        3.0k
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            ) : (
              /* ARTICLES TAB CONTENTS */
              <Box sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight={800}
                  sx={{ mb: 3, letterSpacing: "-0.015em" }}
                >
                  Latest Articles
                </Typography>

                <Stack spacing={4}>
                  {[
                    {
                      id: 1,
                      title:
                        "How Nanotech Will Change Interplanetary Travel Forever",
                      subtitle: "May 10, 2026 • 8 min read",
                      desc: "The latest nano-assembly test proved that full reusability is not just a dream — it's happening now. Here's what it means for Solar System missions.",
                    },
                    {
                      id: 2,
                      title:
                        "Space-based AI & web-hosting for personal Space Habitation",
                      subtitle: "May 8, 2026 • 6 min read",
                      desc: "We just migrated our entire Space Habitation telemetry platform. The new setup eliminated all styling issues.",
                    },
                    {
                      id: 3,
                      title:
                        "Sourcing materials for nano-assembly from raw matter",
                      subtitle: "May 5, 2026 • 12 min read",
                      desc: "Detailed breakdown of the latest successful asteroid mining and Space station assembly.",
                    },
                  ].map((art) => (
                    <Box
                      key={art.id}
                      component={Link}
                      href={`/${lang}/articles/${art.id}`}
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        color: "inherit",
                        transition:
                          "background-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                        borderRadius: "14px",
                        p: 2.5,
                        border: "1px solid",
                        borderColor: "divider",
                        "&:hover": {
                          bgcolor: "action.hover",
                          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                          transform: "translateY(-2px)",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        fontWeight={700}
                        sx={{ fontSize: "1.1rem", lineHeight: 1.4 }}
                      >
                        {art.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mb: 1.5, fontWeight: 500 }}
                      >
                        {art.subtitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {art.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
