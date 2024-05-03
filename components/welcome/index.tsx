"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import ReusableMessageButton from "../reusable-message-section";
import { useQuery } from "@tanstack/react-query";
import { getAllMessage } from "../../service/allMessages";
import LoaderBackdrop from "../common/loader";

const Index = () => {
  const router = useRouter();

  const { data, isLoading, status } = useQuery({
    queryKey: ["allMessages"],
    queryFn: () => getAllMessage(),
  });

  // Filter unread messages
  const unreadMessages = data
    ? data.filter((message: any) => !message.isRead)
    : [];

  const OpenAllChats = () => {
    router.push("/dashboard/messages/home/all-chat");
  };
  return (
    <>
      {isLoading && <LoaderBackdrop />}
      <Box sx={{ mt: "20px" }}>
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
                Home
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
                  count={unreadMessages?.length || 0}
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
            Hello, <span style={{ color: "#1B72C0" }}>Abraham</span>
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "black",
              mb: { xs: "5px", sm: "0px" },
              wordBreak: "break-all",
            }}
          >
            Catch up with your peers and coworkers here.
          </Typography>
        </Box>
        <Box>
          <Image src="/helloChat.svg" alt="Empty" width={600} height={300} />
        </Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "black",
              mb: { xs: "5px", sm: "0px" },
              wordBreak: "break-all",
            }}
          >
            You have {unreadMessages?.length || 0} unread messages!
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              borderRadius: "30px",
              paddingX: "20px",
              paddingY: "10px",
              backgroundColor: "#3863FA",
              zIndex: 0,
              "&:hover": {
                backgroundColor: "#3863FA",
              },
            }}
            onClick={OpenAllChats}
          >
            View Messages
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Index;
