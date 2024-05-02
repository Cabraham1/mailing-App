import { Button } from "@mui/material";
import { Email, MarkEmailUnread } from "@mui/icons-material";
import React from "react";

// Define an interface for the props
interface MessageButtonProps {
  label: string;
  count: number;
  color: string;
  backgroundColor: string;
}

// Define the ReusableMessageButton component
const ReusableMessageButton: React.FC<MessageButtonProps> = ({
  label,
  count,
  color,
  backgroundColor,
}) => {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        textTransform: "none",
        borderRadius: "5px",
        paddingX: "20px",
        paddingY: "10px",
        color: color,
        backgroundColor: backgroundColor,
        zIndex: 0,
        "&:hover": {
          backgroundColor: backgroundColor,
        },
      }}
      startIcon={label === "Unread" ? <MarkEmailUnread /> : <Email />}
    >
      {label}
      <span
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
        {count}
      </span>
    </Button>
  );
};

export default ReusableMessageButton;
