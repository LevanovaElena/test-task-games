'use client';

import styled from "styled-components";
import SearchIcon from '../../assets/icons/search.svg';

const Input = styled.input`
 background-color: var(--gray-200);
  max-height: 40px;
  padding: 14px 14px 14px 35px;
  border-radius: var(--radius-4);
  border:none;
  &:focus{
    outline: none;
    border:1px var(--gray-300) solid;
  }
  width: 100%;
  height: 100%;
`;

const Label=styled.label`
  background: transparent;
  max-height: 40px;
  width: 100%;
  position: relative;

  
  &:focus{
    outline: none;    
  }
  &:before{
    content: "";
    background: url(${SearchIcon.src}) no-repeat center;
    width: 35px;
    height: 35px;
    display: block;
    z-index: 1000;
    position: absolute;
    left:5px;
    top:5%;
  }

  @media(min-width:576px){
    width: 50%;
    margin-top:0;
  }  
`

const Line=styled.hr`
  width: 96%;
  align-self: center;
  margin: 15px 0;
  height: 0px;
  color:var(--gray-200);
  background-color: var(--gray-200);
  border-top: none;
  @media(min-width:576px){
   display: none;
  }
`
const SearchField = () => {
    return (
        <>
            <Line/>
            <Label>
                <Input placeholder='Search Game'/>
            </Label>
        </>


    )
}

export default SearchField
