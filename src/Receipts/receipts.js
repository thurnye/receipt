import React, { useState } from 'react';
import ThermalReceipt from './style2/ThermalReceipt';
import StandardReceipt from './style1/StandardReceipt';
import Sample3 from './style3/Sample3';
import { Link } from 'react-router';
import Sample4 from './style4/Sample4';
import Sample6 from './style6/Sample6';
import Sample5 from './style5/Sample5';
import Sample7 from './style7/Sample7';
import Sample8 from './style8/Sample8';
import Sample9 from './style9/Sample9';

const Receipts = ({ data, setType }) => {
  const [receiptName, setReceiptName] = useState('Sample8');

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
    sample4: {
      component: <Sample4 data={data} />,
      name: 'Sample4',
    },
    sample5: {
      component: <Sample5 data={data} />,
      name: 'Sample5',
    },
    sample6: {
      component: <Sample6 data={data} />,
      name: 'Sample6',
    },
    sample7: {
      component: <Sample7 data={data} />,
      name: 'Sample7',
    },
    sample8: {
      component: <Sample8 data={data} />,
      name: 'Sample8',
    },
    sample9: {
      component: <Sample9 data={data} />,
      name: 'Sample9',
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
