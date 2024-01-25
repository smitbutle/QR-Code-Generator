import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  
  const [TextValue, setTextValue] = useState("")
  const [TypeValue, setTypeValue] = useState("qr")
  const [EncodingValue, setEncodingValue] = useState("UTF-8")
  const [HeightValue, setHeightValue] = useState("300")
  const [WidthValue, setWidthValue] = useState("300")
  const [Invert, setInvert] = useState("")

  return (
<>
<Navbar invert={setInvert}/>
<div className="d-flex justify-content-around flex-wrap align-items-center m-5">
  <Form setTextValue={setTextValue} setTypeValue={setTypeValue} setEncodingValue={setEncodingValue} setHeightValue={setHeightValue} setWidthValue={setWidthValue} />
{TextValue?<Result mode={Invert} text={TextValue} type={TypeValue} encoding={EncodingValue} height={HeightValue} width={WidthValue}/>:""
}</div>
<Footer/>
</>
  );
}

export default App;
