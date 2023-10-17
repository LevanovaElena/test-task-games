import styled from "styled-components";

export const H1=styled.h1`
  color:var(--dark);
  font-size: 30px;
  line-height: 37.5px;
  font-weight: 600;
  height: auto;
  @media(min-width:576px){
    font-size: 32px;
    line-height: 22px;
  }
  @media(min-width:1400px){
    font-size: 45px;
    line-height: 30px;    
  }
`

export const Flex=styled.div`
  display: flex;
  width: ${props => props.width ? props.width : '100%'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  margin: ${props => props.margin ? props.margin : '0'};
`
