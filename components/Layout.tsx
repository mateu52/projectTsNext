import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className=''>
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout;