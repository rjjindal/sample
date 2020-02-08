import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import SignedIn from './signedIn';
import SignedOut from './signedOut';

 function Header(props) {

    return(
        <nav style={{ width: '100%', height: '50px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '11px'  }}>
            {/* <Link to={'/next'} className="nav-link"> Sign In </Link>
            <Link to={'/'} className="nav-link"> Sign Out </Link> */}
           {props.flag === true && <SignedIn />}
            {props.flag === false && <SignedOut />}
            </div>
        </nav>
    )

}
const mapStateToProps = (state)=> {
    return {
        flag: state.flag,
    }
}
export default connect(mapStateToProps)(Header);