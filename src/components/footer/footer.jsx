'use client';

import styled from "styled-components";
import Link from "next/link";

const Footer = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const FooterComponent = () => {
    return (
        <Footer>
            TEST TASK GAMES
            <Link href='/'>Home</Link>
        </Footer>
    )
}

export default FooterComponent
