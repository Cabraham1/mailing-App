"use client";
import { Email, MarkEmailUnread } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ReusableMessageButton from "../reusable-message-section";
import ReusableAllMessageSection from "../reuable-all-chat";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  const messages = [
    {
      id: 1,
      name: "John Doe",
      message: "Hello, how are you doing today?",
      time: "12:30 PM",
      notificationCount: 2,
      isRead: false,
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      message: "Hey there! Did you see the latest updates?",
      time: "1:45 PM",
      notificationCount: 0,
      isRead: true,
      image: "https://www.example.com/avatar2.png",
    },
    {
      id: 3,
      name: "Alice Johnson",
      message: "I'm excited for the upcoming event!",
      time: "2:20 PM",
      notificationCount: 5,
      isRead: false,
      image: "https://www.example.com/avatar3.png",
    },
    // Add more mock message objects as needed
  ];

  const handleMessageClick = (message: any) => {
    console.log("Message clicked: ", message);
    router.push(`/dashboard/messages/home/all-chat/${message.id}`);
  };

  return (
    <>
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
                  count={3}
                  color="#246BEB"
                  backgroundColor="#E7F0FF"
                />
              </Box>
              <Box>
                <ReusableMessageButton
                  label="All Messages"
                  count={12}
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
        {messages.map((message, index) => (
          <Box onClick={() => handleMessageClick(message)} key={index}>
            <ReusableAllMessageSection
              key={index}
              name={message.name}
              message={message.message}
              time={message.time}
              notificationCount={message.notificationCount}
              isRead={message.isRead}
              image={message.image}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Index;
