import React from 'react'
import {Order} from './Order'
import { SERVER_IP } from '../../private'

const DELETE_ORDER_URL = `${SERVER_IP}/api/delete-order`;

const EDIT_ORDER_URL = `${SERVER_IP}/api/edit-order`;

const ordersList = ({orders, setBool}) => {
  if(!orders || !orders.length)
  return (
    <div className='empty-orders'>
      <h2>There are no orders to display</h2>
    </div>
  )

  const num = n => {
    return n < 10 ? '0' + n : n;
  };

  const deleteOrder = id => {
    fetch(DELETE_ORDER_URL, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(response => console.log('Success', JSON.stringify(response)))
      .catch(error => console.error(error));
    setBool(false);
  };

    const editOrder = (orderID, quantity, orderItem, editedBy) => {
      fetch(EDIT_ORDER_URL, {
        method: 'POST',
        body: JSON.stringify({
          id: orderID,
          order_item: orderItem,
          quantity,
          ordered_by: editedBy,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(response => console.log('Success', JSON.stringify(response)))
        .catch(error => console.error(error));
      setBool(false);
    };

  return orders.map((order) => {
    return (
      <Order
        deleteOrder={deleteOrder}
        editOrder={editOrder}
        key={order._id}
        order={order}
        num={num}
      />
    );
  });
}

export default ordersList


// import React from 'react';
// import { SERVER_IP } from '../../private';

// const DELETE_ORDER_URL = `${SERVER_IP}/api/delete-order`;

// const OrdersList = props => {
//   const { orders, setBool } = props;
//   if (!props || !props.orders || !props.orders.length)
//     return (
//       <div className='empty-orders'>
//         <h2>There are no orders to display</h2>
//       </div>
//     );

//   const num = n => {
//     return n < 10 ? '0' + n : n;
//   };

//   const deleteOrder = id => {
//     fetch(DELETE_ORDER_URL, {
//       method: 'POST',
//       body: JSON.stringify({
//         id: id,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(res => res.json())
//       .then(response => console.log('Success', JSON.stringify(response)))
//       .catch(error => console.error(error));
//     setBool(false);
//   };

//   return orders.map(order => {
//     const createdDate = new Date(order.createdAt);
//     return (
//       <div className='row view-order-container' key={order._id}>
//         <div className='col-md-4 view-order-left-col p-3'>
//           <h2>{order.order_item}</h2>
//           <p>Ordered by: {order.ordered_by || ''}</p>
//         </div>
//         <div className='col-md-4 d-flex view-order-middle-col'>
//           <p>
//             Order placed at{' '}
//             {`${num(createdDate.getHours())}:${num(
//               createdDate.getMinutes()
//             )}:${num(createdDate.getSeconds())}`}
//           </p>
//           <p>Quantity: {order.quantity}</p>
//         </div>
//         <div className='col-md-4 view-order-right-col'>
//           <button className='btn btn-success' >Edit</button>
//           <button
//             className='btn btn-danger'
//             onClick={() => deleteOrder(order._id)}>
//             Delete
//           </button>
//         </div>
//       </div>
//     );
//   });
// };

// export default OrdersList;
