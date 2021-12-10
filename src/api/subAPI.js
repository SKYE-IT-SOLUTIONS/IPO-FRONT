import { getErrorMessage, postRequest } from "./utils";
import { SUBSCRIBE_URL } from "../config/urls";

var result = { status: false, error: null }; //global variable declared

export const subscribeIpo = async (data) => {
  console.log("Subcription Process");
  await postRequest(SUBSCRIBE_URL, data)
    .then(({ data, error }) => {
        console.log("Data ",data)
      if (!error) {
        console.log("subscription success");
        result = { status: true, error: null };
      } else {
        console.log("subscription failed");
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      console.log("error " + error);
      result = { status: false, error: getErrorMessage(error) };
    });
  console.log("Subscription Result ", result);
  return result;
};
