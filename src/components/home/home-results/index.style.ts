import styled from 'styled-components'
import { mediaQueries } from '../../../shared/styles/media-queries'

export const HomeResultsContainerStyle = styled.div`
  overflow-y: scroll;
  padding: 6%;
  background: linear-gradient(90deg, rgba(25,44,78,1) 7%, rgba(130,64,100,1) 91%);
  height: 100vh;
  a {
    color: whitesmoke;
  }
  ${mediaQueries.md} {
    
    padding-top: 6%;
  }
`

export const HomeResultTableStyle = styled.table`
  table-layout: fixed;
  color: white;
  width: 80%;
  margin-left: 10%;
    td, th {
      padding: 8px;
      word-wrap: break-word;
    }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #102b4c;
    color: white;
  }
  tr:nth-child(even){background-color: #495c74;}
`

export const HomeResultsTextStyle = styled.p`
  margin-bottom: 100px;
  color: #93cbeb;
  text-align: justify;
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

export const ErrorRowText = styled.h1`
    text-align: center;
    font-size: 1.5rem;
`

export const SortButtonStyle = styled.button`
    margin-left: 1% ;
    background-color: transparent;
    color: #93cbeb;
  cursor: pointer;
  border: none;
`
