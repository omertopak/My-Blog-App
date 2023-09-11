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
  fontSize: "12px",
  opacity: "0.8"
}
export const shadow = {
  boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
}
export const shadow2 = {
  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  backgroundColor:"#cfd8dc"
}
export const shadow3 = {
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
}
//box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
// box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
// box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
// box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;


export const ellipsis = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}

export const ellipsis1 = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}