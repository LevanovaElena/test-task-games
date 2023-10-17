'use client';
import styled from "styled-components";
import Link from "next/link";
import SearchField from "../search-field/search-field";
import LogoImage from '../../assets/logo.svg';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: sticky;
  top: 0;
  padding: 30px;
  background-color: var(--gray-100);

  @media(min-width:576px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 68px;
  }
  @media(min-width:1400px){
    font-size: 18px;
    padding: 46px 96px;
  }
`;
const Nav = styled.nav`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media(min-width:1400px){
    font-size: 18px;
    color:wheat;
  }
`;
const NavItem = styled(Link)` 
  text-decoration: none;
  &:hover{
    color:var(--light-100);          
  }
  margin:0 10px;
`;

const Logo=styled(NavItem)`
    background: url(${LogoImage.src}) no-repeat center;
    width: 35px;
    height: 35px;
`;
const HeaderComponent = () => {
    return (
        <Header>
            <Nav>
                <Logo href='/'/>
                <NavItem href='/'>Home</NavItem>
            </Nav>
            <SearchField/>
        </Header>

    )
}

export default HeaderComponent
