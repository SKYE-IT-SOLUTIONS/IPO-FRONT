import { getErrorMessage, postRequest } from "../utils";
import { FILE_UPLOAD_URL } from "../../config/urls";

var result = { status: false, error: null, fileURL: null };

export const onFileUpload = async (file) => {
  console.log("onFileUpload Triggered");

  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  await postRequest(FILE_UPLOAD_URL, formData, config)
    .then(({ data, error }) => {
      if (!error) {
        const { fileUrl, message } = data.data;
        console.log(message);
        result = { status: true, error: null, fileURL: fileUrl };
      } else {
        result = {
          status: false,
          error: getErrorMessage(error),
          fileURL: null,
        };
      }
    })
    .catch((err) => {
      console.log(err);
      result = { status: false, error: getErrorMessage(err), fileURL: null };
    });
  console.log(result);
  return result;
};

export const onFileDelete = async (fileId) => {}
