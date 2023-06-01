import { styled } from "..";

export const SuccessContainer = styled('main',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
        margin: "3rem 0 1.5rem 0"
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: "center",
        marginTop: '2rem',
        lineHeight: 1.4,

    },

    a: {
        display: "block",
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300'
        }
    }
})

export const ImageContainer = styled('div',{
    width: '100%',
    maxWidth: "19.75rem",

    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    
    img: {
        maxWidth: "8.125rem",
        width: "100%",
        height: "8.125rem",
        borderRadius: "100%",
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        padding: "0.25rem",

        "&:nth-child(2)": {
            marginLeft: "-3.25rem"
        },

        "&:nth-child(3)": {
            marginLeft: "-3.25rem"
        },

        "&:nth-child(4)": {
            marginLeft: "-3.25rem"
        }

    }
})