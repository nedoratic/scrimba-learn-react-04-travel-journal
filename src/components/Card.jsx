import location from '../assets/location.svg';

const Card = () => {
	return (
		<div className='card'>
			<img className='card__image' src='https://picsum.photos/200/250' alt='' />
			<div className='card__content'>
				<div className='card__location'>
					<img className='card__location-icon' src={location} alt='Location icon' />
					<span className='card__location-country'>Test country</span>
					<a href='' className='card__location-link'>
						View on Google Maps
					</a>
				</div>
				<h1 className='card__title'>Test title</h1>
				<p className='card__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eum recusandae, a dignissimos magni facere praesentium? Culpa ullam consequatur harum, veniam temporibus id pariatur nesciunt deleniti laudantium quod eaque accusantium!</p>
			</div>
		</div>
	);
};

export default Card;
