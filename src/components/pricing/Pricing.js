import React, { useState } from "react";
import Toggles from "../Toggle";
import "../css/pricing.css";

const Pricing = () => {
  const [price, setPrice] = useState("$19.99");

  const [price2, setPrice2] = useState("$24.99");

  const [price3, setPrice3] = useState("$39.99");

  const [isChecked, setIsChecked] = useState(true);

  const toggle = () => {
    setIsChecked(!isChecked);

    if (price === "$19.99" && price2 === "$24.99" && price3 === "$39.99") {
      setPrice("$199.99");

      setPrice2("$249.99");

      setPrice3("$399.99");
    } else {
      setPrice("$19.99");

      setPrice2("$24.99");

      setPrice3("$39.99");
    }
  };

  return (
    <div className="container">
      <div className="ourPrice">Our Pricing</div>

      <div className="para">
        <div className="annual">Annually</div>

        <Toggles checked={isChecked} onChange={toggle} />

        <div className="month">Monthly</div>
      </div>

      <div className="flex">
        <div className="bx">
          <h4>Basic</h4>

          <p>{price}</p>
          <ul>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>

          <button>LEARN MORE</button>
        </div>

        <div className="bx prof">
          <h>Professional</h>

          <p>{price2}</p>
          <ul>
            <li>1 TB Storage</li>
            <li>5 Users Allowed</li>
            <li>Send up to 10 GB</li>
          </ul>
          <button>LEARN MORE</button>
        </div>

        <div className="bx">
          <h4>Master</h4>

          <p>{price3}</p>
          <ul>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
          </ul>

          <button>LEARN MORE</button>
        </div>
      </div>
      <br />
      <br />
      <marquee
        className="marco"
        behavior="scroll"
        direction="right"
        width="100%"
        height="50px"
        scrollAmount="5"
      >
        Adeleke Abubakar O.
      </marquee>
    </div>
  );
};

export default Pricing;
