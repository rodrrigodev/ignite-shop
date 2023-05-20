import { useCart } from "../../hook/useCart";
import { SidePanelContainer } from "./style";

interface SidePanelProps{
    opening: boolean
}

export default function Sidepanel({ opening }: SidePanelProps){
  const {handlerAddProduct, products} = useCart()

    return(
        <SidePanelContainer opening= {opening}>
            <h1 onClick={()=>{ handlerAddProduct('if')}}>Sidpanel</h1>
            <p>{products[0]}</p>
        </SidePanelContainer>
    )
}