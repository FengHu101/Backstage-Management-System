<script setup>
import { ref } from "vue";
import axios from "axios";
const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href;
};

const tableData = ref([
  {
    name: "Java",
    todayBuy: 100,
    monthBuy: 200,
    totalBuy: 300,
  },
  {
    name: "Python",
    todayBuy: 100,
    monthBuy: 200,
    totalBuy: 300,
  },
]);

const tableLabel = ref({
  name: "课程",
  todayBuy: "今日购买",
  monthBuy: "本月购买",
  totalBuy: "总购买",
});

axios({
  url: "/api/home/getTableData",
  method: "get",
}).then((res) => {
  console.log(res);
  //要学会制造假数据, 把交互的请求流程，根据接口文档泡桐，还要制造出数据
  //有没有一种工具 拦截住请求 把我们制造的数据 根据接口文档来的 mock.js

  if (res.data.code === 200) {
    console.log(res.data.data.tableData);
    tableData.value = res.data.data.tableData;
  }
});
</script>

<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="getImageUrl('user')" class="user/" />
          <div class="user-infor">
            <p class="user-info-admin">admin</p>
            <p class="user-info-p">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2024-06-30</span></p>
          <p>上次登录地点:<span>北京</span></p>
        </div>
      </el-card>

      <el-card shadow="hover" class="user-table">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<style
  scoped
  lang="less
"
>
.home {
  height:100%;
  overflow:hidden;
  .user{
    display:flex;
    align-items:center;
    border-bottom:1px solid #ccc;
    margin-bottom:20px;
    img{
      width:150px;
      height:150px;
      border-radius:50%;
      margin-right:40px;
    }
    .user-infor{
      p{
      line-height:40px;
      }

      .user-info-p{
        color:#999;
      }
      .user-info-admin{
        font-size:35px;
      }
    }
  }

  .login-info {
    p{
      line-height:30px;
      font-size:14px;
      color:#999;
      span{
        color:#666;
        margin-left:60px;
      }
    }
  }

  .user-table {
    margin-top:15px;
  }
}
</style>
