import React from 'react';

const Metier = () => {
	return (
		<section className='bloc-metier'>
			<h2 className='metier'>Mon métier</h2>
			<div className='bloc_p'>
				<p>En tant que développeur web front-end, mon but est de concrétiser vos projets et qu'ils vous ressemblent le plus possible.</p>
				<p>Que cela soit pour de la création , optimisation ou encore améliorer votre SEO.</p>
			</div>

			<div><img className='desk' src="desk_dev.jpg" alt=" divers déssein sur le thème de l'idée" /></div>
			<div><img className='seo' src="seo.jpg" alt=" divers déssein sur le thème du SEO" /></div>
			<div><img className='opti' src="optimisation.jpg" alt=" divers déssein sur le thème de l'optimisation" /></div>
		</section>
		
	);
};

export default Metier;