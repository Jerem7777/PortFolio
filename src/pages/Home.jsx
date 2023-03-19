import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Header from '../components/Header';
import Metier from '../components/Metier';
import Portfolio from '../components/Portfolio';

const Home = () => {
	return (
		<div>
			<Header />
			<main>
				<Banner />
				<Metier />
				<Portfolio />
				<Card />
			</main>
			
		</div>
	);
};

export default Home;