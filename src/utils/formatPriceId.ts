interface FormatPriceIdProps{
    name: string,
    id: string,
    imageUrl: string,
    price: string,
    defaultPriceId: string
}

export function formatPriceId(products: FormatPriceIdProps[]){
    const productsToFormat = products.map((product)=>{
        return {price: product.defaultPriceId, quantity: 1}
    })

    return productsToFormat
}
