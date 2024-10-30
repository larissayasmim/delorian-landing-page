import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qrcode" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  )
};