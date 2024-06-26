import { Box, Icon, Skeleton, Typography } from "@mui/material";
import { ImageFrame40 } from "../../common/image-frames";
import React from "react";

const UserAccount: React.FC<{ image: string; name: string; role: any }> = ({
  image,
  name,
  role,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: { xs: 20, md: 0 },
        width: { xs: "70%", sm: "90%" },
        flexWrap: { xs: "wrap", sm: "no-wrap" },
      }}
    >
      <Box sx={{ marginRight: "12px" }}>
        <ImageFrame40 image={image} />
      </Box>
      <Box sx={{ flexGrow: 1, mr: "20px" }}>
        <Box>
          {role ? (
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "black",
                mb: { xs: "5px", sm: "0px" },
                wordBreak: "break-all",
                textTransform: "capitalize",
              }}
            >
              {name}
            </Typography>
          ) : (
            <Skeleton
              variant="rectangular"
              width={100}
              height={15}
              sx={{ mb: 0.7 }}
            />
          )}
        </Box>
        <Box>
          {role ? (
            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: "12px",
                color: "#908E8F",
                fontWeight: 500,
                wordBreak: "break-all",
              }}
            >
              {role}
            </Typography>
          ) : (
            <Skeleton
              variant="rectangular"
              width={50}
              height={10}
              sx={{ mb: 0.5 }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UserAccount;
