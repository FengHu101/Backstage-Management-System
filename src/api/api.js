/**
 * 整个项目api的统一管理
 */
import request from "./request";

// 请求首页左侧的表格的数据

export default {
  getTableData() {
    return request({
      url: "/home/getTableData",
      method: "get",
      mock: true,
    });
  },
  getCountData() {
    return request({
      url: "/home/getCountData",
      method: "get",
      //mock: true,
    });
  },

  getChartData() {
    return request({
      url: "/home/getChartData",
      method: "get",
      //mock: true,
    });
  },

  getUserData(data) {
    return request({
      url: "/home/getUserData",
      method: "get",
      //mock: true,
      data,
    });
  },

  deleteUser(data) {
    return request({
      url: "/home/deleteUser",
      method: "get",
      //mock: true,
      data,
    });
  },

  addUser(data) {
    return request({
      url: "/home/addUser",
      method: "post",
      //mock: true,
      data,
    });
  },

  editUser(data) {
    return request({
      url: "/home/editUser",
      method: "post",
      //mock: true,
      data,
    });
  },
  getMenu(params) {
    return request({
      url: "/permission/getMenu",
      method: "post",
      data: params,
    });
  },
};