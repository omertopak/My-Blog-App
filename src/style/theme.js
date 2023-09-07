import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#dede",
      light: "#ece"
    }
  }
})

export const likeButton = {
  position: "absolute",
  top: "0px",
  right: "0px",
  backgroundColor: "#f44336",
  width: "1.1rem",
  Height: "1.1rem",
  border: "none",
  borderRadius: "50%",
  fontSize: "12px"
}