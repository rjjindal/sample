import React from 'react';
import { Link } from 'react-router-dom';

  function SignedIn () {

    return(
        <nav>
            <div>
            <Link to={'/login'} className="nav-link"> Sign Out </Link>
            {/* <Link to={'/next'} className="nav-link"> Project </Link> */}
            </div>
        </nav>
    )

}
export default SignedIn;