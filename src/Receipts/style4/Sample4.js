import React from 'react';
import './Sample4.css';

const Sample4 = ({data}) => {
  // Generate a random number from 1 to 999
  const randomNumber =( end) => Math.floor(Math.random() * end) + 1;

  
  return (
    <div className="yonge-receipt">
      <h4 className="center">{data.restaurant}</h4>
      <p className="center">
        {data.street}<br />
        {data.city} {data.state} {data.postalCode}<br />
        {data.phone}
      </p>

      <p className="center">** TRANSACTION RECORD **</p>

      <div className="details">
        <p>Tran. #: {data.refNo}</p>
        <p>Lookup #: {data.businessNo}</p>
        <p>RVC #: RESTAURANT</p>
        <p>Table #: {data.table}</p>
        <p>Check #: {data.invoice}</p>
        <p>Group #: {data.guest}</p>
        <p>Employee #:{randomNumber(999)}</p>
        <p>Employee: {data.serverName}</p>
      </div>

      <div className="details" style={{ marginTop: 10 }}>
        <p>Type: Purchase</p>
        <p>Acct: Visa</p>
        <p>Card #: {data.cardLast4Digits}</p>
      </div>

      <hr />

      <div className="amounts">
        <div className="bold">
          <span style={{width: 200, textAlign: 'end'}}>Amount</span>
          <span style={{width: 200, textAlign: 'end'}}>${data.subtotal}</span>
        </div>
        {data.taxes.map((tax, index) => (<>
          <div className="bold">
          <span style={{width: 200, textAlign: 'end'}}> {tax.name}:</span>
          <span style={{width: 200, textAlign: 'end'}}>${tax.total}</span>
        </div>
        </>
        ))}
       <hr />
        <div className="bold">
          <span style={{width: 200, textAlign: 'end'}}>TOTAL</span>
          <span style={{width: 200, textAlign: 'end'}}>${data.total}</span>
          </div>
      </div>

      <hr />

      <div className="details">
        <p>Reference #: 00{randomNumber(90000000)}H</p>
        <p>Auth. #: 00{randomNumber(10000)}</p>
        <p>WARE0{randomNumber(10000)} 00{randomNumber(10)}</p>
        <p>{data.date} {}</p>
        <p>Visa CREDIT</p>
        <p>A00000000{randomNumber(10000)}</p>
      </div>

      <p className="center bold">APPROVED - THANK YOU</p>
      <p className="center">01-0{randomNumber(100)}</p>

      <p className="center small">No signature required</p>
      <p className="center small">IMPORTANT—<br />Retain this copy for your records</p>

      <p className="center bold">### CARDHOLDER COPY ###</p>

      <p className="center">THANK YOU<br />Come Again</p>
    </div>
  );
};

export default Sample4;
