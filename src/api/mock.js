import Mock from "mockjs";
import homeApi from "./mockData/home";

// 1 拦截路径 2 方法 3 制造出的价数据
import userApi from "./mockData/user";
import menuApi from "./mockData/permisson";
Mock.mock(/api\/home\/getTableData/, "get", homeApi.getTableData);
Mock.mock(/api\/home\/getCountData/, "get", homeApi.getCountData);
Mock.mock(/api\/home\/getChartData/, "get", homeApi.getChartData);
Mock.mock(/api\/home\/getUserData/, "get", userApi.getUserList);
Mock.mock(/api\/home\/deleteUser/, "get", userApi.deleteUser);
Mock.mock(/api\/home\/addUser/, "post", userApi.createUser);
Mock.mock(/api\/home\/editUser/, "post", userApi.updateUser);
Mock.mock(/api\/permission\/getMenu/, "post", menuApi.getMenu);
