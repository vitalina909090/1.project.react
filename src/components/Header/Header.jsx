import React from 'react';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <Search/>
            <Menu />
        </header>
    );
}

export default Header;
