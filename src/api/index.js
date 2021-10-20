const axios = require("@/utils/axios");
export const getGoodsList = (params) =>
  axios({
    url: "",
    method: "",
    params,
  });

export const fetTopics = (params) =>
  axios({
    url: "/api/v1/topics",
    method: "get",
    params,
  });
