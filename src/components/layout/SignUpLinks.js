import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const SignUpLinks = () => {
	return(
		<ul className='right'>
			<li><NavLink to="/signin">Sign Up</NavLink></li>
			<li><NavLink to="/signup">Login</NavLink></li>
		</ul>
	)
}

export default SignUpLinks;
