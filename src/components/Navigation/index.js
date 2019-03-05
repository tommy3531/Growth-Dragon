import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
    <div>
        { authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </div>
);

const NavigationAuth = () => (
    <div class="block">
        <nav class="nav">
            <div class="nav-left">
                <a href="" class="nav-item">
                    <span class="icon">
                        <i className="fa fa-github"></i>
                    </span>
                </a>
            </div>
        </nav>
        <div className="nav-right nav-menu">
            <ul>
                <a href="" className="nav-item">
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </a>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
                <li>
                    <SignOutButton />
                </li>
            </ul>
        </div>
    </div>
);

const NavigationNonAuth = () => (
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
            <FontAwesomeIcon icon={faDragon} />
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>
                <a class="navbar-item">
                    About
                </a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-light">
                            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                        </a>
                        <a class="button is-light">
                            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default Navigation;