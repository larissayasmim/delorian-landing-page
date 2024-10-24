import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";
import { Introduction } from "./components/Introduction/Introduction";
import { DelorianServices } from "./components/DelorianServices/DelorianServices";
import { CallDelorian } from "./components/CallDelorian/CallDelorian";
import { CuritibaAndRegion } from "./components/CuritibaAndRegion/CuritibaAndRegion";
import { FreeQuote } from "./components/FreeQuote/FreeQuote";
import { EngineBrands } from "./components/EngineBrands/EngineBrands";
import { Footer } from "./components/Footer/Footer";
import { ButtonWhatsapp } from "./components/ButtonWhatsapp/ButtonWhatsapp";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Introduction />
      <DelorianServices />
      <CallDelorian />
      <CuritibaAndRegion />
      <FreeQuote />
      <EngineBrands />
      <Footer />
      <ButtonWhatsapp />
      <GlobalStyle />
    </ThemeProvider>
  )
}


