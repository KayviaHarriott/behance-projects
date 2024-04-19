import { Box, Button } from "@mui/material";
import { FC } from "react";
import { BehanceSquareFilled, LinkOutlined } from "@ant-design/icons";

interface ItemDisplayBubbleProps {
  title: string;
  description: string;
  url: string;
}

export const ItemDisplayBubbleProps: FC<ItemDisplayBubbleProps> = ({
  title,
  description,
  url,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: 2,
        maxWidth: "400px",
        boxShadow: "4px 4px 10px 1px rgba(0,0,0,0.1)",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <p className="font-bold">{title}</p>
      <p className="text-[14px] text-[gray]">{description}</p>
      <div className="flex items-center gap-1 pt-2">
        <BehanceSquareFilled />
        <p className="text-[14px]">John Doe </p>
      </div>
      <div className="flex gap-1 pt-4">
        <Button
          sx={{
            width: "100%",
            boxShadow: "none",
            textTransform: "none",
            backgroundColor: "black",
          }}
          href={url}
          target="_blank"
          variant="contained"
        >
          View Project
        </Button>
        <Button
          sx={{
            width: "100%",
            textTransform: "none",
            color: "black",
            borderColor: "black",
            display: "flex",
            gap: 0.5,
            alignContent: "center",
            alignItems: "center",
          }}
          href={url}
          target="_blank"
          variant="text"
        >
          View Repo <LinkOutlined />
        </Button>
      </div>
    </Box>
  );
};
