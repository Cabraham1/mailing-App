"use client";
import React from "react";
import ReusableMessageButton from "../reusable-message-section";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import LoaderBackdrop from "../common/loader";

const Index = () => {
  const router = useRouter();
  return (
    <>
      {/* <LoaderBackdrop /> */}
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
                  onClick={() => router.back()}
                />
                <Avatar
                  alt={"John Doe"}
                  src="https://www.w3schools.com/howto/img_avatar.png"
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
                  John Doe
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
              alt={"John Doe"}
              src="https://www.w3schools.com/howto/img_avatar.png"
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
              This is an example message. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;
