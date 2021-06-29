import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../data/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <Products>
      <div className='prod_info'>
        <p>{title}</p>
        <p className='prod_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='prod_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToCart}>Add to Cart</button>
    </Products>
  );
};

export default Product;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;

  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
  }

  .prod_info {
    height: 100px;
    margin-bottom: 15px;
  }

  .prod_price {
    margin-top: 5px;
  }

  .prod_rating {
    display: flex;
  }
`;
