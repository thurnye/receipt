import React from 'react';
import { formatTime, GenerateRandomId, randomNumber } from '../../util';

const Sample8 = ({ data }) => {
  const subtotal = 21.01;
  const tip = 0.99;
  const total = 22.0;

  return (
    <div style={styles.container}>
      <h3 style={styles.center}>{data.restaurant}</h3>
      <p style={styles.center}>{data.street}</p>
      <p style={styles.center}>
        {data.city} {data.state} {data.postalCode}
      </p>
      <p style={styles.center}> {data.phone}</p>
      <p style={styles.center}> {data.website}</p>

      <div style={styles.meta}>
        <p  style={{
            marginBottom: '-7px',
          }}>
          <strong>Cashier:</strong> {data.serverName}
        </p>
        <p  style={{
            marginBottom: '-7px',
          }}>
          <strong>Transaction:</strong> {data.refNo}
        </p>
        <p
          style={{
            marginBottom: '-7px',
          }}
        >
          <strong>Table:</strong>
          {data.table}
        </p>

        <p
          style={{
            marginBottom: '-7px',
          }}
        >
          <strong>Guest:</strong> {data.guest}
        </p>
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


      <div style={styles.totals}>

        
        <div style={styles.row}>
          <span>Total</span>
          <span>${data.subtotal}</span>
        </div>
        
        {data.taxes.map((tax, index) => (
          <div key={index} style={styles.itemRow}>
            <span>
              {tax.name} ({tax.percent}%)
            </span>
            <span>${tax.total}</span>
          </div>
        ))}
        <div style={styles.row}>
          <strong>DEBIT CARD SALE</strong>
          <strong>${data.total}</strong>
        </div>
        <p>{data.paymentType} {data.cardLast4Digits.toString().slice(-4)}</p>
      </div>

      <div style={styles.section}>
        <p style={{textAlign:'center'}}>Retain this copy for statement validation</p>
        <p>
          <strong>Account:</strong> Default
        </p>
        <p>
          <strong>Date:</strong> {data.date} {formatTime(data.time)}
        </p>
        <p>
          <strong>Method:</strong> CONTACTLESS
        </p>
        <p>
          <strong>{data.paymentType} :</strong> {data.cardLast4Digits}
        </p>
        <p>
          <strong>Reference ID:</strong> {data.rrn}
        </p>
        <p>
          <strong>Auth ID:</strong> {randomNumber(1000000)}
        </p>
        <p>
          <strong>MID:</strong> ******{randomNumber(10000)}
        </p>
        <p>
          <strong>AID:</strong> {data.aid}
        </p>
        <p>
          <strong>{GenerateRandomId(10)}:</strong> {data.paymentType}
        </p>
        <p>
          <strong>NO CARDHOLDER VERIFICATION</strong>
        </p>
      </div>

      <div style={styles.footer}>
        {/* <p>
          Online:{' '}
          <a
            href='https://clover.com/p/F9AEFP88EHBHR'
            target='_blank'
            rel='noreferrer'
          >
            clover.com/p/F9AEFP88EHBHR
          </a>
        </p> */}
       {data.footers && data.footers.map((footer, index) => (
          <p key={index}>{footer.text}</p>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '200px',
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
  totals: {
    borderTop: '1px dashed #000',
    borderBottom: '1px dashed #000',
    padding: '0.5em 0',
    fontSize: '0.95em',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.2em 0',
  },
  section: {
    fontSize: '0.85em',
    marginTop: '1em',
    textAlign: 'left',
  },
  footer: {
    marginTop: '3em',
    textAlign: 'center',
    fontSize: '0.8em',
  },
};

export default Sample8;
