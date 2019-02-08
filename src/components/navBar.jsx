import React from 'react';

// state less functional 
const NavBar = ({totalCount}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <p className="navbar-brand">Navbar</p>
            <span className="badge badge-pill badge-secondary">{totalCount}</span>
        </nav>);
}

export default NavBar;
