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

interface HomeProps{
   products:{ 
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    }[]
} 

export default function Home({products}: HomeProps) {
    const [sliderRefer] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 3,
            spacing: 48
        },
     
    })

 return(
    <>
    <Head>
        <title>Home | Ignite Shop</title>
    </Head>

  <HomeContainer ref={sliderRefer} className='keen-slider'>
        {products.map((product)=>{
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

                         <button>
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
        }
    })

    return{
        props: {
           products
        },
        revalidate: 60 * 60 * 2, // a casa 2h tudo sera recarregado novamente
    }
}