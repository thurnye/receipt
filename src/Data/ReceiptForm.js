import React, { useEffect, useState } from 'react';
import './ReceiptForm.css';
import StandardReceipt from '../Receipts/style1/StandardReceipt';   
import ThermalReceipt from '../Receipts/style2/ThermalReceipt';

const ReceiptForm = ({getData, data}) => {
  const [items, setItems] = useState([]);
  const [taxes, setTaxes] = useState([
    { name: '', percent: '', total: '' },
    // { name: 'Service Charge', percent: '15', total: '' }
  ]);
  

  const [restaurantData, setRestaurantData] = useState(data);

  useEffect(() => {
    const savedData = localStorage.getItem('receiptData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setRestaurantData(parsed);
      setItems(parsed.items || []);
      setTaxes(parsed.taxes || []);
    }
  }, []);
  
  

 

  const handleRestaurantChange = (e) => {
    setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
    // getData({ ...restaurantData, [e.target.name]: e.target.value })
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleAddItemRow = () => {
    setItems([...items, { name: '', price: '', quantity: '' }]);
  };

  useEffect(() => {
    const parsedItems = items.map(item => ({
      ...item,
      price: parseFloat(item.price) || 0,
      quantity: parseInt(item.quantity) || 0
    }));
  
  
    const subtotal = parsedItems.reduce((sum, item) => sum + item.price, 0);
  
    const totalTaxAmount = taxes.reduce((sum, tax) => {
      const percent = tax.percent || 0;
      return sum + ((percent / 100) * subtotal);
    }, 0);

  
    const total = subtotal + totalTaxAmount;
  
    setRestaurantData(prev => ({
      ...prev,
      items: parsedItems,
      subtotal: subtotal.toFixed(2),
      total: total.toFixed(2),
      taxes: taxes.map(tax => {
        const percent = tax.percent || 0;
        const total = ((percent / 100) * subtotal).toFixed(2);
        return { ...tax, total };
      })
    }));
    // getData({
    //   ...restaurantData,
    //   items: parsedItems,
    //   subtotal: subtotal,
    //   total: total.toFixed(2),
    //   taxes: taxes.map(tax => {
    //     const percent = tax.percent || 0;
    //     const total = ((percent / 100) * subtotal).toFixed(2);
    //     return { ...tax, total };
    //   } )
    // })
  }, [items, taxes]);
  

  const handleAddTaxRow = () => {
    setTaxes([...taxes, { name: '', percent: '', total: '' }]);
  };

  const handleTaxChange = (index, field, value) => {
    const updatedTaxes = [...taxes];
    updatedTaxes[index][field] = value;
  
    if (field === 'percent') {
      const percent = value || 0;
      const subtotal = restaurantData.subtotal;
      updatedTaxes[index].total = ((percent / 100) * subtotal).toFixed(2);
    }
  
    setTaxes(updatedTaxes);
  };

  const handleTaxItemDelete = (indexToDelete) => {
    const updatedItems = taxes.filter((_, index) => index !== indexToDelete);
    setTaxes(updatedItems);
  };

  const handleDeleteItem = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };
  
  useEffect(() => {
    getData(restaurantData)
    localStorage.setItem('receiptData', JSON.stringify(restaurantData)); 
  },[restaurantData])
  
  


  return (
    <div className="receipt-form">
     

      <div className="form-section">
          <div>
            <h3>Restaurant Receipt Inputs</h3>
            <div className='form-section'>
              <label>Restaurant Name:</label>
            <input name="restaurant" placeholder="Restaurant Name" value={restaurantData.restaurant} onChange={handleRestaurantChange} />

            </div>
            <div className='form-section'>
              <label>Street:</label>
            <input name="street" placeholder="street" value={restaurantData.street} onChange={handleRestaurantChange} />

            </div>
            <div className='form-section'>
              <label>City:</label>
            <input name="city" placeholder="city" value={restaurantData.city} onChange={handleRestaurantChange} />

            </div>
            <div className='form-section'>
              <label>Province/State:</label>
            <input name="state" placeholder="state" value={restaurantData.state} onChange={handleRestaurantChange} />

            </div>
            <div className='form-section'>
              <label>ZIP/PostalCode:</label>
            <input name="postalCode" placeholder="postalCode" value={restaurantData.postalCode} onChange={handleRestaurantChange} />

            </div>
            <div className='form-section'>
              <label>Phone:</label>
            <input name="phone" placeholder="Phone" value={restaurantData.phone} onChange={handleRestaurantChange} />

            </div>
            <div className='form-section'>
              <label>Business No:</label>
            <input name="businessNo" placeholder="businessNo" value={restaurantData.businessNo} onChange={handleRestaurantChange} />
            </div>

            <div className='form-section'>

              <label>Table No:</label>
            <input name="table" placeholder="Table" value={restaurantData.table} onChange={handleRestaurantChange} />

            </div>

            <div className='form-section'>
              <label>Server Name:</label>
            <input name="serverName" placeholder="server Name" value={restaurantData.serverName} onChange={handleRestaurantChange} />
            </div>

            <div className='form-section'>
              <label>Batch No:</label>
            <input name="batchNo" placeholder="345" value={restaurantData.batchNo} onChange={handleRestaurantChange} />
            </div>
            <div className='form-section'>
              <label>RRN No:</label>
            <input name="rrn" placeholder="0013282360" value={restaurantData.rrn} onChange={handleRestaurantChange} />
            </div>
            <div className='form-section'>
              <label>Invoice No:</label>
            <input name="invoice" placeholder="229" value={restaurantData.invoice} onChange={handleRestaurantChange} />
            </div>
            <div className='form-section'>
              <label>Ref No:</label>
            <input name="refNo" placeholder="00000232" value={restaurantData.refNo} onChange={handleRestaurantChange} />
            </div>
            <div className='form-section'>
              <label>APPRCode No:</label>
            <input name="apprCode" placeholder="05100Z" value={restaurantData.apprCode} onChange={handleRestaurantChange} />
            </div>
            <div className='form-section'>
              <label>AID No:</label>
            <input name="aid" placeholder="A0000000041010" value={restaurantData.aid} onChange={handleRestaurantChange} />
            </div>

            <div className='form-section'>
              <label>Receipt Date:</label>
            <input name="date"  type="date" placeholder="Date" value={restaurantData.date} onChange={handleRestaurantChange} />

            </div>
            <div className='form-section'>
              <label>Receipt Time:</label>
            <input name="time" type="time" placeholder="Time" value={restaurantData.time} onChange={handleRestaurantChange} />

            </div>

            <div style={{margin: '20px 0'}}>
              <h5>ITEMS</h5>
              {items.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Item Name</label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={e => handleItemChange(index, 'name', e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Price</label>
                    <input
                      type="number"
                      value={item.price}
                      onChange={e => handleItemChange(index, 'price', e.target.value)}
                      style={{ width: '100px' }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Quantity</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={e => handleItemChange(index, 'quantity', e.target.value)}
                      style={{ width: '100px' }}
                    />
                  </div>
                  <button
                    onClick={() => handleDeleteItem(index)}
                    style={{
                      color: 'white',
                      padding: '6px 10px',
                      border: 'none',
                      borderRadius: '4px',
                      height: '38px',
                      alignSelf: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    🗑
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddItemRow}
                style={{
                  marginTop: 10,
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: 5,
                  cursor: 'pointer'
                }}
              >
                Add Item
              </button>

              <div style={{ display: 'flex', justifyContent:'flex-end', margin: '20px 0' }}>
                SubTotal: ${restaurantData.subtotal}
              </div>
            </div>

              <div style={{margin: '20px 0'}}>
                <h5>TAXES</h5>
                {taxes.map((tax, index) => (
                  <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label>Tax Type</label>
                      <input
                        type="text"
                        value={tax.name}
                        placeholder='hst, gst, pst...etc'
                        onChange={e => handleTaxChange(index, 'name', e.target.value)}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label>Percent</label>
                      <input
                        type="number"
                        value={tax.percent}
                        onChange={e => handleTaxChange(index, 'percent', e.target.value)}
                        style={{ width: '100px' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label>Total</label>
                      <input
                        disabled
                        type="number"
                        value={tax.total}
                        onChange={e => handleTaxChange(index, 'total', e.target.value)}
                        style={{ width: '100px' }}
                      />
                    </div>

                    <button
                      onClick={() => handleTaxItemDelete(index)}
                      style={{
                        color: 'white',
                        padding: '6px 10px',
                        border: 'none',
                        borderRadius: '4px',
                        height: '38px',
                        alignSelf: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      🗑
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddTaxRow}
                  style={{
                    marginTop: 10,
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: 5,
                    cursor: 'pointer'
                  }}
                >
                  Add Tax
                </button>
                <div style={{ display: 'flex', justifyContent:'flex-end', margin: '20px 0' }}>
                SubTotal: ${restaurantData.total}
              </div>
              </div>



                
          
            





            <div className='form-section'>
              <label>Footer1</label>
            <input name="footer1" placeholder="Thank you for dining with us!" value={restaurantData.footer1} onChange={handleRestaurantChange} />
            </div>
            <div className='form-section'>
              <label>Footer2</label>
            <input name="footer2" placeholder="Thank you for dining with us!" value={restaurantData.footer2} onChange={handleRestaurantChange} />
            </div>
            <div className='form-section'>
              <label>Footer3</label>
            <input name="footer3" placeholder="Thank you for dining with us!" value={restaurantData.footer3} onChange={handleRestaurantChange} />
            </div>

           
            <div className='form-section'>
              <label>Payment Type:</label>
            <input name="paymentType" placeholder="VISA, MASTERCARD,...etc" value={restaurantData.paymentType} onChange={handleRestaurantChange} />

            </div>
            <div className='form-section'>
              <label>Payment:</label>
            <input name="paymentMethod" placeholder="Payment Method" value={restaurantData.paymentMethod} onChange={handleRestaurantChange} />

            </div>

          
          </div>
          </div>
      
    </div>
  );
};

export default ReceiptForm;
