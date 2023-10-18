import React, { useState} from "react";
import styled from "styled-components";

export const MAX_COUNT_LETTERS_FOR_VIEW = 333;

const DescriptionWrapper=styled.div`
   position: relative;
  font-size: 12px;
  z-index:0 ;
`
const Text=styled.div`
  z-index: 100;
  position: relative;
  &.card-description__text_gradient{
    background: linear-gradient(180deg, #5C6373 67.71%, rgba(92, 99, 115, 0.00) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  margin-bottom: 4px;
`
const ButtonOpen=styled.a`
  color:var(--gray-700);
  font-weight: 600;
  cursor: pointer;
  
`
const CardDescription = ({description}) => {
    const [textResult, setTextResult] = useState(description.substring(0, MAX_COUNT_LETTERS_FOR_VIEW));
    const [isOpen, setIsOpen] = useState(false);
    const bigText = description.length > MAX_COUNT_LETTERS_FOR_VIEW;

    const onClickBtnReadAll = () => {
        setIsOpen(prevState => {
            setTextResult(!prevState ? description : description.substring(0, MAX_COUNT_LETTERS_FOR_VIEW))
            return !prevState;
        });
    }

    if (!description) return '';
    return (
            <DescriptionWrapper className={`card-description__text`}>
                <Text className={`text ${bigText&&isOpen||!bigText?'':'card-description__text_gradient'}`}>{textResult}</Text>
                {bigText &&
                    <ButtonOpen className={`card-description__btn ${isOpen ? `card-description__btn_open` : `card-description__btn_close`}`}
                       onClick={onClickBtnReadAll}>{isOpen ? "Less" : "More"}</ButtonOpen>
                }
            </DescriptionWrapper>
    );

}
export default CardDescription
