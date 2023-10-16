import {Inter} from 'next/font/google'
import StyledComponentsRegistry from './registry';

import '../styles/global.css'
import HeaderComponent from "../components/header/header";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Test Task Games',
    description: 'Test Task Games on next.js',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <StyledComponentsRegistry>
                <body className={`${inter.className} container`}>
                    <HeaderComponent/>
                        <main >
                                {children}
                        </main>
                </body>
            </StyledComponentsRegistry>
        </html>
    )
}
