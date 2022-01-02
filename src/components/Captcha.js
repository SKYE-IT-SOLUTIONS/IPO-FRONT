import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value);
  }

function Captcha() {
    return (
        <div>
            <ReCAPTCHA
            sitekey="6LdKyuYdAAAAALtVruhZDuwZg9mLKsdg8D7oC_01"
            onChange={onChange}
      />
        </div>
    )
}

export default Captcha
