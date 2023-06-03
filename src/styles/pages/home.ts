import { styled } from "@stitches/react";

export const HomeContainer = styled('main',{
    display: 'flex',
    // gap: '3rem',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: '41rem',
})

export const Product = styled("div",{
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    // padding: '0.25rem',
    cursor: 'pointer',

    display: 'flex',
    alignItems: "center",
    justifyContent: "center",

    img: {
        height: 700,
        objectFit: "contain",

        '@media (max-width: 350px)': {
            height: 350
          }
    },

    footer: {
    position: "absolute",
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    backgroundColor: 'rgb(0, 0, 0, 0.6)',
    borderRadius: 6,

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
    },

    strong: {
        fontSize: '$lg',
        color: '$gray100',
    },

    span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300'
    },

    button: {
        border: 0,
        padding: '0.75rem',
        borderRadius: 6,
        color: '$white',
        backgroundColor: '$green500',
        transition: 'all 500ms',
        cursor: "pointer",

        display: 'flex',
        alignItems: 'center',
        
        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
            transition: 'all 500ms',
        },

        '&:disabled': {
            cursor: 'not-allowed',
        }
    }
    },

    '&:hover': {
    footer: {
        transform: 'translateY(0%)',
        opacity: 1,
    }
    }
})