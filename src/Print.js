import React from 'react'
import StandardReceipt from './Receipts/style1/StandardReceipt'
import ThermalReceipt from './Receipts/style2/ThermalReceipt'
import Sample3 from './Receipts/style3/Sample3'

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
        sample3: {
            component: <Sample3 data={data}/>,
            name: 'Sample3',
        },
    }
  return (
    <div>{receipts[type.toLowerCase().replace(' ', '')]?.component}</div>
  )
}
