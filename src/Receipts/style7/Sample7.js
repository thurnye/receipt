import React from 'react';
import { formatTime, GenerateRandomId, randomNumber } from '../../util'; // Assuming formatTime is exported from util.js

const Sample7 = ({data}) => {
  const items = [
    { name: '1 Sangria Tower', price: 60.00 },
    { name: '10 Beef Suya', price: 200.00 },
    { name: '1 Salmon Sliders', price: 20.00 },
    { name: 'Sweet Chili Instead', price: 0.00 },
    { name: '1 Truffle Fries', price: 15.00 },
    { name: '1 Asun Pepper Meat', price: 24.00 },
    { name: '2 Goat Pepper Soup', price: 40.00 },
    { name: '1 Jerk Chicken Spring Roll', price: 16.00 },
    { name: '3 Sweet Plantain Side', price: 24.00 },
    { name: '1 Jerk Jollof Burrito', price: 25.00 },
  ];

  const subtotal = 415.00;
  const gratuity = 83.00;
  const tax = 36.82;
  const total = 534.82;

  

  return (
    <div style={styles.container}>
      <h3 style={styles.center}>{data.restaurant}</h3>
      <p style={styles.center}>{data.street}</p>
      <p style={styles.center}>{data.city}, {data.state} {data.postalCode}</p>

      <div style={styles.meta}>
        <p style={{
          marginBottom: '-7px',
        }}><strong>Server:</strong> {data.serverName}</p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <p style={{
           marginBottom: '-7px',
        }}><strong>Check #:</strong> {data.invoice}</p>
        <p style={{
           marginBottom: '-7px',
        }}><strong>Table:</strong>{data.table}</p>

        </div>
        <p style={{
           marginBottom: '-7px',
        }}><strong>Guest Count:</strong> {data.guest}</p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <p><strong>Ordered:</strong> </p>
        <p>{data.date} {formatTime(data.time)} </p>

        </div>
        
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
        <div style={styles.itemRow}><span>Subtotal</span><span>${data.subtotal}</span></div>
        {/* <div style={styles.itemRow}><span>GRATUITY (20.00%)</span><span>${gratuity.toFixed(2)}</span></div>
        <div style={styles.itemRow}><span>Tax</span><span>${tax.toFixed(2)}</span></div> */}
        {data.taxes.map((tax, index) => (
          <div key={index} style={styles.itemRow}>
            <span>
              {tax.name} ({tax.percent}%)
            </span>
            <span>${tax.total}</span>
          </div>
        ))}
        <div style={styles.itemRow}><strong>Total</strong><strong>${data.total}</strong></div>
      </div>

      <div style={styles.section}>
        <p><strong>Input Type:</strong> C (EMV Chip Read)</p>
        <p><strong>Payment:</strong> {data.paymentType} {data.cardLast4Digits}</p>
        <p><strong>Time:</strong> {formatTime(data.time)}</p>
      </div>

      <div style={styles.section}>
        <p><strong>Transaction Type:</strong> Sale</p>
        <p><strong>Authorization:</strong> Approved</p>
        <p><strong>Approval Code:</strong> 8B{randomNumber(10000)}</p>
        <p><strong>Payment ID:</strong> {GenerateRandomId(12)}</p>
        <p><strong>Application ID:</strong> A0000000{randomNumber(100000000)}</p>
        <p><strong>Application Label:</strong> {data.paymentType}</p>
        <p><strong>Terminal ID:</strong> {data.refNo}</p>
        <p><strong>Merchant ID:</strong> {data.businessNo}</p>
        <p><strong>Card Reader:</strong> BBPOS</p>
      </div>

      <div style={styles.section}>
        <div style={styles.itemRow}>
          <span>Amount</span>
          <span>${data.total}</span>
        </div>
        <div style={styles.itemRow}>
          <span>+ Additional Tip:</span>
          <span>_____</span>
        </div>
        <div style={styles.itemRow}>
          <span>= Total:</span>
          <strong>${data.total}</strong>
        </div>
      </div>

      <div style={styles.footer}>
        <p><strong>X _____________________</strong></p>
        <p><strong>{data.payee}</strong></p>
        <div
        style={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
       
        {data.footers && data.footers.map((footer, index) => (
          <p key={index}>{footer.text}</p>
        ))}
      </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '350px',
    fontFamily: 'monospace',
    padding: '1em',
    margin: '2em auto',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#000',
  },
  center: {
    textAlign: 'center',
    margin: '0.3em 0',
  },
  meta: {
    fontSize: '0.85em',
    marginTop: '1em',
    marginBottom: '1em',
    textAlign: 'left',
  },
  items: {
    // borderTop: '1px dashed #000',
    // borderBottom: '1px dashed #000',
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
    marginTop: '4em',
    fontSize: '0.85em',
    textAlign: 'left',
  },
  footer: {
    marginTop: '2em',
    textAlign: 'center',
    fontSize: '0.85em',
  }
};

export default Sample7;
