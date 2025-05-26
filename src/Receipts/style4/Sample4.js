import React from 'react';
import './Sample4.css';

const Sample4 = () => {
  return (
    <div className="yonge-receipt">
      <h4 className="center">The Yonge Street Warehouse</h4>
      <p className="center">
        336 Yonge Street<br />
        Toronto ON M5B 1R8<br />
        416-599-6788
      </p>

      <p className="center">** TRANSACTION RECORD **</p>

      <div className="details">
        <p>Tran. #: 4792</p>
        <p>Lookup #: 04792802211087</p>
        <p>RVC #: RESTAURANT</p>
        <p>Table #: 141</p>
        <p>Check #: 44921</p>
        <p>Group #: 1</p>
        <p>Employee #: 317</p>
        <p>Employee: SONJA</p>
      </div>

      <div className="details" style={{ marginTop: 10 }}>
        <p>Type: Purchase</p>
        <p>Acct: Visa</p>
        <p>Card #: ************8022</p>
      </div>

      <hr />

      <div className="amounts">
        <div className="bold">
          <span style={{width: 200, textAlign: 'end'}}>Amount</span>
          <span style={{width: 200, textAlign: 'end'}}>$193.96</span>
        </div>
        <div className="bold">
          <span style={{width: 200, textAlign: 'end'}}>Tip</span>
          <span style={{width: 200, textAlign: 'end'}}>$16.91</span>
        </div>
        <div className="bold">
          <span style={{width: 200, textAlign: 'end'}}>TOTAL</span>
          <span style={{width: 200, textAlign: 'end'}}>$210.87</span>
          </div>
      </div>

      <hr />

      <div className="details">
        <p>Reference #: 0016720470 H</p>
        <p>Auth. #: 002611</p>
        <p>WARE092519 006</p>
        <p>06/24/2025  1:30:08 AM</p>
        <p>Visa CREDIT</p>
        <p>A0000000031010</p>
      </div>

      <p className="center bold">APPROVED - THANK YOU</p>
      <p className="center">01-027</p>

      <p className="center small">No signature required</p>
      <p className="center small">IMPORTANT—<br />Retain this copy for your records</p>

      <p className="center bold">### CARDHOLDER COPY ###</p>

      <p className="center">THANK YOU<br />Come Again</p>
    </div>
  );
};

export default Sample4;
