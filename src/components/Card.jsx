const Card = () => {
	return (
		<div className='card'>
			<img className='card__image' src='https://picsum.photos/200/300' alt='' />
			<div className='card__content'>
				<div className='card__location'>
					<span className='card_location-country'>Test country</span>
					<span className='card_location-link'>View on google maps</span>
				</div>
				<h1 className='card__title'>Test title</h1>
				<p className='card__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eum recusandae, a dignissimos magni facere praesentium? Culpa ullam consequatur harum, veniam temporibus id pariatur nesciunt deleniti laudantium quod eaque accusantium!</p>
			</div>
		</div>
	);
};

export default Card;
