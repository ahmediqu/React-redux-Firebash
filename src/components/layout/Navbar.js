import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignUpLinks from './SignUpLinks';
const Navbar = () => {
	return(
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">Logo Here</Link>
				<SignInLinks/>
				<SignUpLinks/>
			</div>
		</nav>
	)
}

export default Navbar;
