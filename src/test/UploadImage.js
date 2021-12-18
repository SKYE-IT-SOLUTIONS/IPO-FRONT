import React, { useEffect, useState } from "react";

export default function UploadImage() {
  const [imageUrl, setimageUrl] = useState("");
  const [isload, setisload] = useState(false);
  useEffect(() => {
    setimageUrl(localStorage.getItem("dataUrl"));
  }, [isload]);
  return (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        onChange={async (e) => {
          setisload(false);
          const fileObj = e.target.files[0];
          const buffer = Buffer.from(await new Response(fileObj).arrayBuffer());
          const dataUrl = `data:${fileObj.type};base64,${buffer.toString(
            "base64"
          )}`;
          localStorage.setItem("dataUrl", dataUrl);
          setisload(true);
          console.log(e.target.files[0]);
        }}
      />
      <img src={imageUrl} alt="uploaded" />
    </div>
  );
}
