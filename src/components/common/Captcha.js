import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

function Captcha() {
  return (
    <ReCAPTCHA
      sitekey="6LdRBhkhAAAAAGku-pnVSat2HZ1ogUVf4rCheUcr"
      onChange={onChange}
      onError={onChange}
    />
  );
}

export default Captcha;
