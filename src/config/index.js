const env = import.meta.env.MODE || "prod";
const EnvConfig = {
  development: {
    baseApi: "/api",
    mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
  },
  test: {
    baseApi: "//est.future.com/api",
    mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
  },
  prod: {
    baseApi: "//future.com/api",
    mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
  },
};

export default {
  ...EnvConfig[env],
  // mock
  mock: false,
};
