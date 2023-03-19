import React from 'react';
import MonCV from '../components/MonCV';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const CV = () => {
	return (
	<div>
		<Header />
			<main>
				<Banner />
				<MonCV />
			</main>
			<Footer />
			
		</div>
	);
};

export default CV;