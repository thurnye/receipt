import React, {useState} from 'react'
import ThermalReceipt from './style2/ThermalReceipt'
import StandardReceipt from './style1/StandardReceipt'

const Receipts = ({data}) => {
    const[receiptName, setReceiptName] = useState('Standard')

    const receipts = {
        standard: {
            component: <StandardReceipt data={data}/>,
            name: 'Standard',
        },
        thermal: {
            component: <ThermalReceipt data={data}/>,
            name: 'Thermal',
        },
    }


  return (
    <div>
      <div>Receipts</div>
      <div className='all-receipt-container'>
          <h2>{receiptName}</h2>
          <div className='receipt-toggle'>
              {Object.keys(receipts).map((key) => (
                  <button
                      key={key}
                      onClick={() => setReceiptName(receipts[key].name)}
                      className={receiptName === receipts[key].name ? 'active' : ''}
                      style={{
                            backgroundColor: receiptName === receipts[key].name ? '#4CAF50' : '#f1f1f1',
                            color: receiptName === receipts[key].name ? 'white' : 'black',
                      }}
                  >
                      {receipts[key].name}
                  </button>
              ))}
          </div>

          {receipts[receiptName.toLowerCase().replace(' ', '')]?.component}
      </div>
    </div>
  )
}

export default Receipts
