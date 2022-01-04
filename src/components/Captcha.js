import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value);
  }

function Captcha() {
    return (
        <div>
            <ReCAPTCHA
            sitekey="6Ld0jO0dAAAAAGmY_dzPwzMzCluzMmP5Mk_MhV0R"
            onChange={onChange}
      />
        </div>
    )
}

export default Captcha
