"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material"

const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#C2A444",
    },
  },
  typography: {
    fontFamily: "inherit",
    h1: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    h2: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    h3: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    h4: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    h5: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    h6: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    body1: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    body2: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    subtitle1: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    subtitle2: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    button: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit", textTransform: "inherit" },
    caption: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit" },
    overline: { fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit", textTransform: "inherit" },
  },
});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </NextThemesProvider>
  )
}
