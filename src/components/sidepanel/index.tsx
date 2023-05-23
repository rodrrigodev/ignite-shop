import { X } from "@phosphor-icons/react";
import { useCart } from "../../hook/useCart";
import { CartHeader, PriceContainer, ProductDescription, SidePanelContainer } from "./style";
import imagem from '../../assets/camisetas/2.png'

export default function Sidepanel(){
  const { products, sidePanelIsOpening, handlerSidePanelIsOpening } = useCart()

    return(
        <SidePanelContainer opening= {sidePanelIsOpening}>
            <div>
            <CartHeader>
             <button onClick={()=> handlerSidePanelIsOpening(!sidePanelIsOpening)}>
               <X size={32}/>
             </button>
             <h1>Sacola de Compras</h1>
            </CartHeader>

                <ProductDescription>
                    <img src={imagem.src} alt="" />
                    <div>
                        <h2>Camiseta Ignite Lab</h2>
                        <span>R$ 70,00</span>
                        <button>Remover</button>
                    </div>
                </ProductDescription>
            
            </div>

            <PriceContainer>
                <div>
                    <span>Quantidade</span>
                    <span>3 itens</span>
                </div>

                <div>
                    <span>Valor Total</span>
                    <span>R$ 270,00</span>
                </div>
                <button>Finalizar Compra</button>
            </PriceContainer>
        </SidePanelContainer>
    )
}