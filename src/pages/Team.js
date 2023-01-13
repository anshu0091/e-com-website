import React from "react";
import zidane from "./picture/zidane.jpg";
import tony from "./picture/tonikroos.jpg";
import iker from "./picture/ikercasillas.jpg";
import james from "./picture/james.jpg";
import cristiano from "./picture/christiano.jpg";

import facebook from "./picture/facebook@2x.png";
const Team = () => {
  return (
    <>
      <h4>
        without bonding and coordination every project is a failure. Look at
        Wwho makes KICKSUP great
      </h4>
      <div className="contioner3">
        <div style={{ width: 150, height: 300 }}>
          <img src={zidane} alt="" style={{ height: 150, width: 150 }} />
          <div>
            Zidane
            <br />
            Leadership & management
            <br />
            <img src={facebook} alt="" style={{ height: 25, width: 25 }} />
          </div>
        </div>
        <div style={{ width: 150, height: 300 }}>
          <img src={tony} alt="" style={{ height: 150, width: 150 }} />
          Toni Kroos
          <br />
          prodect devloper
          <br />
        </div>
        <div style={{ width: 150, height: 300 }}>
          <img src={iker} alt="" style={{ height: 150, width: 150 }} />
          iker Casillas
          <br />
          Markeeting strategy
          <br />
        </div>

        <div style={{ width: 150, height: 300 }}>
          <img src={james} alt="" style={{ height: 150, width: 150 }} />
          James
          <br />
          prodect desiner
          <br />
        </div>
        <div style={{ width: 150, height: 300 }}>
          <img src={cristiano} alt="" style={{ height: 150, width: 150 }} />
          Zidane
          <br />
          Financial opereation
          <br />
        </div>
      </div>
    </>
  );
};

export default Team;
