import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../data/StateProvider';
import { auth } from '../firebase';

const Header = () => {
  const [{ cart, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Head>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchIn' />
        <SearchIcon className='search_icon' />
      </div>
      <Nav>
        <Link to={!user && '/login'}>
          <div onClick={handleAuth} className='header__option'>
            <span className='lineone'>Hello {user ? user.email : 'Guest'}</span>
            <span className='linetwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='lineone'>Returns</span>
          <span className='linetwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='lineone'>Your</span>
          <span className='linetwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='basket'>
            <ShoppingBasketIcon />
            <span className='linetwo count'>{cart?.length}</span>
          </div>
        </Link>
      </Nav>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  a {
    text-decoration: none;
  }

  .header__logo {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
  }

  .search_icon {
    padding: 5px;
    height: 22px;
    background-color: #cd9042;
  }

  .header__search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
  }

  .header__searchIn {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;

  .header__option {
    display: flex;
    color: white;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }

  .lineone {
    font-size: 10px;
  }

  .linetwo {
    font-size: 13px;
    font-weight: 800px;
  }

  .basket {
    display: flex;
    align-items: center;
    color: white;
  }

  .count {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
