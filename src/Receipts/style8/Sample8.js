import React from 'react';

const Sample8 = () => {
  const subtotal = 21.01;
  const tip = 0.99;
  const total = 22.00;

  return (
    <div style={styles.container}>
      <h3 style={styles.center}>Hana Ramen DT</h3>
      <p style={styles.center}>1024 GERRARD ST E</p>
      <p style={styles.center}>TORONTO, ON M4M 1Z5</p>
      <p style={styles.center}>4162988688</p>
      <p style={styles.center}>WWW.NONE.COM</p>

      <div style={styles.meta}>
        <p><strong>Cashier:</strong> Employee</p>
        <p><strong>Transaction:</strong> 000230</p>
      </div>

      <div style={styles.totals}>
        <div style={styles.row}><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
        <div style={styles.row}><span>Tip</span><span>${tip.toFixed(2)}</span></div>
        <div style={styles.row}><strong>DEBIT CARD SALE</strong><strong>${total.toFixed(2)}</strong></div>
        <p>INTERAC 8879</p>
      </div>

      <div style={styles.section}>
        <p>Retain this copy for statement validation</p>
        <p><strong>Account:</strong> Default</p>
        <p><strong>Date:</strong> 28-Jun-2025 9:21:29 p.m.</p>
        <p><strong>Method:</strong> CONTACTLESS</p>
        <p><strong>Interac:</strong> ************8879</p>
        <p><strong>Reference ID:</strong> 518000503906</p>
        <p><strong>Auth ID:</strong> 212129</p>
        <p><strong>MID:</strong> ******4905</p>
        <p><strong>AID:</strong> A00000027710100100000002</p>
        <p><strong>AuthNtwkNm:</strong> INTERAC</p>
        <p><strong>NO CARDHOLDER VERIFICATION</strong></p>
      </div>

      <div style={styles.footer}>
        <p>Online: <a href="https://clover.com/p/F9AEFP88EHBHR" target="_blank" rel="noreferrer">clover.com/p/F9AEFP88EHBHR</a></p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
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
  },
  footer: {
    marginTop: '1em',
    textAlign: 'center',
    fontSize: '0.8em',
  }
};

export default Sample8;
