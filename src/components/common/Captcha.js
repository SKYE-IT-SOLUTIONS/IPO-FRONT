import React from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

function onChange(value) {
  console.log("Captcha value:", value);
}

function Captcha() {
  return (
    <div>
      <GoogleReCaptchaProvider reCaptchaKey="6LelAhkhAAAAAK0wxP_orJ2JSnhAKLiN6SuOGoyw">
        <GoogleReCaptcha onVerify={onChange} />
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default Captcha;

//6LelAhkhAAAAAK0wxP_orJ2JSnhAKLiN6SuOGoyw
//6Ldp_xghAAAAAG9UVHYT2qj9W0MxpipxEdVJtyga
