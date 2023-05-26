import { X } from "@phosphor-icons/react";
import { useCart } from "../../hook/useCart";
import { CartHeader, PriceContainer, ProductDescription, SidePanelContainer } from "./style";
import imagem from '../../assets/camisetas/2.png'
import axios from "axios";
import { useState } from "react";

export default function Sidepanel(){
  const { products, sidePanelIsOpening, handlerSidePanelIsOpening } = useCart()
  const [isCreatingCheckoutSession, setIsCrearingCheckoutSession] = useState(false)
  const totalFormat = products.map((product)=>{return Number(product.price.slice(2).replace(',', '.'))})
  const total = products.length ?  new Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL',}).
  format(totalFormat.reduce((acc, cur)=>{ return acc + cur })) : 0

  async function handleByuProduct(){
    try{
      setIsCrearingCheckoutSession(true)
      
       const response = await axios.post('/api/checkout',{
         priceId: [product.defaultPriceId],
        })

        const { checkoutUrl } = response.data

        window.location.href =  checkoutUrl
    } catch (err){
      //conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      console.log(err)
      setIsCrearingCheckoutSession(false)

      alert('Falha ao redirecionar!')
    }
  }

    return(
        <SidePanelContainer opening= {sidePanelIsOpening}>
            <div>
            <CartHeader>
             <button onClick={()=> handlerSidePanelIsOpening(!sidePanelIsOpening)}>
               <X size={32}/>
             </button>
             <h1>Sacola de Compras</h1>
            </CartHeader>

            {
                products.map((product)=>{
                    return(
                        <ProductDescription key={product.id}>
                    <img src={product.imageUrl} alt="" />
                    <div>
                        <h2>{product.name}</h2>
                        <span>{product.price}</span>
                        <button>Remover</button>
                    </div>
                        </ProductDescription>
                    )
                })
            }
            
            </div>

            <PriceContainer>
                <div>
                    <span>Quantidade</span>
                    <span>{products.length} itens</span>
                </div>

                <div>
                    <span>Valor Total</span>
                    <span>{total}</span>
                </div>
                <button>Finalizar Compra</button>
            </PriceContainer>
        </SidePanelContainer>
    )
}