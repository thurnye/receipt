import React from 'react';
import './StandardReceipt.css';
import { data } from '../../Data/data.js';

const StandardReceipt = ({data}) => {
  console.log(data)
  return (
    data ? (
    <div className='receipt-container'>
      <h2>{data.restaurant}</h2>
      <p>{data.street}</p>
      <p>{data.city}, {data.state}, {data.postalCode}</p>

      <p>Phone: {data.phone}</p>
      <p>Business #: {data.businessNo}</p>
      <hr />
      <p>
        Table: {data.table} &nbsp; | &nbsp; Server: {data.serverName}
      </p>
      <p>
        Date: {data.date} &nbsp; | &nbsp; {data.time}
      </p>
      <hr />
      <div className='items'>
        {data.items.map((item, index) => (
          <div className='item' key={index}>
            <span>{item.quantity}</span>
            <span className='item-name'>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
      <hr />
      <div className='summary'>
        <div>
          <span>Subtotal</span>
          <span>${data.subtotal}</span>
        </div>

        {data.taxes.map((tax, index) => (
          <div key={index}>
            <span>{tax.name}{' '} ({tax.percent}%)</span>
            <span>${tax.total}</span>
          </div>
        ))}
      </div>
      <div className='total'>
        <span>Total</span>
        <span>${data.total}</span>
      </div>
      <hr />
      <p>{data.paymentType}-{data.paymentMethod}</p>
      <p>{data.footer1}</p>
      <p>{data.footer2}</p>
      <p>{data.footer3}</p>
    </div>
    ) : 'loading'
  );
};

export default StandardReceipt;
