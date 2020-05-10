import React from 'react'
import {Link} from 'react-router-dom'
import { HeaderLogin } from './HeaderLogin';
import HeaderLogout from './HeaderLogout';

const Navbar = (props) => {
    console.log(props);
    return (
       <header className="header-bar mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
            <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white" style={{textDecoration:'none'}}>
                SocialNetwork
            </Link>
            </h4>
            
            {props.loggedIn ?  <HeaderLogin setLoggedIn={props.setLoggedIn}/>:<HeaderLogout setLoggedIn={props.setLoggedIn}/>}
        </div>
    </header>
  )
}
export default Navbar;