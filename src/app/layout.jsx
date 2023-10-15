import {Inter} from 'next/font/google'
import StyledComponentsRegistry from './registry';
import HeaderComponent from "components/components/header/header";
import FooterComponent from "components/components/footer/footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Test Task Games',
    description: 'Test Task Games on next.js',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <StyledComponentsRegistry>
        <body className={inter.className}>
        <main>
        <HeaderComponent/>
                {children}
        <FooterComponent/>
        </main>
        </body>
        </StyledComponentsRegistry>
        </html>
    )
}
