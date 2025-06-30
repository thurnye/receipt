import React from 'react';
import { formatTime, GenerateRandomId, randomNumber } from '../../util';

const Sample9 = ({data}) => {
  const items = [
    { name: '2 BUFFALO', price: 16.50 },
    { name: '1 CALAMARI', price: 18.00 },
    { name: '3 FISH', price: 21.00 },
    { name: '1 GL-NALG WHITE', price: 12.00 },
    { name: '1 GL-IPA', price: 10.00 },
  ];

  const subtotal = 77.50;
  const tax = 10.08;
  const total = 87.58;
  const tip = 15.76;
  const grandTotal = 103.34;

  return (
    <div style={styles.container}>
      <h3 style={styles.center}>{data.restaurant}</h3>
      <p style={styles.center}>{data.street}</p>
      <p style={styles.center}>{data.city}, {data.state} {data.postalCode}</p>

      <div style={styles.meta}>
        <p><strong>Date:</strong> {data.date}</p>
        <p><strong>Time:</strong> {formatTime(data.time)} </p>
        <p><strong>#{randomNumber(10000)} TBL#{data.table}, {randomNumber(10)}</strong></p>
      </div>

       <div style={styles.items}>
        {data.items.map((item, idx) => (
          <div key={idx} style={styles.itemRow}>
            <span>{item.quantity}</span>
            <span style={{ flexGrow: 1, textAlign:'start', marginLeft: '10px'}}>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        
      </div>

      <div style={styles.totalBlock}>
        <div style={styles.itemRow}><span>SUB-TOTAL</span><span>${data.subtotal}</span></div>
       {data.taxes.map((tax, index) => (
          <div key={index} style={styles.itemRow}>
            <span>
              {tax.name} ({tax.percent}%)
            </span>
            <span>${tax.total}</span>
          </div>
        ))}
        <div style={styles.itemRow}><strong>TOTAL</strong><strong>${data.total}</strong></div>
      </div>

      <div style={styles.section}>
        <p><strong>DEBIT</strong></p>
        <p><strong>HST# {randomNumber(1000000000)} RT00{randomNumber(100)}</strong></p>
        <p><strong>Served by:</strong> {data.serverName}</p>
      </div>

      <hr style={styles.hr} />

      <div style={styles.section}>
        <p><strong>SEQ #:</strong> {GenerateRandomId(8)}-{GenerateRandomId(4)}-{GenerateRandomId(4)}-{GenerateRandomId(5)}-{GenerateRandomId(13)}</p>
        <p><strong>EMPLOYEE #:</strong> *********{randomNumber(1000)}</p>
        <p><strong>DEBIT/INTEX {data.cardLast4Digits}</strong></p>
        <p><strong>AUTH #:</strong> {data.invoice}</p>
        <p><strong>BATCH #:</strong> {data.batchNo}</p>
        <p><strong>APP:</strong> {data.paymentType}</p>
        <p><strong>AID:</strong> {data.aid}</p>
        <p><strong>TVR/TSI:</strong> 000000000{randomNumber(10)} / A000</p>
        <p><strong>Type:</strong> SALE</p>
      </div>

      <div style={styles.section}>
        {/* <div style={styles.itemRow}><span>AMOUNT</span><span>${total.toFixed(2)}</span></div>
        <div style={styles.itemRow}><span>TIP</span><span>${tip.toFixed(2)}</span></div> */}
        <div style={styles.itemRow}><strong>TOTAL</strong><strong>${data.total}</strong></div>
        <p style={{ textAlign: 'center', marginTop: '1em', fontWeight: 'bold' }}>TRANSACTION APPROVED</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '150px',
    fontFamily: 'monospace',
    padding: '1em',
    margin: '2em auto',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 9
  },
  center: {
    textAlign: 'center',
    margin: '0.2em 0',
  },
  meta: {
    fontSize: '0.85em',
    marginTop: '1em',
    marginBottom: '1em',
  },
  items: {
    borderTop: '1px dashed #000',
    borderBottom: '1px dashed #000',
    padding: '0.5em 0',
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.25em 0',
  },
  totalBlock: {
    marginTop: '1em',
    fontSize: '1em',
  },
  section: {
    marginTop: '1em',
    fontSize: '0.85em',
  },
  hr: {
    border: 'none',
    borderTop: '1px dashed #000',
    margin: '1em 0'
  }
};

export default Sample9;
