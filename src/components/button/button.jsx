'use client';
import styled from "styled-components";
import IconCategory from '../../assets/icons/category.svg';
import IconDate from '../../assets/icons/date.svg';
import IconStar from '../../assets/icons/star.svg';
import IconUp from '../../assets/icons/arrow-up.svg';
import IconDown from '../../assets/icons/arrow-down.svg';
import Image from 'next/image'

const getIcon=(icon)=>{
    switch (icon) {
        case 'category':return IconCategory;
        case 'date':return IconDate;
        case 'star':return IconStar;
        case 'up':return IconUp;
        case 'down':return IconDown;
        default: return null;
    }
}

const Button=styled.button`
  border-radius: 9px;
  border: 1.5px solid var(--dark);
  color: ${props => props.fill?`var(--gray-100)`:`var(--dark)`};
  font-size:1rem;
  font-weight: 600;
  background-color: ${props => props.fill?`var(--dark)`:`var(--gray-100)`};
  cursor: pointer;
  padding:11px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    box-shadow: var(--shadow-1);
  }

  @media(min-width:576px){
    border-radius: 10px;
    border: 1.6px solid var(--dark);
    font-size:12px;
    padding:13px;
  }
  @media(min-width:1400px){
    border-radius: 14px;
    border: 2.3px solid var(--dark);
    font-size:16px;
    padding:14px;
  }            
`
const ImageIcon=styled(Image)`
  margin-right: 5px;
`

const ButtonComponent = ({children,fill,icon,iconAfter,onClick,...props}) => {
    return (
        <Button  fill={fill} onClick={onClick} {...props}>
            {icon?<ImageIcon src={getIcon(icon)} alt='icon'/>:null}
            {children}
            {iconAfter?<ImageIcon src={getIcon(iconAfter)} alt='sort' style={{margin:'3px 0  0 5px'}}/>:null}
        </Button>
    )
}

export default ButtonComponent
