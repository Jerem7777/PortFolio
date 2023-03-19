import React from 'react';

const Card = () => {
	return (
		<section className='cards'>
			<article className="card_thumb">
				<div className='card'>
					<a href="https://jerem7777.github.io/P3_DosSantos/index.html"><img className='card_img' src="Ohmyfood.jpg" alt="Page d'acceuil du site de commande de nourriture en ligne ohmyfood" /></a>
					<div className='card_detail'>
						<h3>Ohmyfood : </h3>
						<p>Commander ses plats en avance au restaurant </p>
					</div>
				</div>
				<div className='card'>
					<a href="https://github.com/Jerem7777/P5-Dev-Web-Kanap.git"><img className='card_img' src="Kanap.jpg" alt="Page d'acceuil du site Kanap" /></a>
					<div className='card_detail'>
						<h3>Kanap</h3>
						<p>Acheter ses canapés en ligne</p>
					</div>
				</div>
				<div className='card'>
					<a href="https://github.com/Jerem7777/P5-Dev-Web-Kanap.git"><img className='card_img' src="HotTakes.jpg" alt="Page d'acceuil du site Kanap" /></a>
				
					<div className='card_detail'>
						<h3>Hot Takes</h3>
						<p>API de partage de sauces piquante</p>
					</div>
				</div>
			</article>	
		
	</section>);
};

export default Card;