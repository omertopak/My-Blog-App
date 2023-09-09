import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#eceff1",
      //greybcg
      light: "#ece"
    }
  }
})

export const likeButton = {
  position: "absolute",
  top: "0px",
  right: "0px",
  backgroundColor: "#78909c",
  //red
  width: "1.1rem",
  Height: "1.1rem",
  border: "none",
  borderRadius: "50%",
  fontSize: "12px"
}
export const shadow = {
  boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
}

// box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;