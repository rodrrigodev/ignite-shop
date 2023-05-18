import { SidePanelContainer } from "./style";

interface SidePanelProps{
    opening: boolean
}

export default function Sidepanel({ opening }: SidePanelProps){
    return(
        <SidePanelContainer opening= {opening}>
            <h1>Sidpanel</h1>
        </SidePanelContainer>
    )
}