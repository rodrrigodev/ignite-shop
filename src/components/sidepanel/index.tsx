import { X } from "@phosphor-icons/react";
import { useCart } from "../../hook/useCart";
import { CartHeader, EmptyBag, PriceContainer, ProductDescription, SidePanelContainer } from "./style";
import axios from "axios";
import { useState } from "react";
import { formatPriceId } from "../../utils/formatPriceId";
import bag from "../../assets/bag.svg"
import Image from "next/image";

export default function Sidepanel(){
  const { products, sidePanelIsOpening, handlerSidePanelIsOpening, handleRemoveProduct } = useCart()
  const [isCreatingCheckoutSession, setIsCrearingCheckoutSession] = useState(false)
  
  const totalFormat = products.map((product)=>{return Number(product.price.slice(2).replace(',', '.'))})
  const total = products.length ?  new Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL',}).
  format(totalFormat.reduce((acc, cur)=>{ return acc + cur })) : 0

  async function handleByuProduct(){
    try{
      setIsCrearingCheckoutSession(true)
      
    //    const response = await axios.post("../..pages/api/checkout",{
        const response = await axios.post('/api/checkout',{
         priceId: formatPriceId(products)
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
                        <button onClick={()=> handleRemoveProduct(product.id)}>Remover</button>
                    </div>
                        </ProductDescription>
                    )
                })
            }
            
            </div>

            {
                !!products.length && 
                <PriceContainer>
                <div>
                    <span>Quantidade</span>
                    <span>{products.length} itens</span>
                </div>

                <div>
                    <span>Valor Total</span>
                    <span>{total}</span>
                </div>
                <button onClick={()=> handleByuProduct()}>Finalizar Compra</button>
            </PriceContainer>
            }

            { 
                !products.length && 
                <EmptyBag>
                    <Image src={bag} alt="" width={300} height={300} />
                    <p>Parece que seu carrinho está <br/> um pouco vazio no momento!</p>
                </EmptyBag>
            }
        </SidePanelContainer>
    )
}