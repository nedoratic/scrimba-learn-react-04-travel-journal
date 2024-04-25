import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
// import data from './data.jsx';
import './App.css';

function App() {
	return (
		<div>
			<Navbar />
			<section className='main'>
				<Card />
			</section>
		</div>
	);
}

export default App;
