'use client';
import styled from "styled-components";
import Image from 'next/image'
import SliderButton from "../slider-button/slider-button";
import {Flex} from "../../styles/common";
import {useEffect,  useState} from "react";

const DropdownContainer = styled.ul`
  background-color: var(--gray-100);
  padding: 18px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  border-radius: 12px;
  border: 0.7px solid var(--gray-250);
  background: var(--white);
  box-shadow: 7px 7px 36px 0 rgba(20, 20, 22, 0.10);
  top: 105%;
  left: 0;
  list-style-type: none;

  @media (min-width: 576px) {

  }
  @media (min-width: 1400px) {

  }
`
const TitleDropdown = styled.p`
  font-weight: 600;
  font-size: 15px;
  color: var(--dark);
`
const Info = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: var(--dark);
  margin-left: 15px;

  span {
    font-size: 12px;
    color: var(--gray-400);
  }

`
const Li = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 300px;
  margin: 10px 0;

  &:hover {
    img {
      width: 80px;
      height: 80px;
    }
  }

`
const ImageCategory = styled(Image)`
  margin-right: 5px;
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
  transition: all 0.5s;

`
const COUNT_CATEGORIES_ON_PAGE = 5;
const getCountPage = (totalCount) => {
    return Math.floor(totalCount / COUNT_CATEGORIES_ON_PAGE) + (totalCount % COUNT_CATEGORIES_ON_PAGE > 1 ? 1 : 0)
}
const Dropdown = ({opened, list, totalCount, setCurrentCategory}) => {
    const [currentList, setCurrentList] = useState(list.slice(0, COUNT_CATEGORIES_ON_PAGE));
    const [currentPage, setCurrentPage] = useState(0);
    const [allPages, setAllPages] = useState(getCountPage(totalCount));
    useEffect(() => {
        setAllPages(getCountPage(totalCount));
        setCurrentList(list.slice(0, COUNT_CATEGORIES_ON_PAGE));
    }, [list, totalCount]);

    useEffect(() => {
        if (!currentPage) return;
        const start = (currentPage - 1) * COUNT_CATEGORIES_ON_PAGE;
        const end = (currentPage - 1) * COUNT_CATEGORIES_ON_PAGE + COUNT_CATEGORIES_ON_PAGE;
        setCurrentList([...list.slice(start, end)]);

    }, [currentPage])
    const nextPage = () => {
        if (currentPage < allPages) {
            setCurrentPage(prevState=> {
                if(prevState===0)return 2;
                return currentPage + 1
            });
        }
    }
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    return (
        <DropdownContainer style={{display: opened ? 'flex' : 'none'}}>
            <Flex>
                <TitleDropdown>Categories</TitleDropdown>
                <SliderButton onClickNext={nextPage}
                              onClickPrev={prevPage}
                              nextActive={currentPage < allPages}
                              prevActive={currentPage > 1}
                />
            </Flex>

            {currentList && currentList.length > 0 && currentList.map(item => (
                <Li key={item.id} onClick={() => {
                    setCurrentCategory(item);
                }}>
                    {item.id==='all'?'':
                    <ImageCategory alt={item.name || ''} src={item.image_background} width={300} height={300}/>
                    }
                        <Info>
                        <p>{item.name || ''}</p>
                            {item.id==='all'?'':<span>Games Count: {item.games_count}</span>}
                    </Info>
                </Li>

            ))}

        </DropdownContainer>
    )
}

export default Dropdown
