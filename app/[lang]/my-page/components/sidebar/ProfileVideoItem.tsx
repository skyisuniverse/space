// // app/[lang]/my-page/components/sidebar/ProfileVideoItem.tsx
// import React from "react";
// import Link from "next/link";
// import { Box, Typography } from "@mui/material";
// import { PlayArrow } from "@mui/icons-material";

// interface ProfileVideoItemProps {
//   id: number;
//   title: string;
//   duration: string;
//   img: string;
//   lang: string;
// }

// export const ProfileVideoItem: React.FC<ProfileVideoItemProps> = ({
//   id,
//   title,
//   duration,
//   img,
//   lang,
// }) => {
//   return (
//     <Link href={`/${lang}/videos/${id}`} style={{ textDecoration: "none" }}>
//       <Box
//         sx={{
//           position: "relative",
//           borderRadius: "14px",
//           overflow: "hidden",
//           border: "1px solid",
//           borderColor: "divider",
//           transition:
//             "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//           "&:hover": {
//             transform: "translateY(-4px)",
//             boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
//           },
//         }}
//       >
//         <Box
//           component="img"
//           src={img}
//           alt={title}
//           sx={{
//             width: "100%",
//             aspectRatio: "16/9",
//             objectFit: "cover",
//             display: "block",
//           }}
//         />

//         {/* Standardized M3 Play overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             bgcolor: "rgba(255,255,255,0.95)",
//             borderRadius: "50%",
//             width: 44,
//             height: 44,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
//           }}
//         >
//           <PlayArrow sx={{ fontSize: 28, color: "grey.900" }} />
//         </Box>

//         {/* Subtitle overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             background:
//               "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
//             color: "white",
//             px: 2,
//             py: 1.5,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: 2,
//           }}
//         >
//           <Typography
//             variant="caption"
//             fontWeight={600}
//             sx={{
//               flex: 1,
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               letterSpacing: "0.01em",
//             }}
//           >
//             {title}
//           </Typography>

//           <Box
//             sx={{
//               bgcolor: "rgba(0,0,0,0.65)",
//               color: "white",
//               px: 1,
//               py: 0.25,
//               borderRadius: "4px",
//               fontSize: "0.75rem",
//               fontWeight: 700,
//               flexShrink: 0,
//             }}
//           >
//             {duration}
//           </Box>
//         </Box>
//       </Box>
//     </Link>
//   );
// };

// app/[lang]/my-page/components/sidebar/ProfileVideoItem.tsx
import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

interface ProfileVideoItemProps {
  id: number;
  title: string;
  duration: string;
  img: string;
  lang: string;
}

export const ProfileVideoItem: React.FC<ProfileVideoItemProps> = ({
  id,
  title,
  duration,
  img,
  lang,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Link href={`/${lang}/videos/${id}`} style={{ textDecoration: "none" }}>
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
          {/* Main Video Thumbnail Background */}
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              width: "100%",
              aspectRatio: "16/9",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Standardized Absolute Centered M3 Play Overlay */}
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

          {/* Symmetrical Lower Info Subtitle Overlay */}
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
              {title}
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
              {duration}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
