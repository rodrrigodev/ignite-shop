import { createContext, useState, ReactNode, useContext } from "react"

interface ProductProps{
    name: string,
    id: string,
    imageUrl: string,
    price: string,
    defaultPriceId: string
}

interface CartContextType {
    products: ProductProps[],
    handlerAddProduct: (productToAdd: ProductProps)=> void,
    handlerSidePanelIsOpening: (opening: boolean)=> void,
    handleRemoveProduct: (id: string)=> void,
    sidePanelIsOpening: boolean,
}

interface CartContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export default function CartContextProvider({ children }:CartContextProviderProps){
    const [ products, setProducts] = useState<ProductProps[]>([])
    const [ sidePanelIsOpening, setSidePanelIsOpening] = useState(false)

    function handlerAddProduct(productToAdd: ProductProps){
        const productExistInCart = products.find((product)=>{
            return product.id === productToAdd.id
        })

        if(!productExistInCart){
            setProducts((state) => [...state, productToAdd])
        }else{
            console.log('criar alerta já add ao carrinho')
        }
    }

    function handlerSidePanelIsOpening(opening: boolean){
        setSidePanelIsOpening(opening)
    }

    function handleRemoveProduct(id: string){
        setProducts((state)=> state.filter((product)=>{
            return product.id !== id
        }))
    }

    return(
        <CartContext.Provider value={{products, handlerAddProduct, handlerSidePanelIsOpening, sidePanelIsOpening, handleRemoveProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const cart = useContext(CartContext)
    return cart
}