import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product(){
    const { query } = useRouter()

    return(
      <ProductContainer>
        <ImageContainer>

        </ImageContainer>

        <ProductDetails>
            <h1>Camiseta X</h1>
            <span>R$ 79,00</span>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, possimus voluptates. Sapiente, sed nemo fugiat commodi et soluta quod ullam iusto distinctio neque unde tenetur blanditiis vel laudantium illo nostrum!</p>

            <button>
                Comprar agora
            </button>
        </ProductDetails>
      </ProductContainer>
    )
}