import {Dropdown} from "../dropdown";
import {ButtonComponent} from "../button";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {mockCategories} from "../../../mocks/genres";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

`
const SelectCategory = () => {
    const [opened, setOpened] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    useEffect(() => {
        setOpened(false);
    }, [currentCategory]);
    return (
        <Wrapper>
            <ButtonComponent icon={'category'}
                             onClick={() => setOpened(prevState => !prevState)}>{currentCategory?.name || 'Category'}</ButtonComponent>
            <Dropdown opened={opened} list={mockCategories.results} totalCount={mockCategories.count || 0}
                      setCurrentCategory={setCurrentCategory}>

            </Dropdown>
        </Wrapper>

    )
}

export default SelectCategory
