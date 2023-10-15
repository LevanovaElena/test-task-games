'use client';
import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  padding: 4em;
  background: papayawhip;
`;
const Nav = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const HeaderComponent = () => {
    return (
        <Header>
            <Nav>
                TEST TASK GAMES
                <Link href='/'>Home</Link>
                <Link href='/game/1sasa'>Game1</Link>
                <Link href='/game/144343'>Game1</Link>
            </Nav>
        </Header>

    )
}

export default HeaderComponent
