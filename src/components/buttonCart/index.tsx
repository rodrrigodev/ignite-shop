import { Handbag } from "@phosphor-icons/react";
import { Button } from "./styles";
import { useCart } from "../../hook/useCart";

export function ButtonCart(){
    const { handlerSidePanelIsOpening, sidePanelIsOpening } = useCart()
    return (
        <Button onClick={()=> handlerSidePanelIsOpening(!sidePanelIsOpening)}>
            <Handbag size={32} />
        </Button>

    )
}