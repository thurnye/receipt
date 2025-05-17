import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import './App.css';
import logo from './logo.svg';
import ReceiptForm from './Data/ReceiptForm';
import Receipts from './Receipts/receipts';
import Print from './Print';
import StandardReceipt from './Receipts/style1/StandardReceipt';
import ThermalReceipt from './Receipts/style2/ThermalReceipt';

export const defaultData = {
  restaurant: 'LOMA STEAKHOUSE',
  street: '280 King Street West',
  city: 'Toronto',
  state: 'ON',
  postalCode: 'M5V-1A2',
  phone: '(416) 555-9182',
  businessNo: '5287694201',
  batchNo: '357',
  rrn: '0013282360',
  invoice: '229',
  refNo: '00000232',
  apprCode: '05100Z',
  aid: 'A0000000041010',
  table: 12,
  guest: 12,
  serverName: 'Marcus R.',
  date: '2025-05-16',
  time: '20:47',
  items: [
    { quantity: 4, name: 'Dry-aged Ribeye 16oz', price: 320.00 },
    { quantity: 2, name: 'Lobster Thermidor', price: 285.00 },
    { quantity: 2, name: 'Truffle Mashed Potatoes', price: 48.00 },
    { quantity: 2, name: 'Grilled Asparagus Spears', price: 42.00 },
    { quantity: 1, name: 'Caviar Tasting Plate', price: 120.00 },
    { quantity: 1, name: 'Baked Brie & Fig Jam', price: 26.00 },
    { quantity: 3, name: 'Old Fashioned Cocktails', price: 57.00 },
    { quantity: 2, name: 'House Red Wine (Glass)', price: 42.00 },
    { quantity: 1, name: 'Sparkling Mineral Water', price: 10.00 },
    { quantity: 1, name: 'Triple Chocolate Lava Cake', price: 18.00 },
    { quantity: 1, name: 'Seasonal Fruit Platter', price: 22.00 }],
  taxes: [{ name: 'HST', percent: '13', total: '' },
    { name: 'Service Charge', percent: '15', total: '' }],
  subtotal: 0,
  total: 0,
  paymentType: 'VISA',
  cardLast4Digits: 'XXXXXXXXXXXXXXXX3710',
  footer1: 'Thank you for dining with us!',
  footer2: 'Follow us on Instagram: LomaSteakT',
  footer3: '',
  website:'example.com'
};
function App() {
  

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('receiptData');
    return saved ? JSON.parse(saved) : defaultData;
  });

  const [type, setType] = useState('Standard');



  return (
    <BrowserRouter>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', cursor: 'pointer' }}>
        <Link to='/' style={{ margin: '0 20px' }}>Home</Link>
        <Link to='/preview'>Preview</Link>
      </div>

      <Routes>
        <Route path='/' element={
          <div className='App'>
            <div className="grid-container">
              <div className="grid-item">
                <ReceiptForm getData={setData} data={data}/>
              </div>
              <div className="grid-item">
                <Receipts data={data} setType={setType} />
              </div>
            </div>
          </div>
        } />

        <Route path='/preview' element={<Print data={data} type={type} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
