import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Orders = ({ order }) => {
  return (
    <Orderss>
      <h2>Ordered</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY , h:mma')}</p>
      <p className='id'>
        <small>{order.id}</small>
      </p>
      <div className='align'>
        {order.data.cart?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
        <CurrencyFormat
          renderText={(value) => (
            <h3 className='order__total'>Order Total: {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₹'}
        />
      </div>
    </Orderss>
  );
};

export default Orders;

const Orderss = styled.div`
  padding: 40px;
  margin: 20px 0;
  border: 1px solid lightgray;
  background-color: white;
  position: relative;

  .id {
    position: absolute;
    top: 40px;
    right: 20px;
  }

  .order__total {
    font-weight: 500;
    text-align: right;
  }

  @media (max-width: 768px) {
    .id {
      display: none;
    }

    .align {
      position: relative;
      right: 32%;
    }
  }
`;
