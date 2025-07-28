import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
export const ScrollArea = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        overflowY: "auto",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};
