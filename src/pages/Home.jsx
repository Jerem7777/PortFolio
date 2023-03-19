import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Header from '../components/Header';
import Metier from '../components/Metier';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

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
			<Footer />
			
		</div>
	);
};

export default Home;