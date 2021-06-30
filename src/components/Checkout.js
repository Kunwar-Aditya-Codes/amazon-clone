import React from 'react';
import styled from 'styled-components';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../data/StateProvider';

const Checkout = () => {
  const [{ cart, user }] = useStateValue();

  return (
    <Check>
      <Left>
        <img
          className='banner'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className='check_title'>Your Shopping Basket</h2>
        </div>
        {cart.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </Left>
      <Right>
        <Subtotal />
      </Right>
    </Check>
  );
};

export default Checkout;

const Check = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;

  @media (max-width: 768px) {
    position: relative;
    top: 150px;
  }
`;

const Left = styled.div`
  .banner {
    width: 100%;
    margin-bottom: 10px;
  }

  .check_title {
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }

  @media (max-width: 768px) {
    .banner {
      display: none;
    }

    h3 {
      position: relative;
      text-align: center;
      left: 18%;
    }

    .check_title {
      position: relative;
      text-align: center;
      left: 18%;
    }
  }
`;

const Right = styled.div``;
