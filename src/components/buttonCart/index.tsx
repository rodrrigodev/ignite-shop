import { Handbag } from "@phosphor-icons/react";
import { Button } from "./styles";
import { useCart } from "../../hook/useCart";
import { useRouter } from "next/router";

export function ButtonCart(){
    const { handlerSidePanelIsOpening, sidePanelIsOpening, products } = useCart()
    const router = useRouter()
    const buttonDisabled = router.pathname === "/success" ? "none" : "block"

    return (
        <Button onClick={()=> handlerSidePanelIsOpening(!sidePanelIsOpening)} style={{display: buttonDisabled}}>
            {!!products.length &&
            <span>{products.length}</span>
            }
            <Handbag size={32} />
        </Button>

    )
}