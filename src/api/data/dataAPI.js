import {
  getRequest,
  postRequest,
  authRequest,
  getErrorMessage,
} from "../utils";
import { getAccessToken, refreshAccessToken } from "../auth/tokensAPI";

const REFRESH_URL = "/auth/refreshtoken";

var result = { status: false, data: null, error: null };

export const onSubmit = async (DATA_URL, data) => {
  var config = {
    method: "POST",
    url: DATA_URL,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  await authRequest(config)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true, data: data?.data, error: null };
        } else if (data.status === 201) {
          console.log("success");
          result = { status: true, data: data?.data, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onSubmit(data);
          } else {
            result = {
              status: false,
              data: null,
              error: getErrorMessage(error),
            };
          }
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const onSubmitNoAuth = async (DATA_URL, data) => {
  var config = {
    method: "POST",
    url: DATA_URL,
    data: data,
  };
  console.log("onSubmitNoAuth");
  await authRequest(config)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 201) {
          console.log("success");
          result = { status: true, data: data?.data, error: null };
        } else if (data.status === 200) {
          console.log("success");
          result = { status: true, data: data?.data, error: null };
        } else {
          console.log("Error");
          result = { status: false, data: null, error: getErrorMessage(error) };
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      console.log("error");
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const onUpdate = async (DATA_URL, id, data) => {
  var config = {
    method: "PUT",
    url: DATA_URL + `/${id}`,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  await authRequest(config)
    .then(async ({ data, error }) => {
      console.log("data", data);
      console.log("error", error);
      if (!error) {
        if (data.status === 201) {
          result = { status: true, data: data?.data, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onUpdate(config);
          } else {
            result = {
              status: false,
              data: null,
              error: getErrorMessage(error),
            };
          }
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const onDelete = async (DATA_URL, id) => {
  var config = {
    method: "DELETE",
    url: DATA_URL + `/${id}`,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
    },
  };
  await authRequest(config)
    .then(async ({ data, error }) => {
      console.log("data", data);
      if (!error) {
        if (data.status === 202) {
          result = { status: true, data: data?.data, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onDelete(config);
          } else {
            result = {
              status: false,
              data: null,
              error: getErrorMessage(error),
            };
          }
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const onGetAllAuthenticated = async (DATA_URL) => {
  var config = {
    method: "GET",
    url: DATA_URL,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
    },
  };
  await authRequest(config)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true, data: data?.data, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onGetAllAuthenticated(DATA_URL);
          } else {
            result = {
              status: false,
              data: null,
              error: getErrorMessage(error),
            };
          }
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const onGetAll = async (DATA_URL) => {
  await getRequest(DATA_URL)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true, data: data?.data, error: null };
        } else {
          result = {
            status: false,
            data: null,
            error: getErrorMessage(error),
          };
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const onGetOne = async (DATA_URL, id) => {
  await getRequest(`${DATA_URL}/${id}`)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true, data: data?.data, error: null };
        } else {
          result = {
            status: false,
            data: null,
            error: getErrorMessage(error),
          };
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const onGetOneAuthenticated = async (DATA_URL, id) => {
  var config = {
    method: "GET",
    url: `${DATA_URL}/${id}`,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
    },
  };
  await authRequest(config)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true, data: data?.data, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onGetAllAuthenticated(DATA_URL);
          } else {
            result = {
              status: false,
              data: null,
              error: getErrorMessage(error),
            };
          }
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const onApproved = async (DATA_URL, id) => {
  var config = {
    method: "PUT",
    url: DATA_URL + `/${id}`,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
    },
  };
  await authRequest(config)
    .then(async ({ data, error }) => {
      console.log("data", data);
      if (!error) {
        if (data.status === 200) {
          result = { status: true, data: data?.data, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onApproved(config);
          } else {
            result = {
              status: false,
              data: null,
              error: getErrorMessage(error),
            };
          }
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};
