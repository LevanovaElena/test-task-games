'use client';

import styled from "styled-components";
import SearchIcon from '../../assets/icons/search.svg';
import IconClose from '../../assets/icons/close.svg';
import {useEffect, useState} from "react";
import {useDebounce} from "../../hooks/debounce";
import {useRouter, useSearchParams} from "next/navigation";

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
  height: 100%;
  display: block;

  
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

    margin-top:0;
  }  
`

const Line=styled.hr`
  width: 96%;
  align-self: center;
  margin: 15px 0;
  height: 0;
  color:var(--gray-200);
  background-color: var(--gray-200);
  border-top: none;
  @media(min-width:576px){
   display: none;
  }
`
const Form=styled.form`
width: 100%;
  @media(min-width:576px){
    width: 70%;
  }
`
const ButtonClose=styled.button`
  background: url(${IconClose.src}) no-repeat center;
  width: 35px;
  height: 35px;
  position: absolute;
      top:3px;
  right: 5px;
  &:focus{
    outline: none;
  }
  border:none;
  cursor: pointer;
`
const SearchField = () => {
    const [value, setValue] = useState('')
    const debounced=useDebounce(value,300);
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('search')
    useEffect(()=>{

        if(search)setValue(search)
    },[search])


    const onChange=(event)=>{
        setValue(event.target.value);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        if(debounced?.length>2){
            router.push(`/?search=${debounced}`)
        }
    }
    const onClick=(event)=>{
        event.preventDefault();
        if(debounced?.length>2){
            setValue('');
            router.push(`/`)
        }
    }
    return (
        <Form onSubmit={onSubmit}>
            <Line/>
            <Label>
                <Input placeholder='Search Game' value={value} onChange={onChange}/>
                {debounced?.length>2? <ButtonClose type={"button"} onClick={onClick}/>:''}
            </Label>
        </Form>


    )
}

export default SearchField
