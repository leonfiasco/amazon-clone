import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../contextApi/StateProvider';

import '../styles/Header.css';
import { auth } from '../firebase';

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header_logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
				/>
			</Link>
			<div className='header_search'>
				<input className='header_searchInput' type='text' />
				<SearchIcon className='header_searchIcon' />
			</div>
			<div className='header_nav'>
				{/* stops the page redirecting to login form when a user signs out 
            if user not found then go to login page */}
				<Link to={!user && '/login'}>
					<div className='header_option' onClick={handleAuthentication}>
						<span className='header_optionLineOne'>
							{user
								? `Hello ${user.email.substring(0, user.email.indexOf('@'))}`
								: 'Hello Guest'}
						</span>
						<span className='header_optionLineTwo'>
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>
				<div className='header_option'>
					<span className='header_optionLineOne'>Returns</span>
					<span className='header_optionLineTwo'>& Orders</span>
				</div>
				<div className='header_option'>
					<span className='header_optionLineOne'>Your</span>
					<span className='header_optionLineTwo'>Prime</span>
				</div>
				<Link to='/checkout'>
					<div className='header_optionBasket'>
						<ShoppingBasketIcon />
						<span className='header_optionLineTwo header_basketCount'>
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
