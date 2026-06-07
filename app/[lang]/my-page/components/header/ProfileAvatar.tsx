// app/[lang]/my-page/components/header/ProfileAvatar.tsx
import React from "react";
import Link from "next/link";
import { Avatar } from "@mui/material";

interface ProfileAvatarProps {
  src: string;
  alt: string;
  href: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  src,
  alt,
  href,
}) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Avatar
        src={src}
        alt={alt}
        sx={{
          width: { xs: 120, sm: 150, md: 170 },
          height: { xs: 120, sm: 150, md: 170 },
          border: "6px solid",
          borderColor: "background.paper",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
          mt: { xs: -8, sm: -11, md: -12 },
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.04)",
          },
        }}
      />
    </Link>
  );
};
