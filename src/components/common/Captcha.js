import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

function Captcha() {
  return (
    <ReCAPTCHA
      sitekey="6LepNhkhAAAAACamaK8hNbjB2LSCO1mGxDw1r15Q"
      onChange={onChange}
      onError={onChange}
    />
  );
}

export default Captcha;
