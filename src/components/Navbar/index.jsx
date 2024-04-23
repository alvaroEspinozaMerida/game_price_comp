import  { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css'; // Ensure Bulma is imported if not already done in a central file

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggler = () => setMenuOpen(!menuOpen);

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <strong>Price Probe</strong>
                </Link>

                {/* Hamburger menu for mobile */}
                <a role="button" className={`navbar-burger ${menuOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={menuToggler}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <Link className="navbar-item" to="/about">
                        Store
                    </Link>
                    <Link className="navbar-item" to="/about">
                        About
                    </Link>
                    <Link className="navbar-item" to="/donate">
                        Support
                    </Link>
                </div>

                <div className="navbar-end">
                    {/* You can add items here if there are right-aligned menu items */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;