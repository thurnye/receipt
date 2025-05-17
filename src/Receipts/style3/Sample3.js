import React from 'react';
import './Sample3.css';

const Sample3 = ({ data }) => {

    function formatDateToMDY(dateInput) {
        const date = new Date(dateInput);
        const month = date.getMonth() + 1;  // Months are 0-based
        const day = date.getDate() + 1;
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
      }

      const formatTime = (time24) => {
        const [hour, minute] = time24.split(':');
        const h = parseInt(hour, 10);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        //get random second between 0 and 59
        const randomMinute = Math.floor(Math.random() * 60);
        return `${h12}:${minute}:${randomMinute} ${ampm}`;
      };

      
  return (
    <div className='lab-receipt'>
      <h3 className='center'>{data.restaurant}</h3>
      <p className='center'>
      {data.street}
        <br />
        {data.city}, {data.state}
        <br />
        Tel: {data.phone}
      </p>

      <div className='row'>
        <span>Server: {data.serverName}</span>
        <span>Check: {data.invoice}</span>
      </div>
      <div className='row'>
        <span>Table: {data.table}</span>
        <span>Date: {formatDateToMDY(data.date)}</span>
      </div>
      <div className='row'>
        <span>Guests: {data.guest}</span>
        <span>Time: {formatTime(data.time)}</span>
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
          <span
            style={{
              width: '150px',
              textAlign: 'end',
              fontWeight: 'normal',
            }}
          >
            SUBTOTAL:
          </span>
          <span
            style={{
              fontWeight: 'normal',
              width: 'calc(100% - 150px)',
              textAlign: 'end',
            }}
          >
            ${data.subtotal}
          </span>
        </div>

        {data.taxes.map((tax, index) => (
          <div key={index}>
            <span
              style={{
                textAlign: 'end',
                width: '150px',
                fontWeight: 'normal',
              }}
            >
              {tax.name}:
            </span>
            <span
              style={{
                fontWeight: 'normal',
                width: 'calc(100% - 150px)',
                textAlign: 'end',
              }}
            >
              ${tax.total}
            </span>
          </div>
        ))}
        <hr />
        <div
          style={{
            fontSize: '19px',
          }}
        >
          <span
            style={{
              textAlign: 'end',
              width: '150px',
            }}
          >
            TOTAL:
          </span>
          <span
            style={{
              width: 'calc(100% - 150px)',
              textAlign: 'end',
            }}
          >
            ${data.total}
          </span>
        </div>
      </div>

      <hr />
      <hr />
      <div style={{
        marginTop: '20px',
      }}>

      </div>
      <p className='center small'>{data.footer1}</p>
      <p className='center small'>{data.footer2}</p>
      <p className='center small'>{data.footer3}</p>
      <p className='center small'>HST# {data.businessNo}</p>
      <p className='center small'style={{
        marginTop: '20px',
      }}>{data.website}</p>
    </div>
  );
};

export default Sample3;
