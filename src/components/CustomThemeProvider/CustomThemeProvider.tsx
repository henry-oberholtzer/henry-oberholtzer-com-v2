import { PropsWithChildren, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./Themes"

const CustomThemeProvider = (props: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  useEffect(() => {
    
    const adjustTheme = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setTheme(darkTheme)
      } else {
        setTheme(lightTheme);
      }
    }


    window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", adjustTheme)
  }, [setTheme])

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export { CustomThemeProvider }
