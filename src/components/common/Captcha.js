import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

function Captcha() {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6LelAhkhAAAAAK0wxP_orJ2JSnhAKLiN6SuOGoyw"
        onChange={onChange}
      />
    </div>
  );
}

export default Captcha;

//6LelAhkhAAAAAK0wxP_orJ2JSnhAKLiN6SuOGoyw
//6Ldp_xghAAAAAG9UVHYT2qj9W0MxpipxEdVJtyga
