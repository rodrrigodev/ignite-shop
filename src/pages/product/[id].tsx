import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import { useRouter } from "next/router"
import axios from "axios"
import { useState } from "react"
import Head from "next/head"
import { useCart } from "../../hook/useCart"

interface ProductProps{
  product:{ 
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string
    }
}

export default function Product({ product }: ProductProps){
  const { handlerAddProduct, products } = useCart()

  const productExistInCart = products.find((shirt)=> {return shirt.id === product.id})

  function handlerAddNewProduct(){
    const { name, id, imageUrl, price, defaultPriceId } = product
    const productToAdd = { name, id, imageUrl, price, defaultPriceId }

    handlerAddProduct(productToAdd)
  }

  const {isFallback} = useRouter()

  if(isFallback){
    return <p>Loading</p>
  }

    return(
      <>
       <Head>
           <title>{product.name} | Ignite Shop</title>
       </Head>
       <ProductContainer>
         <ImageContainer>
             <Image src={product.imageUrl} width={520} height={480} alt="" />
         </ImageContainer>

         <ProductDetails>
             <h1>{product.name}</h1>
             <span>{product.price}</span>

             <p>{product.description}</p>

             <button onClick={()=> handlerAddNewProduct()} disabled={!!productExistInCart}>
                 Comprar agora
             </button>
         </ProductDetails>
       </ProductContainer>
      </>
    )
}

export const getStaticPaths: GetStaticPaths = async ()=>{
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params})=>{
  const productId = params.id
    
    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 //save html in cache for 1 hour
  }
}