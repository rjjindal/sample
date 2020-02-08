import React from 'react';
import { Link } from 'react-router-dom';

  function SignedOut () {

    return(
        <nav>
            <div>
            <Link to={'/signUp'} className="nav-link"> Sign Up </Link>
            <Link to={'/login'} className="nav-link"> Login </Link>
            </div>
        </nav>
    )

}
export default SignedOut;