import React from 'react'
import StandardReceipt from './Receipts/style1/StandardReceipt'
import ThermalReceipt from './Receipts/style2/ThermalReceipt'

export default function Print({data, type}) {
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
    <div>{receipts[type.toLowerCase().replace(' ', '')]?.component}</div>
  )
}
