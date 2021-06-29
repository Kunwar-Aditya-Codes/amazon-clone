import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../data/StateProvider';
import { getTotal } from '../data/reducer';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {
  const history = useHistory();

  const [{ cart }] = useStateValue();

  return (
    <SubTotal>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />

      <button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </SubTotal>
  );
};

export default Subtotal;

const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;

  .subtotal__gift {
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 5px;
  }

  button {
    background: #f8c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border-color: #a88734 #9c7e31 #846a29;
    color: black;
    border: 1px solid;
    padding: 5px 5px;
    font-weight: 600;
  }
`;
