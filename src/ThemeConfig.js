import { createMuiTheme } from "@material-ui/core/styles";
import "./Css/styles.css";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "Roboto",
      },
      h1: {
        fontFamily: "Elianto",
        fontSize: "85px",
        fontWeight: "bold",
        "@media (max-width:960px)": {
          fontSize: "75px",
        },
        "@media (max-width:600px)": {
          fontSize: "62px",
        },
      },
      h2: {
        fontFamily: "Elianto",
        fontSize: "65px",
        fontWeight: "bold",
        "@media (max-width:960px)": {
          fontSize: "55px",
        },
        "@media (max-width:600px)": {
          fontSize: "42px",
        },
        "@media (max-width:460px)": {
          fontSize: "32px",
        },
      },
      h3: {
        fontFamily: "Elianto",
        fontSize: "50px",
        fontWeight: "bold",
        "@media (max-width:1280px)": {
          fontSize: "45px",
        },
        "@media (max-width:960px)": {
          fontSize: "40px",
        },
        "@media (max-width:600px)": {
          fontSize: "35px",
        },
        "@media (max-width:460px)": {
          fontSize: "27px",
        },
      },
      h4: {
        fontSize: "35px",
        fontWeight: "bold",
        "@media (max-width:960px)": {
          fontSize: "30px",
        },
      },
      h5: {
        fontSize: "30px",
      },
      h6: {
        fontSize: "25px",
        "@media (max-width:1280px)": {
          fontSize: "20px",
        },
      },
      subtitle1: {
        fontSize: "18px",
      },
      subtitle2: {
        fontSize: "16px",
      },
      body1: {
        fontSize: "15px",
      },
      body2: {
        fontSize: "12px",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiCard: {
      root: {
        boxShadow: "4px 7px 20px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
          "scroll-behavior": "smooth",
        },
        body: {
          fontFamily: "Roboto",
          backgroundColor: "#fff",
          overflowX: "hidden",
          overflowY: "overlay",
          scrollBehavior: "smooth",
        },
        "*::-webkit-scrollbar": {
          backgroundColor: "transparent",
          width: "0.4em",
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
          borderRadius: "5px",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "rgba(0,0,0,0.3)",
          borderRadius: "5px",
        },
        "*::-webkit-scrollbar-thumb:active": {
          background: "rgba(5, 242, 219, 0.5)",
          // background: "linear-gradient(transparent,#1965d6)",
          borderRadius: "5px",
        },
        "*::-webkit-scrollbar-corner": {
          borderRadius: "5px",
        },
      },
    },
  },
});
export default theme;
