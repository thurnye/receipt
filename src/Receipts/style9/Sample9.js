import React from 'react';

const Sample9 = () => {
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
      <h3 style={styles.center}>BOBBY BERMUDA'S</h3>
      <p style={styles.center}>235 Queens Quay W</p>
      <p style={styles.center}>Toronto, ON, M5J 2G6</p>

      <div style={styles.meta}>
        <p><strong>Date:</strong> Sun, June 29 2025</p>
        <p><strong>Time:</strong> 17:50:06</p>
        <p><strong>#49351 TBL#510-1, 2</strong></p>
      </div>

      <div style={styles.items}>
        {items.map((item, idx) => (
          <div key={idx} style={styles.itemRow}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div style={styles.totalBlock}>
        <div style={styles.itemRow}><span>SUB-TOTAL</span><span>${subtotal.toFixed(2)}</span></div>
        <div style={styles.itemRow}><span>HST 5/13%</span><span>${tax.toFixed(2)}</span></div>
        <div style={styles.itemRow}><strong>TOTAL</strong><strong>${total.toFixed(2)}</strong></div>
      </div>

      <div style={styles.section}>
        <p><strong>DEBIT</strong></p>
        <p><strong>HST# 784448292 RT0001</strong></p>
        <p><strong>Served by:</strong> SARA S.</p>
      </div>

      <hr style={styles.hr} />

      <div style={styles.section}>
        <p><strong>SEQ #:</strong> f904850e-3e68-43f1-93fb-4921c3cfca7c</p>
        <p><strong>EMPLOYEE #:</strong> ************</p>
        <p><strong>DEBIT/INTEX ***********8879</strong></p>
        <p><strong>AUTH #:</strong> 175002</p>
        <p><strong>BATCH #:</strong> 0015</p>
        <p><strong>APP:</strong> Interac</p>
        <p><strong>AID:</strong> A0000002771010</p>
        <p><strong>TVR/TSI:</strong> 0000000002 / A000</p>
        <p><strong>Type:</strong> SALE</p>
      </div>

      <div style={styles.section}>
        <div style={styles.itemRow}><span>AMOUNT</span><span>${total.toFixed(2)}</span></div>
        <div style={styles.itemRow}><span>TIP</span><span>${tip.toFixed(2)}</span></div>
        <div style={styles.itemRow}><strong>TOTAL</strong><strong>${grandTotal.toFixed(2)}</strong></div>
        <p style={{ textAlign: 'center', marginTop: '1em', fontWeight: 'bold' }}>TRANSACTION APPROVED</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '320px',
    fontFamily: 'monospace',
    padding: '1em',
    margin: '2em auto',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#000'
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
