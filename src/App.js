import logo from './logo.svg';
import './App.css';
import StandardReceipt from './Receipts/style1/StandardReceipt';
import ThermalReceipt from './Receipts/style2/ThermalReceipt';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import ReceiptForm from './Data/ReceiptForm';
import Receipts from './Receipts/receipts';
import { useState } from 'react';
import Print from './Print';

function App() {
   const [data, setData] = useState();
   const [type, setType] = useState('Standard')
  return (
    <BrowserRouter>
    <div style={{ display: 'flex', justifyContent:'center', margin: '20px 0', cursor: 'pointer'}}>
        <Link to='/' style={{margin: '0 20px'}}>Home</Link>
        <Link to='/preview'>Preview</Link>
    </div>
    <Routes>
    <Route path='/' element={<>
      <div className='App'>
        
        <div className="grid-container">
        <div className="grid-item"><ReceiptForm getData={setData}/></div>
        <div className="grid-item"><Receipts data={data} setType={setType} /></div>
      </div>
      </div>
    </>} />
    <Route path='/preview' element={<Print data={data} type={type}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
