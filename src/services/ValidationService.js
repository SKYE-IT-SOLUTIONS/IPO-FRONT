export const Validator = (input_type, input, pattern) => {
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

export const Simple_Validator = (input_type = "", input) => {
  let error = null;
  let status = false;

  if (input === "") {
    error = input_type + " Required";
    status = false;
  } else {
    status = true;
  }

  return { error: error, status: status };
};
