import React from 'react';
import { useState } from 'react';

export default function Form(props) {

  const [Text, setText] = useState('')
  const [Height, setHeight] = useState("300")
  const [Width, setWidth] = useState("300")
  const [Encoding, setEncoding] = useState('UTF-8')
  const [Type, setType] = useState('qr')
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setTextValue(Text);
    props.setEncodingValue(Encoding)
    props.setTypeValue(Type)
    props.setHeightValue(Height)
    props.setWidthValue(Height)
  }

  return (
    <div className='p-5 fs-3 w-auto d-flex justify-content-center align-items-center' style={{ minWidth: '60%', minHeight: '70vh' }}>
      <div className='m-3 text-center container'>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3" style={{ width: "100%" }}>
              <label htmlFor="inputTextForConvert" className="form-label font-monospace">Text/Link To Convert</label>
              <input type="text" autoComplete="off" className="form-control" id="inputTextForConvert" value={Text} onChange={(e) => setText(e.target.value)} />
            </div>
          </div>

          <div className="container text-end">
            <button type="button" className="btn dropdown-toggle dropdown-toggle-split my-2" id="moreButton" data-bs-toggle="collapse" data-bs-target="#MoreSettings" aria-expanded="false" aria-controls="collapseExample">More Settings </button>
          </div>

          <div className="collapse" id="MoreSettings">

            <div className="row container">
              <div className="mb-3 fs-5  col">
                <label htmlFor="floatingSelect" className='form-label'>Encoding</label>
                <select className="form-select more-form" id="floatingSelect" aria-label="Floating label select example" value={Encoding} onChange={(e) => setEncoding(e.target.value)}>
                  <option value="UTF-8">UTF-8</option>
                  <option value="URL">URL</option>
                  <option value="base64">base64</option>

                </select>
              </div>
              <div className="mb-3 fs-5  col">
                <label htmlFor="floatingSelect" className='form-label'>Type</label>
                <select className="form-select more-form" id="floatingSelect" aria-label="Floating label select example" value={Type} onChange={(e) => setType(e.target.value)}>
                  <option value="qr">QR</option>
                  <option value="image" disabled>Image</option>

                </select>
              </div>
            </div>

            <div className="container row">
              <div className="mb-3 fs-5  col">
                <label htmlFor="heightOfResult" className="form-label">{Type === "qr" ? "Size" : "Height"} of Result </label>
                <div className="input-group">
                  <input type="number" className="form-control more-form" id="heightOfResult" min='50' value={Height} onChange={(e) => setHeight(e.target.value)} />
                  <span className="input-group-text  ">px</span>
                </div>
              </div>
              {Type !== "qr" ? <div className="mb-3  fs-5 col">
                <label htmlFor="widthOfResult" className="form-label">Width of Result </label>
                <div className="input-group">
                  <input type="number" className="form-control more-form" id="widthOfResult" min='50' value={Width} onChange={(e) => setWidth(e.target.value)} />
                  <span className="input-group-text  ">px</span></div>
              </div> : ""}
            </div>
          </div>

          <div className="container">
            <button type="submit" className="btn btn-danger btn-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
