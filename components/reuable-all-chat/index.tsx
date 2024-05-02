import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

interface MessageSectionProps {
  name: string;
  image: string;
  message: string;
  time: string;
  notificationCount: number;
  isRead?: boolean;
}

const ReusableAllMessageSection: React.FC<MessageSectionProps> = ({
  name,
  message,
  time,
  image,
  notificationCount,
  isRead,
}) => {
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Box
      sx={{
        mt: "20px",
        paddingY: 2,
        paddingX: 1,
        transition: "transform 0.3s ease",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
        }
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <Avatar alt={name} src={image} sx={{ width: 56, height: 56 }} />
        </Box>
        <Box sx={{ flexGrow: 1, pl: 2 }}>
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                maxWidth: "30rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {name}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                maxWidth: "30rem",
                color: isRead ? "black" : "#246BEB",
              }}
            >
              {truncateText(message, 15)}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography>{time}</Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "end",
                pl: { xs: "0px", sm: "20px" },
              }}
            >
              {!isRead && (
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginLeft: "5px",
                    backgroundColor: "#246BEB",
                    color: "white",
                    padding: "8px",
                    borderRadius: "50%",
                    display: "inline-block",
                    minWidth: "16px",
                    textAlign: "center",
                    lineHeight: "16px",
                  }}
                >
                  {notificationCount}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReusableAllMessageSection;
