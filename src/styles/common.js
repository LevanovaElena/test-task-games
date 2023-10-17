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
  width: ${props => props.flexwidth ? props.flexwidth : '100%'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.jcontent ? props.jcontent : 'space-between'};
  align-items: ${props => props.items ? props.items : 'center'};
  margin: ${props => props.flexmargin ? props.flexmargin : '0'};
`
