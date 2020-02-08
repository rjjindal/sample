import React from 'react';
// import { Link } from 'react-router-dom';
import SignedIn from './signedIn';
import SignedOut from './signedOut';

 function Header() {

    return(
        <nav style={{ width: '100%', height: '50px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '11px'  }}>
            {/* <Link to={'/next'} className="nav-link"> Sign In </Link>
            <Link to={'/'} className="nav-link"> Sign Out </Link> */}
            <SignedIn />
            <SignedOut />
            </div>
        </nav>
    )

}
export default Header;