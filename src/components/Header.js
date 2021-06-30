import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { useStateValue } from '../data/StateProvider';
import { auth } from '../firebase';

const Header = () => {
  const [navStatus, setNavStatus] = useState(false);
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
        <Link to='/orders'>
          <div className='header__option'>
            <span className='lineone'>Returns</span>
            <span className='linetwo'>& Orders</span>
          </div>
        </Link>
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
        <div className='display'>
          <CustomMenu onClick={() => setNavStatus(true)} />
        </div>
        <IconNav show={navStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setNavStatus(false)} />
          </CloseWrapper>
          <li>
            <span>Hello {user ? user.email : 'Guest'}</span>
            <Link to={!user && '/login'}>
              <div onClick={handleAuth}>
                <span>{user ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/orders'>
              <span>Returns</span>
              <span> & Orders</span>
            </Link>
          </li>
          <li>
            <Link to='#'>
              <span>Your Prime</span>
            </Link>
          </li>
        </IconNav>
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

  @media (max-width: 768px) {
    .header__searchIn {
      width: 60%;
    }
  }
`;

const CustomMenu = styled(MenuIcon)`
  position: relative;
  right: 20px;
  cursor: pointer;
  color: white;
`;

const IconNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  width: 250px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.45s;
  display: none;

  li {
    color: white;
    padding: 15px 0;
    border-bottom: 1px solid white;
    a {
      position: relative;
      top: 7px;
      font-weight: 600;
      text-decoration: none;
      color: white;
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  color: white;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;

  .display {
    display: none;
  }

  @media (max-width: 768px) {
    .display {
      display: block;
    }
  }

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

  @media (max-width: 768px) {
    .header__option {
      display: none;
    }

    .basket {
      position: relative;
      right: 32px;
    }
  }
`;
