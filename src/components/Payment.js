import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../data/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [{ user, cart }] = useStateValue();

  return (
    <Pay>
      <Container>
        <h1>
          Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
        </h1>
        <div className='section'>
          <div className='title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='address'>
            <p>{user?.email}</p>
            <p>something road</p>
            <p>LA , America</p>
          </div>
        </div>
        <div className='section'>
          <div className='title'>
            <h3>Review Items</h3>
          </div>
          <div className='items'>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className='section'>
          <div className='title'>
            <h3>Payment Method</h3>
          </div>
          <div className='details'></div>
        </div>
      </Container>
    </Pay>
  );
};

export default Payment;

const Pay = styled.div`
  background-color: white;
`;

const Container = styled.div`
  h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;

    a {
      text-decoration: none;
    }
  }

  .section {
    display: flex;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid lightgray;
  }

  .title {
    flex: 0.2;
  }

  .address,
  .items {
    flex: 0.8;
  }
`;
