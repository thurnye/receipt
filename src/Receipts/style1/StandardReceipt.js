import React from 'react';
import './StandardReceipt.css';

const StandardReceipt = ({ data }) => {
  const formatTime = (time24) => {
    const [hour, minute] = time24.split(':');
    const h = parseInt(hour, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minute}${ampm}`;
  };

  return data ? (
    <div className='receipt-container'>
      <div
        style={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <h2>{data.restaurant}</h2>
        <p>{data.street}</p>
        <p>
          {data.city}, {data.state}, {data.postalCode}
        </p>

        <p>Phone: {data.phone}</p>
        <p>Business #: HST{data.businessNo}</p>
        <hr />
        <p>
          Table: {data.table} &nbsp; | &nbsp; Server: {data.serverName}
        </p>
        <p>
          Date: {data.date} &nbsp; | &nbsp; {formatTime(data.time)}
        </p>
      </div>
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
            <span>
              {tax.name} ({tax.percent}%)
            </span>
            <span>${tax.total}</span>
          </div>
        ))}
      </div>
      <div className='total'>
        <span>Total</span>
        <span>${data.total}</span>
      </div>
      <hr />
      <div
        style={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <p>
          {data.paymentType}-{data.cardLast4Digits}
        </p>
        {data.footers && data.footers.map((footer, index) => (
          <p key={index}>{footer.text}</p>
        ))}
      </div>
    </div>
  ) : (
    'loading'
  );
};

export default StandardReceipt;
