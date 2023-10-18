import styled from "styled-components";
import Image from 'next/image';
import {useContext, useEffect, useState} from "react";
import {SliderContext} from "../slider/slider";
import {useResize} from "../../hooks/use-resize";

const SlideWrapper=styled.div`
  position: relative;

  &.fadeInAnimation {
    animation: fadeIn 1.5s;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`
const ImageSlide = styled(Image)`
  border-radius: 24px;
  object-fit: contain;
  display: flex;
  margin: 0 auto;
  height: auto;
   width: ${props=>props.currentW&&props.currentW<1200?props.currentW+'px':'80%'};
  };
`
const Slide = ({slide,animation}) => {
    const [loadWidth, setLoadWidth ] = useState(300);
    const [imageW, setImageW ] = useState(300);
    const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl}=useResize();
    useEffect(() => {
        if(isScreenSm)setLoadWidth(300);
        if(isScreenMd)setLoadWidth(500);
        if(isScreenXl)setLoadWidth(1280);

    }, [isScreenSm,isScreenMd,isScreenXl]);
    useEffect(() => {
        if(width>=1000)setImageW(width-200);
        else if(width>=1400)setImageW(width-1000);
        else if(width<1000) setImageW(width-100);


    }, [width]);
    return (
        <SlideWrapper  className={`${animation && 'fadeInAnimation'}`}>
                <ImageSlide src={slide.image} alt={'slide'} width={loadWidth} height={300} currentW={imageW}/>
        </SlideWrapper>
    );
}

export default Slide