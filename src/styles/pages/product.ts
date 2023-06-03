import { styled } from "..";

export const ProductContainer = styled('main',{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: 1180,
    margin: '0 auto',

    '@media (max-width: 700px)':{
        gridTemplateColumns: '1fr',
      }
})

export const ImageContainer = styled('div',{
    maxWidth: 576,
    width: '100%',
    // height: 656,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        width: "100%",
        objectFit: 'cover',

        '@media (max-width: 350px)': {
            objectFit: "contain",
            height: 350
          }
    },

    '@media (max-width: 700px)':{
        maxWidth: "100%"
      }

})

export const ProductDetails = styled('div',{
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled':{
         opacity: 0.6,
         cursor: 'not-allowed',
        },

        '&:not(:disabled):hover':{
         backgroundColor: '$green300',
        }
    }
})