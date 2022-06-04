import { ThemeProvider } from "styled-components"
import theme from "../theme/main/theme"

export const component = (component: JSX.Element) => <ThemeProvider theme={theme}>{component}</ThemeProvider>