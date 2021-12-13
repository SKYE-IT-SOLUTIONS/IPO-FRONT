import {
  getRequest,
  postRequest,
  authRequest,
  getErrorMessage,
} from "../utils";
import { getAccessToken, refreshAccessToken } from "../auth/tokensAPI";

const REFRESH_URL = "/auth/refreshtoken";

var result = { status: false, error: null };

export const onSubmit = async (data, DATA_URL) => {
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
          result = { status: true, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onSubmit(data);
          } else {
            result = { status: false, error: getErrorMessage(error) };
          }
        }
      } else {
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, error: getErrorMessage(error) };
    });
  return result;
};

export const onUpdate = async (id, data, DATA_URL) => {
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
      if (!error) {
        if (data.status === 201) {
          result = { status: true, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onUpdate(config);
          } else {
            result = { status: false, error: getErrorMessage(error) };
          }
        }
      } else {
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, error: getErrorMessage(error) };
    });
  return result;
};

export const onDelete = async (id, DATA_URL) => {
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
      if (!error) {
        if (data.status === 204) {
          result = { status: true, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onDelete(config);
          } else {
            result = { status: false, error: getErrorMessage(error) };
          }
        }
      } else {
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, error: getErrorMessage(error) };
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
          result = { status: true, data: data.data };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onGetAllAuthenticated(DATA_URL);
          } else {
            result = { status: false, error: getErrorMessage(error) };
          }
        }
      } else {
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, error: getErrorMessage(error) };
    });
  return result;
};

export const onGetAll = async (DATA_URL) => {
  await getRequest(DATA_URL)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true, data: data.data, error: null };
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

export const onGetOne = async (DATA_URL,id) => {
  await getRequest(`${DATA_URL}/${id}`)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true, data: data.data, error: null };
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
