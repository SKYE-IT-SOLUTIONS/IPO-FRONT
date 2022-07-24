import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
   console.log("Captcha value:", value);
}

function Captcha() {
   return (
      <div>
         {
            <ReCAPTCHA
               sitekey="6LdRBhkhAAAAAGku-pnVSat2HZ1ogUVf4rCheUcr"
               onChange={onChange}
               onError={onChange}
            />
         }
      </div>
   );
}

export default Captcha;
