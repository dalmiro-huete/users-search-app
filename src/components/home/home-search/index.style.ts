import styled from 'styled-components'
import { mediaQueries } from '../../../shared/styles/media-queries'

export const BaseTyping = styled.div`
  margin-right: 10px; 
  overflow: hidden;
  border-right: .3rem solid white;
  white-space: nowrap;
  animation: typing 2s steps(20, end) forwards, blinking .8s infinite;
  font-size: 2.8rem;
  width: 0;
  ${mediaQueries.xlg} {
    font-size: 2.188rem;
  }
  ${mediaQueries.xl} {
    font-size: 1.563rem;
  }
`

export const HomeSearchContainerStyle = styled.div`
  position: relative;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  gap: 10% ;
`

export const HomeSearchBannerStyle = styled.div`
  height: 100vh;
  width: 50%;
  img {
    position: absolute;
    left: 0px;
    object-fit: cover;
    height: 100vh;
    width: 48%;
    @media (max-width: 767.98px) { width: 100%; opacity: 0.1; filter: grayscale(100%); }
}
`

export const HomeSearchFormStyle = styled.div`
  width: 40%;
  ${mediaQueries.md} {
    position: absolute;
    left: 10%;
    width: 100%;
  }
`

export const HomeSearchTextStyle = styled.p`
  display: inline-block;
  text-align: justify;
  margin-top: 30%;
  font-size: 2.8rem;
  span{
    width: 16ch;
  }
  span::after {
    content: "\\a";
    white-space: pre;
  }
  ${mediaQueries.xlg} {
    font-size: 2.188rem;
  }
  ${mediaQueries.xl} {
    font-size: 1.563rem;
  }
`
