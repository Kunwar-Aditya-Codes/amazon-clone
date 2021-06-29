import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../data/StateProvider';

const CheckoutProduct = ({ id, price, image, title, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id,
    });
  };

  return (
    <CP>
      <img src={image} alt='' />
      <div className='cp_info'>
        <p className={'cpinfo_title'}>{title}</p>
        <p className='cpinfo_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='cpinfo_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Basket</button>
      </div>
    </CP>
  );
};

export default CheckoutProduct;

const CP = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }

  .cpinfo_title {
    font-size: 17px;
    font-weight: 700;
  }

  .cp_info {
    padding-left: 20px;

    button {
      background: #f0c14b;
      border: 1px solid;
      margin-top: 10px;
      border-color: #a88734 #9c7e31 #846a29;
      color: #111;
    }
  }

  .cpinfo_rating {
    display: flex;
  }
`;
