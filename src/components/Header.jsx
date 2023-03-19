import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav className="navigation">
				<ul className="nav_link">
					<NavLink to="/"><li>Accueil</li></NavLink>
					<li><a href='Home.jsx #portfolio'>Portfolio</a></li>
					<NavLink to="/CV"><li>Curriculum Vitae</li></NavLink>
					<li><a href='#contacts'>Contacts</a></li>
					
						
				</ul>
			</nav>

		</header>
	);
};

export default Header;