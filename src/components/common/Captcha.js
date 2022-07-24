import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

function Captcha() {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6Ldp_xghAAAAAG9UVHYT2qj9W0MxpipxEdVJtyga"
        onChange={onChange}
      />
    </div>
  );
}

export default Captcha;
