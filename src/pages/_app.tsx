import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Sidepanel from "../components/sidepanel";
import CartContextProvider from "../hook/useCart";
import { ButtonCart } from "../components/buttonCart";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt=""/>

        <ButtonCart />

        </Header>

        <Sidepanel/>

        <Component {...pageProps} /> 
      </Container>
    </CartContextProvider>

  )
}
