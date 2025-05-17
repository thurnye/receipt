import React, { useState } from 'react';
import ThermalReceipt from './style2/ThermalReceipt';
import StandardReceipt from './style1/StandardReceipt';
import Sample3 from './style3/Sample3';
import { Link } from 'react-router';

const Receipts = ({ data, setType }) => {
  const [receiptName, setReceiptName] = useState('Standard');

  const receipts = {
    standard: {
      component: <StandardReceipt data={data} />,
      name: 'Standard',
    },
    thermal: {
      component: <ThermalReceipt data={data} />,
      name: 'Thermal',
    },
    sample3: {
      component: <Sample3 data={data} />,
      name: 'Sample3',
    },
  };

  return (
    <div>
      <div>Receipts</div>
      <div className='all-receipt-container'>
        <h2>{receiptName}</h2>
        <div className='receipt-toggle'>
          {Object.keys(receipts).map((key) => (
            <button
              key={key}
              onClick={() => {
                setReceiptName(receipts[key].name);
                setType(receipts[key].name);
              }}
              className={receiptName === receipts[key].name ? 'active' : ''}
              style={{
                backgroundColor:
                  receiptName === receipts[key].name ? '#4CAF50' : '#f1f1f1',
                color: receiptName === receipts[key].name ? 'white' : 'black',
                margin: '0 10px',
              }}
            >
              {receipts[key].name}
            </button>
          ))}

          <div style={{ margin: '20px' }}>
            <Link to='/preview'>Print</Link>
            <button
              onClick={() => {
                localStorage.removeItem('receiptData');
                window.location.reload(); 
              }}
              style={{
                margin: '0 20px',
                backgroundColor: 'salmon',
                color: 'white',
                padding: '8px',
                border: 'none',
                borderRadius: 5,
                cursor: 'pointer',
              }}
            >
              Reset Receipt
            </button>
          </div>
        </div>

        {receipts[receiptName.toLowerCase().replace(' ', '')]?.component}
      </div>
    </div>
  );
};

export default Receipts;
