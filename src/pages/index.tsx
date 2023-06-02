import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import {useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import Head from "next/head"
import { Handbag } from "@phosphor-icons/react";
import Link from "next/link"
import React from 'react'
import { useCart } from "../hook/useCart"

interface HomeProps{
   products:{ 
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    priceId: string
    }[]
}  

export default function Home({ products }: HomeProps) {
    const [sliderRefer] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 3,
            spacing: 48
        },
     breakpoints:{
        '(max-width: 1200px)':{
            slides:{
                perView: 2,
                spacing: 48
            }
        },
        '(max-width: 768px)':{
            slides:{
                perView: 1,
                spacing: 30
            }
        }
     }
    })

  const { handlerAddProduct, products: productCart } = useCart()


 return(
    <>
    <Head>
        <title>Home | Ignite Shop</title>
    </Head>

  <HomeContainer ref={sliderRefer} className='keen-slider'>
        {products.map((product)=>{
             const { name, id, imageUrl, price, priceId } = product
             const productToAdd = { name, id, imageUrl, price, defaultPriceId: priceId }
             const buttonDisabled = productCart.length >= 3 ? true : false

            return (
                <Product key={product.id} className={`keen-slider__slide`}>
                        <Link href={`/product/${product.id}`} prefetch={false}>
                            <Image src={product.imageUrl} width={520} height={480} alt=""/>
                        </Link>

                        <footer>
                         <div>
                            <strong>{product.name}</strong>
                            <span>{product.price}</span>
                         </div>

                         <button onClick={()=> handlerAddProduct(productToAdd)} disabled={buttonDisabled}>
                            <Handbag size={32} />
                         </button>
                        </footer>
                </Product>
            )
        })}
  </HomeContainer>
  </>
 )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })
    
    const products = response.data.map((product)=>{
    const price = product.default_price as Stripe.Price

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL',
            }).format(price.unit_amount / 100),
            priceId: price.id
        }
    })

    return{
        props: {
           products
        },
        revalidate: 60 * 60 * 2, // a casa 2h tudo sera recarregado novamente
    }
}