import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../common/scss/Nav.css';
import { NavLink } from 'react-router-dom';
import logo from '../common/scss/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faBagShopping, faUserGroup } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="#">
                    <img src={logo} alt="logo" style={{ width: '200px' }}></img>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='navbar-brand mx-auto'>
                        <ul className="navbar-nav navbar-justify-content-center text-center">
                            <li className="nav-item active">
                                <FontAwesomeIcon icon={faCompass} />
                                <NavLink className="nav-link" to="/explore">Explore </NavLink>
                            </li>
                            <li className="nav-item">
                                <FontAwesomeIcon icon={faBagShopping} />
                                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <FontAwesomeIcon icon={faUserGroup} />
                                <NavLink className="nav-link" to="/instructor">Instructor</NavLink>
                            </li>
                            <li className="nav-item my-2" >
                            <NavLink className="nav-link" to="/signin">SIGN IN</NavLink>
                            </li>
                        </ul>
                      
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar;
