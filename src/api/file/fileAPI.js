import { getErrorMessage, postRequest,authRequest } from "../utils";

var result = { status: false, error: null, fileURL: null };

export const onFileUpload = async (FILE_UPLOAD_URL, file) => {
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
        result = { status: true, error: null, data: data?.data };
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

export const onFileDelete = async (FILE_URL) => {
  var config = {
    method: "DELETE",
    url: FILE_URL,
  };
  await authRequest(config)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true,data:null, error: null };
        }else if(data.status === 204) {
          console.log("success");
          result = { status: true,data:null, error: null };
        }
      } else {
        result = { status: false,data:null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false,data:null, error: getErrorMessage(error) };
    });
  return result;
}
