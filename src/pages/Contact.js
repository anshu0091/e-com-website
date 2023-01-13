import React from "react";
import facebook from "./picture/facebook@2x.png";
import twitter from "./picture/twitter@2x.png";
import insta from "./picture/insta@2x.png";
function Contact() {
  return (
    <>
      <div className="contactcontioner">
        <div className="contactcontioner1">
          <h2 style={{ marginBottom: -5 }}>support@kicksup.com</h2>
          <div>for any tecnical support</div>
          <h2 style={{ marginBottom: -5 }}>info@kicksup.com</h2>
          <div>for more information</div>
          <h2 style={{ marginBottom: -5 }}>feedback@kicksup.com</h2>
          <div>to work with us</div>

          <img
            src={twitter}
            style={{ height: 25, width: 25, marginLeft: 70 }}
          />
          <img
            src={insta}
            style={{ height: 25, width: 25, padding: 15, marginBottom: -15 }}
          />
          <img
            src={facebook}
            style={{
              height: 25,
              width: 25,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
