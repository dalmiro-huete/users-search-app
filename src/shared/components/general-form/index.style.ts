import styled from 'styled-components'

export const GeneralFormStyle = styled.form`
  padding: 0px;
  display: flex;
  flex-flow: row wrap;
  gap: 50%;
  input[type=text] {
    width: 50%;
    top: 0px;
    padding: 12px 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 2%;
    font-size: 18px;
  }

  label {
    font-size: 1.5rem;
    font-weight: lighter;
  }
`
