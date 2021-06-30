import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../data/StateProvider';
import { db } from '../firebase';
import Orders from './Orders';

const Order = () => {
  const [{ user, cart }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <OrdersList>
      <h1>Your Orders</h1>
      <div className='orders'>
        {orders?.map((order) => (
          <Orders order={order} />
        ))}
      </div>
    </OrdersList>
  );
};

export default Order;

const OrdersList = styled.div`
  padding: 20px 80px;

  h1 {
    margin: 30px 0;
  }
`;
