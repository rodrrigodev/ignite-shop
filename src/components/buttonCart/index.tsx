import { Handbag } from "@phosphor-icons/react";
import { Button } from "./styles";
import { useCart } from "../../hook/useCart";

export function ButtonCart(){
    const { handlerSidePanelIsOpening, sidePanelIsOpening, products } = useCart()
    return (
        <Button onClick={()=> handlerSidePanelIsOpening(!sidePanelIsOpening)}>
            {!!products.length &&
            <span>{products.length}</span>
            }
            <Handbag size={32} />
        </Button>

    )
}