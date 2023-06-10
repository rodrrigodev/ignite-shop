import { relative } from "path";
import { styled } from "../../styles";

export const SidePanelContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: 0,
  position: "fixed",
  zIndex: 1,
  height: "100vh",
  top: 0,
  right: 0,
  backgroundColor: "$gray800",
  overflow: "hidden",
  transition: "0.8s",

  variants: {
    opening: {
      true: {
        width: "45%",
        '@media (max-width: 956px)':{
            width: '60%',
          },

          '@media (max-width: 720px)':{
            width: '100%',
          },
      },
      false: {
        width: "0",
      },
    },
  },

  "> div": {
    padding: "3rem 2rem 1rem",
  },
  
  whiteSpace: "nowrap",
})

export const CartHeader = styled("header",{
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row-reverse",
  flexWrap: "nowrap",

  button: {
    alignSelf: "center",

    border: 0,
    backgroundColor: "transparent",
    color: "#8D8D99",
    marginTop: "-3.4rem",
    cursor: "pointer",
    transition: "all 500ms",

    "&:hover":{
      color: "$gray100",
      transition: "all 500ms",
    }
  },

  h1:{
    fontSize: "1.5rem",
    lineHeight: 1.6,
  }
})


export const ProductDescription = styled("div", {
  marginTop: "2rem",
  display: "flex",
  gap: "1.25rem",

  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

  },

  img: {
    maxWidth: "5rem",
    width: "100%",
    borderRadius: 8,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  },

  h2: {
    fontSize: "1.2rem",
    color: "$gray300",
    lineHeight: 1.6,
    '@media (max-width: 320px)':{
      fontSize: "1rem"
  },
  },

  span: {
    fontSize: "1.2rem",
    fontWeight: 700,
    lineHeight: 1.6,
    color: "$gray100"
  },

  button: {
    fontSize: "1.2rem",
    fontWeight: 700,
    lineHeight: 1.6,
    color: "$green500",
    backgroundColor: "transparent",
    border: 0,
    alignSelf: "flex-start",
    transition: "all 500ms",
    cursor: "pointer",

    "&:hover": {
      transition: "all 500ms",
      color: "$green300",
    }
  }
})


export const PriceContainer =  styled("div", {
  "div:nth-child(1)": {
    display: "flex",
    justifyContent: "space-between",

    span: {
      lineHeight: 1.6,

      "&:nth-child(1)":{
        color: "$gray100"
      },

      "&:nth-child(2)":{
        color: "$gray300"
      }
    }
  },

  "div:nth-child(2)": {
    marginTop: "0.4375rem",
    display: "flex",
    justifyContent: "space-between",

    span: {
      color: "$gray100",
      fontWeith: 700,

      "&:nth-child(1)":{
        lineHeight: 1.6,        
      },

      "&:nth-child(2)":{
        fontSize: "1.5rem",
        lineHeight: 1.4,
      }
    }
  },

  button: {
    width: "100%",
    padding: "1.25rem 0",
    fontSize: "1.125rem",
    fontWeight: 700,
    lineHeight: 1.6,
    color: "$white",
    backgroundColor: "$green500",
    border: 0,
    borderRadius: 8,
    marginTop: "2.5rem",
    transition: "all 500ms",
    cursor: "pointer",
    overflow: "hidden",

    "&:hover": {
      transition: "all 500ms",
      backgroundColor: "$green300",
    }
  }
})

export const EmptyBag = styled("div",{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  top: "-15%",

  p: {
    fontSize: "1.5rem"
  },

  img: {
    maxWidth: "18.75rem",
    width: "100%"
  }

})