import React from 'react';

const Sample6 = ({data}) => {


  const formatTime = (time24) => {
    const [hour, minute] = time24.split(':');
    const h = parseInt(hour, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minute}${ampm}`;
  };

  const items = [
    { name: 'Baja Fish', price: 7.5 },
    { name: 'Carne Asada', price: 7.5 },
    { name: 'Mango Flaca', price: 7.0 },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const tax = 2.87;
  const total = subtotal + tax;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{data.restaurant}</h2>
      <h4 style={styles.subtitle}>{data.subName}</h4>
      <h6 style={{marginTop: '-20px'}}>EST {data.est}</h6>

      <div style={styles.info}>
        <p style={{marginTop: '-15px'}}>{data.restaurant} {' '} {data.subName}</p>
        <p style={{marginTop: '-15px'}}>{data.street}</p>
        <p style={{marginTop: '-15px'}}>{data.city}, {data.state} {data.postalCode}</p>
      </div>

      <div style={styles.meta}>
        <p style={{marginTop: '-10px'}}><strong>Server:</strong> {data.serverName}</p>
        <p style={{marginTop: '-10px'}}><strong>Guest Count:</strong> {data.guest}</p>
        <p style={{marginTop: '-10px'}}><strong>Seat:</strong> {data.table}</p>
        <p style={{marginTop: '-10px'}}><strong>Time:</strong> {data.date} {formatTime(data.time)}</p>
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
        <div style={styles.itemRow}>
          <span>Subtotal</span><span>${data.subtotal}</span></div>
        
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

      

      {/* <div style={styles.footer}>
        <p>Join us for our 3 Course Lunch Pre Fixe</p>
        <p><strong>$20 per person</strong></p>
        <p style={{ marginTop: '1em' }}>Powered by Toast</p>
      </div> */}
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
  );
};

const styles = {
  container: {
    width: '300px',
    fontFamily: 'monospace',
    padding: '1em',
    border: '1px solid #ccc',
    margin: '2em auto',
    background: '#fff',
    color: '#000',
  },
  title: {
    textAlign: 'center',
    margin: 0,
    fontSize: '1.8em',
    letterSpacing: '2px',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 0,
    fontSize: '0.9em',
  },
  info: {
    textAlign: 'center',
    margin: '5em 0',
    fontSize: '0.9em',
  },
  meta: {
    textAlign: 'left',
    fontSize: '0.85em',
    marginBottom: '1em',
    marginTop: '-2rem',
  },
  items: {
    borderTop: '1px dashed #000',
    borderBottom: '1px dashed #000',
    padding: '0.5em 0',
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.95em',
    margin: '0.25em 0',
  },
  totalBlock: {
    marginTop: '1em',
    fontSize: '1em',
  },
  footer: {
    marginTop: '2em',
    textAlign: 'center',
    fontSize: '0.9em',
  }
};

export default Sample6;
