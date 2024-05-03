"use client";
import { Email, MarkEmailUnread } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ReusableMessageButton from "../reusable-message-section";
import ReusableAllMessageSection from "../reuable-all-chat";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllMessage } from "../../service/allMessages";
import LoaderBackdrop from "../common/loader";

const Index = () => {
  const { data, isLoading} = useQuery({
    queryKey: ["allMessages"],
    queryFn: () => getAllMessage(),
  });

  // Filter unread messages
  const unreadMessages = data
    ? data.filter((message: any) => !message.isRead)
    : [];

  const router = useRouter();

  const handleMessageClick = (message: any) => {
    router.push(`/dashboard/messages/home/all-chat/${message._id}`);
  };

  return (
    <>
      {isLoading && <LoaderBackdrop />}
      <Box sx={{ marginY: "20px" }}>
        <Grid container spacing={4}>
          <Grid sx={{ minHeight: "100%" }} item xs={12} lg={8}>
            <Box sx={{ height: "100%", overflow: "hidden" }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "black",
                  mb: { xs: "5px", sm: "0px" },
                  wordBreak: "break-all",
                }}
              >
                All Messages
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ minHeight: "100%" }} item xs={12} lg={4}>
            <Box
              sx={{
                height: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                alignItems: "center",
                gap: 2,
                pr: { xs: "0px", sm: "20px" },
              }}
            >
              <Box>
                <ReusableMessageButton
                  label="Unread"
                  count={unreadMessages.length || 0}
                  color="#246BEB"
                  backgroundColor="#E7F0FF"
                />
              </Box>
              <Box>
                <ReusableMessageButton
                  label="All Messages"
                  count={data?.length || 0}
                  color="#246BEB"
                  backgroundColor="#F9FAFB"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginTop: "5rem",
          px: "20px",
          py: "20px",
        }}
      >
        {data?.map(
          (
            message: {
              name: string;
              content: string;
              time: string;
              isRead: boolean | undefined;
              image: string;
            },
            index: React.Key | null | undefined
          ) => (
            <Box onClick={() => handleMessageClick(message)} key={index}>
              <ReusableAllMessageSection
                key={index}
                name={message.name}
                message={message.content}
                time={message.time}
                notificationCount={message.isRead === false ? 1 : 0}
                isRead={message.isRead}
                image={message.image}
              />
            </Box>
          )
        )}
      </Box>
    </>
  );
};

export default Index;
