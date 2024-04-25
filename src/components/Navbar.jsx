import Logo from '../assets/favicon.svg';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar__nav'>
				<li className='navbar__nav-item'>
					<img className='navbar__nav-item-logo' src={Logo} alt='Logo' />
					<a className='navbar__nav-item-link' href='#'>
						My travel journal
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
