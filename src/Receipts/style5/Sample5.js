import React from 'react';

const Sample5 = ({data}) => {
  const items = [
    { name: '0.5 Calamari Fritti', price: 11.95 },
    { name: '1 Tagliatelle Bolognese', price: 25.00 },
    { name: '2 Coca-Cola Glass Bottle', price: 8.00 },
  ];
    const formatTime = (time24) => {
    const [hour, minute] = time24.split(':');
    const h = parseInt(hour, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minute}${ampm}`;
  };

  const subtotal = 44.95;
  const tax = 5.84;
  const total = 50.79;
  const tip = 2.00;
  const grandTotal = 52.79;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{data.restaurant}</h2>
      <p style={styles.center}>{data.street}, {data.city}, {data.state}</p>
      <p style={styles.center}>Tel: {data.phone}</p>
      <h3 style={{...styles.center, marginTop: '20px'}}>****DUPLICATE****</h3>

<div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
      <div style={styles.meta} >
        <p><strong>Server:</strong> {data.serverName}</p>
        <p><strong>Check:</strong> {data.invoice}</p>
        <p><strong>Table:</strong> {data.table}</p>
        
      </div>
      <div style={styles.meta} >
        <p><strong>Date:</strong> {data.date}</p>
        <p><strong>Time:</strong> {formatTime(data.time)}</p>
        <p><strong>Guests:</strong> {data.guest}</p>
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

      {/* <div style={styles.totalBlock}>
        <div style={styles.itemRow}><span>SUBTOTAL</span><span>${subtotal.toFixed(2)}</span></div>
        <div style={styles.itemRow}><span>HST</span><span>${tax.toFixed(2)}</span></div>
        <div style={styles.itemRow}><strong>TOTAL</strong><strong>${total.toFixed(2)}</strong></div>
        <div style={styles.itemRow}><span>TIP</span><span>${tip.toFixed(2)}</span></div>
        <div style={styles.itemRow}><strong>DEBIT 887</strong><strong>${grandTotal.toFixed(2)}</strong></div>
      </div> */}

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
      }}></div>

      <div style={styles.footer}>
       {data.footers && data.footers.map((footer, index) => (
         <p key={index}>{footer.text}</p>
       ))}
        <p><em>{data.subName}</em></p>

        <hr style={styles.hr} />

        

        {/* <p><strong>Spaccio East:</strong> 22 Sackville St.</p>
        <p><strong>Sud Forno Queen:</strong> 716 Queen Street</p>
        <p><strong>Terroni Sterling:</strong> 128 Sterling Rd.</p>

        <p><em>(Alcohol excluded from redemption)</em></p>
        <p>Offer valid for 24 hours — present this receipt to redeem</p>

        <p>Spaccio East GM: <strong>Julia Korotniuk</strong></p>

        <p>Join our Sud Forno and Spaccio gro</p>
        <p>café loyalty program or check your points online!</p> */}
        <p>Visit: <a href={data.website} target="_blank" rel="noreferrer">{data.website}</a></p>

        <p><strong>HST# {data.rrn}</strong></p>
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
  title: {
    textAlign: 'center',
    marginBottom: 0,
    fontSize: '1.4em',
  },
  center: {
    textAlign: 'center',
    margin: '0.2em 0',
    fontSize: '0.9em',
  },
  meta: {
    fontSize: '0.75em',
    marginTop: '1em',
    marginBottom: '1em',
    textAlign: 'left',
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
  footer: {
    marginTop: '1.5em',
    textAlign: 'center',
    fontSize: '0.85em',
  },
  hr: {
    margin: '1em 0',
    border: 'none',
    borderTop: '1px dashed #000',
  },
 
};

export default Sample5;
