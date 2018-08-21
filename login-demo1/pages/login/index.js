// pages/login/index.js
const apis = require("../../requests/apis.js")

Page({

  data: {
    account: '', // 账号
    password: '', // 密码
  },
  // 账号输入框
  inputAccount: function (e) {
    console.log("页面传过来的事件:", e);
    let acccount = e.detail.value;
    this.data.account =acccount;

  },
  inputPassword: function(e) {
    this.data.password = e.detail.value;
  },
  login: function () {
    let account = this.data.account;
    let password = this.data.password;
    apis.login({account, password}, (res)=>{
      console.log(res);
      wx.redirectTo({
        url: '/pages/main/index?info=跳转',
      })


    },(res)=>{
      console.log(res);
    })


  }
  
})