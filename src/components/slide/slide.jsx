'use client';
import styled from "styled-components";
import Image from 'next/image';
import { useEffect, useState} from "react";
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
   width: ${props=>props.currentw&&props.currentw<1200?props.currentw+'px':'80%'};
  };
`
const Slide = ({slide,animation}) => {
    const [loadWidth, setLoadWidth ] = useState(300);
    const [imageW, setImageW ] = useState(300);
    const { width, isScreenSm, isScreenMd,  isScreenXl}=useResize();
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
            {slide&&slide.image?<ImageSlide src={slide.image||''} alt={'slide'} width={loadWidth} height={300} currentw={imageW}/>:null}
        </SlideWrapper>
    );
}

export default Slide
