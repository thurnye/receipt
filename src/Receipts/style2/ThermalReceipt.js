import React from 'react';
import './ThermalReceipt.css';

const ThermalReceipt = ({data}) => {

  const formatTime = (time24) => {
    const [hour, minute] = time24.split(':');
    const h = parseInt(hour, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minute}${ampm}`;
  };

  
  return (
    <div className="thermal-receipt">
      <div style={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignContent:'center',
        width:'100%'
      }}>
      <h4>{data.restaurant}</h4>
      <p>{data.street}&nbsp;&nbsp;&nbsp;&nbsp;{data.postalCode}</p>
      <p >{data.city}, {data.state}</p>

      <div className="center bold">SALE</div>

      </div>

      <p>Batch #: {data.batchNo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RRN: {data.rrn}</p>
      <p>{data.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatTime(data.time)}</p>
      <p>Invoice #: {data.invoice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REF #: {data.refNo}</p>
      <p>APPR CODE: {data.apprCode}</p>
      <p>{data.paymentType}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proximity</p>
      <p>{data.cardLast4Digits}</p>
      <p>AID: {data.aid}</p>

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

      <div className="amount-line" style={{margin: "20px 0"}}>
        <span>AMOUNT</span><span>${data.total}</span>
      </div>

      <div className="center bold approved">001 APPROVED</div>

      <p className="center small">{data.footer1}</p>
      <p className="center small">{data.footer2}</p>
      <div className="center bold">CUSTOMER COPY</div>
    </div>
  );
};

export default ThermalReceipt;
