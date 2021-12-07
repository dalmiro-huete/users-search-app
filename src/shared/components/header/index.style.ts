import styled from 'styled-components'

export const HeaderContainerStyle = styled.div`
  position: absolute;
  padding: 3%;
  top: 0px;
  background-color: transparent;
  height: 50px;
  z-index: 1;
  width: 90%;
  img{
    @media (max-width: 767.98px) { width: 20%; padding: 6%;  filter: invert(100%);}
  }

`
