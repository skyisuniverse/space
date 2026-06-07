import React from "react";
import Grid from "@mui/material/Grid"; // Ensure MUI 7 Grid2 is used consistently
import {
  ProfileHeader,
  ProfileMainRow,
  ProfileAvatar,
  ProfileInfo,
  ProfileActions,
  ProfileDetailCard,
} from "../index";
import { FooterDetailItem } from "../../types";

interface MyPageHeaderProps {
  coverUrl: string;
  avatarUrl: string;
  profileName: string;
  profileStatus: string;
  lang: string;
  footerDetails: FooterDetailItem[];
}

export const MyPageHeader: React.FC<MyPageHeaderProps> = ({
  coverUrl,
  avatarUrl,
  profileName,
  profileStatus,
  lang,
  footerDetails,
}) => {
  return (
    <ProfileHeader
      coverUrl={coverUrl}
      coverAlt={`${profileName} Cover`}
      mainContent={
        <ProfileMainRow>
          <ProfileAvatar
            src={avatarUrl}
            alt={profileName}
            href={`/${lang}/profile`}
          />
          <ProfileInfo name={profileName} status={profileStatus} />
          <ProfileActions />
        </ProfileMainRow>
      }
      footerContent={
        <Grid container spacing={3}>
          {footerDetails.map((detail, index) => (
            <ProfileDetailCard key={index} {...detail} />
          ))}
        </Grid>
      }
    />
  );
};
