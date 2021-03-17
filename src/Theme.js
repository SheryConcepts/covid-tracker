import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core"

const Theme = (props) => {
  let theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundColor: "#f4f4f2",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#495464",
      },
      secondary: {
        main: "#bbbfca",
      },
      background: {
        paper: "#e8e8e8",
      },
      text: {
        primary: "#495464",
      },
    },
    typography: {
      fontFamily: "Poppins, Roboto, sans-serif",
    },
  })

  theme = responsiveFontSizes(theme)
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
