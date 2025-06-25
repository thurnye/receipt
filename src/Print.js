import React from 'react'
import StandardReceipt from './Receipts/style1/StandardReceipt'
import ThermalReceipt from './Receipts/style2/ThermalReceipt'
import Sample3 from './Receipts/style3/Sample3'
import Sample4 from './Receipts/style4/Sample4'
import Sample6 from './Receipts/style6/Sample6'
import Sample5 from './Receipts/style5/Sample5'

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
    }
  return (
    <div>{receipts[type.toLowerCase().replace(' ', '')]?.component}</div>
  )
}
