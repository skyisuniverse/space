// app/[lang]/my-page/components/sidebar/ProfileSubscriptionItem.tsx
import React from "react";
import Link from "next/link";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

interface ProfileSubscriptionItemProps {
  id: number;
  name: string;
  img: string;
  lang: string;
}

export const ProfileSubscriptionItem: React.FC<
  ProfileSubscriptionItemProps
> = ({ id, name, img, lang }) => {
  return (
    <Link
      href={`/${lang}/subscriptions/${id}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <ListItem
        sx={{
          px: 1.5,
          py: 1,
          my: 0.5,
          borderRadius: "12px",
          transition: "background-color 0.25s ease, transform 0.25s ease",
          "&:hover": {
            bgcolor: "action.hover",
            transform: "translateX(6px)",
          },
        }}
      >
        <ListItemAvatar sx={{ minWidth: 46 }}>
          <Avatar
            src={img}
            sx={{ width: 34, height: 34, borderRadius: "10px" }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          primaryTypographyProps={{
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        />
      </ListItem>
    </Link>
  );
};
