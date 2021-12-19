export const Validator = (input, pattern,input_type = "") => {
  let error = null;
  let status = false;

  if (input === "") {
    error = input_type + " Required";
    status = false;
  } else if (!pattern.test(input)) {
    error = "Enter Valid " + input_type;
    status = false;
  } else {
    status = true;
  }

  return { error: error, status: status };
};

export const Simple_Validator = (input,input_type = "") => {
  let error = null;
  let status = false;

  if (input === "") {
    error = input_type + " is required";
    status = false;
  } else {
    status = true;
  }

  return { error: error, status: status };
};

export const upload_Validator = (input,input_type = "") => {
  let error = null;
  let status = false;

  if (input === "") {
    error = input_type + " Required";
    status = false;
  }
  if (input.size >= 2000000) {
    error = input_type + " size cannot exceed more than 2MB";
    status = false;
  }
  // if (input.type !== "image/jpeg") {
  //   error = "supported jpeg only";
  //   status = false;
  // }  
  else {
    status = true;
  }

  return { error: error, status: status };
};

