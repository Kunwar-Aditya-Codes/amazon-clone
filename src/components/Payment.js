import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../data/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getTotal } from '../data/reducer';
import { useEffect } from 'react';
import axios from '../axios';
import { db } from '../firebase';

const Payment = () => {
  const [{ user, cart }, dispatch] = useStateValue();

  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_CART',
        });

        history.replace('/orders');
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

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
            <p>India</p>
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
          <div className='details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
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
  .items,
  .details {
    flex: 0.8;
  }

  form {
    max-width: 400px;

    div {
      button {
        background: #f0c14b;
        border-radius: 2px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        font-weight: bolder;
        margin-top: 10px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
      }
    }
  }

  h3 {
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    overflow-x: hidden;
    font-size: 15px;

    .section {
      display: grid;
    }

    .items {
      position: relative;
      right: 18%;
    }
  }
`;
