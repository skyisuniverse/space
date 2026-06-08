// app/[lang]/music/_components/MusicViewOrchestrator.tsx
"use client";

import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  List,
  Collapse,
  Stack,
  Pagination,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Search, Close, ArrowBack, QueueMusic } from "@mui/icons-material";
import Link from "next/link";
import { AudioTrackItem, MusicLabels } from "../types";
import { AudioListRowItem } from "./AudioListRowItem";

interface MusicViewOrchestratorProps {
  tracks: AudioTrackItem[];
  lang: string;
  labels: MusicLabels;
}

export const MusicViewOrchestrator: React.FC<MusicViewOrchestratorProps> = ({
  tracks,
  lang,
  labels,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [debouncedQuery, setDebouncedQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  // ⚡ Responsive Fix: Dynamic Item Capacity Calculation rules
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // Renders exactly 5 items on mobile screens, scaling up to 8 on desktop monitors
  const itemsPerPage = isMobile ? 5 : 8;

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setCurrentPage(1);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const handleToggleSearch = React.useCallback(() => {
    setIsSearching((prev) => {
      const nextState = !prev;
      if (!nextState) setSearchQuery("");
      else setTimeout(() => searchInputRef.current?.focus(), 150);
      return nextState;
    });
  }, []);

  const handlePageChange = React.useCallback(
    (_e: React.ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);
    },
    [],
  );

  const filteredTracks = React.useMemo(() => {
    if (!debouncedQuery.trim()) return tracks;
    const query = debouncedQuery.toLowerCase();
    return tracks.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.performer.toLowerCase().includes(query),
    );
  }, [debouncedQuery, tracks]);

  // Recalculates page segments instantly using the responsive size boundaries
  const pageCount = Math.ceil(filteredTracks.length / itemsPerPage);
  const paginatedTracks = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredTracks.slice(start, start + itemsPerPage);
  }, [currentPage, filteredTracks, itemsPerPage]);

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: { xs: "16px", sm: "24px" },
        bgcolor: "background.paper",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: 64,
          px: isSearching ? 0 : { xs: 2, sm: 3 },
          borderBottom: "1px solid",
          borderColor: "divider",
          width: "100%",
        }}
      >
        <Collapse
          in={isSearching}
          orientation="horizontal"
          unmountOnExit
          sx={{
            flexGrow: 1,
            width: "100%",
            "& .MuiCollapse-wrapper": { width: "100%" },
            "& .MuiCollapse-wrapperInner": { width: "100%" },
          }}
        >
          <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              variant="standard"
              inputRef={searchInputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={labels.searchPlaceholder}
              sx={{
                "& .MuiInput-root": {
                  height: 56,
                  px: { xs: 2, sm: 3 },
                  fontSize: "1rem",
                  width: "100%",
                  "&:before, &:after": { display: "none" },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action" />
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

        {!isSearching && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2 }}
              sx={{ alignItems: "center", minWidth: 0, flex: 1 }}
            >
              <IconButton
                component={Link}
                href={`/${lang}/my-page`}
                size="small"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  flexShrink: 0,
                }}
              >
                <ArrowBack fontSize="small" />
              </IconButton>

              <Stack
                direction="row"
                spacing={1.5}
                sx={{ alignItems: "baseline" }}
              >
                <Typography
                  variant="h6"
                  fontWeight={800}
                  sx={{
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                  }}
                >
                  {labels.music}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={600}
                  sx={{ letterSpacing: "0.01em" }}
                >
                  ({filteredTracks.length} {labels.tracksAvailable})
                </Typography>
              </Stack>
            </Stack>

            <IconButton
              onClick={handleToggleSearch}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                p: 1,
                borderRadius: "50%",
                flexShrink: 0,
                ml: 1,
              }}
            >
              <Search fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>

      <Box sx={{ bgcolor: "background.default" }}>
        {filteredTracks.length === 0 ? (
          <Box sx={{ py: 12, textAlign: "center", px: 2 }}>
            <QueueMusic
              sx={{ fontSize: "3.5rem", color: "text.disabled", mb: 2 }}
            />
            <Typography variant="subtitle1" fontWeight={700}>
              {labels.noTracksFound}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {labels.adjustSearch}
            </Typography>
          </Box>
        ) : (
          <>
            <List disablePadding>
              {paginatedTracks.map((track) => (
                <AudioListRowItem key={track.id} track={track} lang={lang} />
              ))}
            </List>

            {pageCount > 1 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  py: 2,
                  borderTop: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  px: { xs: 1, sm: 2 },
                }}
              >
                <Pagination
                  count={pageCount}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  siblingCount={isMobile ? 0 : 1}
                  boundaryCount={isMobile ? 1 : 2}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    "& .MuiPagination-ul": {
                      flexWrap: "nowrap",
                      justifyContent: "center",
                    },
                    "& .MuiPaginationItem-root": {
                      fontWeight: 600,
                      borderRadius: "8px",
                      height: { xs: 24, sm: 32 },
                      minWidth: { xs: 24, sm: 32 },
                      px: { xs: 0.5, sm: 1 },
                      mx: { xs: 0.25, sm: 0.5 },
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    },
                  }}
                />
              </Box>
            )}
          </>
        )}
      </Box>
    </Paper>
  );
};
