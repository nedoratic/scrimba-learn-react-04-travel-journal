import location from '../assets/location.svg';

const Card = (props) => {
	return (
		<div className='card'>
			<a href={props.imageURL} target='_blank'>
				<img className='card__image' src={props.imageURL} alt={props.tittle} />
			</a>
			<div className='card__content'>
				<div className='card__location'>
					<img className='card__location-icon' src={location} alt='Location icon' />
					<span className='card__location-country'>{props.country}</span>
					<a className='card__location-link' href={props.googleMapsURL} target='_blank'>
						View on Google Maps
					</a>
				</div>
				<h1 className='card__title'>{props.tittle}</h1>
				<p className='card__description'>{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
