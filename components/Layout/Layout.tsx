import Navbar from 'components/Navbar/Navbar'
import { Props } from 'next/script'
import React from 'react'

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>asdasd</footer>

        </div>
    )
}

export default Layout