import { ButtonWhatsapp } from "../components/ButtonWhatsapp/ButtonWhatsapp";
import { CallDelorian } from "../components/CallDelorian/CallDelorian";
import { CreditCardBrands } from "../components/CreditCardBrands/CreditCardBrands";
import { CuritibaAndRegion } from "../components/CuritibaAndRegion/CuritibaAndRegion";
import { DelorianServices } from "../components/DelorianServices/DelorianServices";
import { EngineBrands } from "../components/EngineBrands/EngineBrands";
import { Footer } from "../components/Footer/Footer";
import { FreeQuote } from "../components/FreeQuote/FreeQuote";
import { Header } from "../components/Header/Header";
import { Introduction } from "../components/Introduction/Introduction";

export function Home () {
  return(
    <>
       <Header />
        <Introduction />
        <DelorianServices />
        <CallDelorian />
        <CuritibaAndRegion />
        <FreeQuote />
        <CreditCardBrands />
        <EngineBrands />
        <Footer />
        <ButtonWhatsapp /> 
    </>
  )
}