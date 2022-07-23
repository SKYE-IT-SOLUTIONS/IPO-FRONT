import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

function Captcha() {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6LcBFxIhAAAAAFg_OfQq9DZ6e7dqk6V5Oi0SzjCs"
        onChange={onChange}
      />
    </div>
  );
}

export default Captcha;
