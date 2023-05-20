import { styled } from "../../styles";

// export const Container = styled('div', {
//     width: 0,
//   position: "fixed",
//   zIndex: 1,
//   height: 250,
//   top: 0,
//   left: 0;
//   background-color: "#111",
//   overflow-x: "hidden",
//   transition: "0.5s";
//   padding-top: 60,
// })

export const SidePanelContainer = styled('div', {
  width: 0,
  position: "fixed",
  zIndex: 1,
  height: 250,
  top: 0,
  left: 0,
  backgroundColor: "#111",
  overflowX: "hidden",
  transition: "0.8s",
  paddingTop: 60,

  variants: {
    opening: {
      true: {
        width: 250,
      },
      false: {
        width: 0,
      }
    }
  },

  p:{
    color: '$white'
  }
})