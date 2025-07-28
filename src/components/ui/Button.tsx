import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import type { AnchorHTMLAttributes } from "react";

type AppButtonProps = ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const AppButton = (props: AppButtonProps) => {
  return (
    <Button
      {...props}
      variant="outlined"
      size="small"
sx={{
  backgroundColor: "transparent",
  borderColor: "#555",  
  color: "#333",       
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(85, 85, 85, 0.1)", 
    borderColor: "#444", 
    color: "#222",        
  },
}}

    />
  );
};
