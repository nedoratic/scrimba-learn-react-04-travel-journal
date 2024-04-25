import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import data from './data.jsx';
import './App.css';

function App() {
	console.log(data);

	const destinations = data.map((destination) => {
		return <Card key={destination.id} imageURL={destination.imageURL} tittle={destination.tittle} location={destination.location} country={destination.country} googleMapsURL={destination.googleMapsURL} description={destination.description} />;
	});

	return (
		<div>
			<Navbar />
			<section className='main'>{destinations}</section>
		</div>
	);
}

export default App;
