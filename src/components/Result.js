import React from 'react';
import QRCode from 'react-qr-code';
import { Buffer } from 'buffer';

import "../App.css";

export default function Result(props) {
  // Function to handle encoding based on the provided encoding type
  const encodeText = (text, encoding) => {
    console.log(text, encoding);
    if (encoding === 'base64') {
      console.log(Buffer.from(text).toString('base64'));
      return Buffer.from(text).toString('base64');
    } else if (encoding === 'URL') {
      console.log(encodeURIComponent(text));
      return encodeURIComponent(text);
    } else {
      // Default to UTF-8 encoding
      return text;
    }
  };

  const encodeImage = (image) => {
    if(props.type === 'image'){
      //create image instead of svg
      
    }
  }
  let size = parseInt(props.width);
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className="resultHeading">
          <h2 className='font-monospace'>RESULT</h2>
        </div>
        {props.text ?
          <QRCode
          value={encodeText(props.text, props.encoding)}
          size={size}
          bgColor="#FFFFFF"
          fgColor="#000000"
          id='qrcontainer'
        /> :
          <h2 className='m-5 p-5 text-muted text-center'>Fill Text Form to Convert to QR</h2>
        }
      </div>
    </>
  );
}
