import { styled } from "../../styles";

export const Button = styled("button",{
    border: 0,
    padding: '0.75rem',
    color: '#8D8D99',
    backgroundColor: '$gray800',
    borderRadius: 6,
    position: "relative",

    span: {
        position: "absolute",
        right: "-7px",
        top: "-7px",
        backgroundColor: '$green300',
        fontWeight: 700,
        height: "1.50rem",
        width: "1.50rem",
        borderRadius: "50%",
        color: "$white",
        outline: "$gray900 5px solid",
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})