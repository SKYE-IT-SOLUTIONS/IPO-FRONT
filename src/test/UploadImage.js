import React, { useEffect, useState } from "react";

import FileService from "../services/FileService";

export default function UploadImage() {

  const fileService = new FileService();

  const [imageUrl, setimageUrl] = useState("");
  const [isload, setisload] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    setimageUrl(localStorage.getItem("dataUrl"));
  }, [isload]);

  const handleUpload = async (file) => {
    console.log("handleUpload Triggered");
    const {status,error,data} = await fileService.handleCreate(file);
    if (status) {
      console.log("fileURL", data?.fileUrl);
    }else{
      console.log("error", error);
    }

  }

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
          setFile(fileObj);
        }}
      />
      {/* <img src={{uri:"https://ipobackendapi.herokuapp.com/api/data/files/2021_12_21_17_40_30_nVGGcibWfB_WhatsApp%2520Image%25202021-09-28%2520at%252023.19.22.jpeg"}} alt="uploaded" /> */}
      {}
      <button onClick={()=>{handleUpload(file)}}><h1>Upload</h1></button>
    </div>
  );
}
