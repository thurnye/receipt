import logo from './logo.svg';
import './App.css';
import StandardReceipt from './Receipts/style1/StandardReceipt';
import ThermalReceipt from './Receipts/style2/ThermalReceipt';
import ReceiptForm from './Data/ReceiptForm';
import Receipts from './Receipts/receipts';
import { useState } from 'react';

function App() {
   const [data, setData] = useState();
  return (
    <div className='App'>
      
      <div className="grid-container">
      <div className="grid-item"><ReceiptForm getData={setData}/></div>
      <div className="grid-item"><Receipts data={data} /></div>
    </div>
    </div>
  );
}

export default App;
