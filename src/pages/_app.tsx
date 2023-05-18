import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { useState } from "react";
import Sidepanel from "../components/sidepanel";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [sidepanelOpening, setSidepanlOpening] = useState(false)
  return(
    
     
    <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <button onClick={()=> setSidepanlOpening(!sidepanelOpening)}>
           <Handbag size={32} />
          </button>
        </Header>

        <Sidepanel opening={sidepanelOpening}/>

        <Component {...pageProps} /> 
    </Container>
  )
}
