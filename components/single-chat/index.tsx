"use client";
import React, { useEffect } from "react";
import ReusableMessageButton from "../reusable-message-section";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import LoaderBackdrop from "../common/loader";
import { useQuery, useQueryClient } from "@tanstack/react-query"; // Import useQueryClient
import {
  ReadMessage,
  getAllMessage,
  getSingleMessage,
} from "../../service/allMessages";
import { useRouter } from "next/navigation";

const Index = ({ params }: { params: any }) => {
  const router = useRouter();
  const { id } = params;

  // Get a reference to the query client
  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      predicate: (query) =>
        query.queryKey[0] === "allMessages" ||
        (query.queryKey[0] === "singleMessages" && query.queryKey[1] === id),
    });
  };

  // Mark message as read when component mounts
  useEffect(() => {
    const markMessageAsRead = async () => {
      try {
        await ReadMessage(id);
        invalidateQueries(); 
      } catch (error) {
        console.error("Error marking message as read:", error);
      }
    };
    markMessageAsRead();
  }, [id]);

  const { data } = useQuery({
    queryKey: ["allMessages"],
    queryFn: () => getAllMessage(),
  });

  const { data: singleChat } = useQuery({
    queryKey: ["singleMessages", id],
    queryFn: () => getSingleMessage(id),
  });

  const { isLoading } = useQuery({
    queryKey: ["readMessage", id],
    queryFn: () => ReadMessage(id),
  });

  // Filter unread messages
  const unreadMessages = data
    ? data.filter((message: any) => !message.isRead)
    : [];
  return (
    <>
      {isLoading && <LoaderBackdrop />}
      <Box
        sx={{
          marginY: "20px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
          py: 2,
          px: 1,
        }}
      >
        <Grid container spacing={4}>
          <Grid sx={{ minHeight: "100%" }} item xs={12} lg={8}>
            <Box sx={{ height: "100%", overflow: "hidden" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <KeyboardBackspace
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    router.push("/dashboard/messages/home/all-chat")
                  }
                />
                <Avatar
                  alt={singleChat?.name || ""}
                  src={singleChat?.image || ""}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    maxWidth: "30rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {singleChat?.name || ""}
                </Typography>
              </Box>
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
        {/* chat section */}
        <Box
          sx={{
            marginTop: "5rem",
            px: "3rem",
            py: "20px",
            overflowY: "scroll",
            height: "calc(100vh - 200px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar
              alt={singleChat?.name || ""}
              src={singleChat?.image || ""}
              sx={{ width: 56, height: 56 }}
            />
            <Typography
              variant="body1"
              sx={{
                backgroundColor: "#f0f0f0",
                padding: "10px",
                borderRadius: "8px",
                maxWidth: "70%",
                wordWrap: "break-word",
              }}
            >
             {singleChat?.content || ""}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;
