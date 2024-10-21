import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";
import { Introduction } from "./components/Introduction/Introduction";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Introduction />
      <GlobalStyle />
    </ThemeProvider>
  )
}


