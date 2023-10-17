'use client';

import styled from "styled-components";
import Link from "next/link";
import {Flex, H1} from "../../styles/common";
import {ButtonComponent} from "../button";
import {SelectCategory} from "../select-category";


const Wrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 75px 0 ;
  
  @media(min-width:576px){
    padding: 110px 0 75px 0;   
  }
  @media(min-width:1400px){
    padding: 155px 0 100px 0;
  }
`;


const Filters = () => {
    return (
        <Wrapper  >
            <H1>Find Your Game!</H1>
            <Flex width={'auto'} margin={'20px 0 0 0'}>
                <SelectCategory/>
                <ButtonComponent icon={'date'} iconAfter={'up'} style={{'margin':'0 20px'}}>Release date</ButtonComponent>
                <ButtonComponent icon={'star'}>Average rating</ButtonComponent>
            </Flex>


        </Wrapper>
    )
}

export default Filters
