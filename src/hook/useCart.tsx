import { createContext, useState, ReactNode, useContext } from "react"

interface CartContextType {
    products: string[],
    handlerAddProduct: (id: string)=> void
}

interface CartContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export default function CartContextProvider({ children }:CartContextProviderProps){
    const [ products, setProducts] = useState<string[]>(['teste'])

    function handlerAddProduct(idToAdd: string){
        const idExistInCart = products.find((id)=>{
            return id === idToAdd
        })

        if(!idExistInCart){
            setProducts((state) => [...state, idToAdd])
        }else{
            console.log('criar alerta já add ao carrinho')
        }
    }

    return(
        <CartContext.Provider value={{products, handlerAddProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const cart = useContext(CartContext)
    return cart
}