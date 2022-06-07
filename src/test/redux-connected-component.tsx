import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../theme/main/theme"
import { Provider } from "react-redux"
import store from "../redux/store/store"

const component = (component: JSX.Element) => <Provider store={store}><ThemeProvider theme={theme}>{component}</ThemeProvider></Provider>;

export default component;