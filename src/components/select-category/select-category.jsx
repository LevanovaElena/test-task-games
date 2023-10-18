import {Dropdown} from "../dropdown";
import {ButtonComponent} from "../button";
import {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {getCategories} from "../../api/games";
import {GamesContext} from "../screen-home/screen-home";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

`
const SelectCategory = () => {
    const [categories, setCategories] = useState(null);
    const [opened, setOpened] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const {getGenres}=useContext(GamesContext)
    useEffect(() => {
        setOpened(false);

       if(currentCategory&&getGenres) getGenres(currentCategory.id==='all'?'':currentCategory.id)
    }, [currentCategory, getGenres]);
    useEffect(() => {
        getCategories().then(result => setCategories(result)).catch(error => console.warn(error));
    }, []);

    const onopenClick = () => {
        setOpened(prevState => !prevState)
    }
    return (
        <Wrapper>
            <ButtonComponent icon={'category'}
                             onClick={onopenClick}>
                {currentCategory?.name || 'Category'}
            </ButtonComponent>
            <Dropdown
                opened={opened}
                list={[{id: 'all',name: "All Categories"},...categories?.results||[]]}
                totalCount={categories?.count+1 || 0}
                setCurrentCategory={setCurrentCategory}>
            </Dropdown>
        </Wrapper>

    )
}

export default SelectCategory
