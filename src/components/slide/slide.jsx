import styled from "styled-components";
import Image from 'next/image';
import {useContext, useEffect, useState} from "react";
import {SliderContext} from "../slider/slider";
import {useResize} from "../../hooks/use-resize";

const SlideWrapper=styled.div`
  //flex: 1 0 100%;
  position: relative;
  // height: 40vh;
/*  height: 100%;
  width: 100%;*/
/*  width: 100%;
  height: 80vh;*/
  /*@media (min-width: 576px) {
    width: 500px;
  }
  @media (min-width: 1400px) {
    width: 1280px;
  }*/
/*  width: 100%;  
  min-height: 30%;
  height: auto;
  @media (min-width: 576px) {
    width: 51.4rem;
    height: 21.4rem;
    
  }
  @media (min-width: 1400px) {
    width: 91.4rem;
    height: 51.4rem;
  }*/

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
  width: ${props=>props.currentW?props.currentW+'px':'auto'};
  };
/*  width: 300px;
  height: auto;
  @media (min-width: 576px) {
    width: 500px;
  }
  @media (min-width: 1400px) {
    width: 1280px;
  }*/
`
const Slide = ({slide,animation}) => {
    const { slideNumber, listImages } = useContext(SliderContext);
    const [loadWidth, setLoadWidth ] = useState(300);
    const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl}=useResize();
    useEffect(() => {
        if(isScreenSm)setLoadWidth(300);
        if(isScreenMd)setLoadWidth(500);
        if(isScreenXl)setLoadWidth(1280);

    }, [isScreenSm,isScreenMd,isScreenXl]);
    return (
        <SlideWrapper  className={`${animation && 'fadeInAnimation'}`}>
                <ImageSlide src={slide.image} alt={'slide'} width={loadWidth} height={300} currentW={width-100}/>
        </SlideWrapper>
    );
}

export default Slide
