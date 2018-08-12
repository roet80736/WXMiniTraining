const apis = require("../../requests/apis.js")
Page({
  data: {
    account: '', // 输入的账号
    password: '', // 输入的密码
  },
  inputAccount: function (e) {
    this.data.account = e.detail.value;
  },
  inputPassword: function (e) {
    this.data.password = e.detail.value;
  },
  login: function () {
    console.log("点击登录按钮");
    let account = this.data.account;
    let password = this.data.password;
    console.log("输入的账号:", account, "输入的密码:", password);
    if (account == '') {
      wx.showToast({
        title: '请输入账号',
        icon: 'none',
        duration: 1500
      })
      return;
    }
    if (password == '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 1500
      })
      return;
    }
    apis.login({account, password},(data)=>{
      console.log("登陆成功")
      wx.redirectTo({
        url: '/pages/main/index?result=' + data
      })
    },(res)=>{
      console.log("登陆失败:", res)
      wx.redirectTo({
        url: '/pages/main/index?result=' + res
      })
    })

  }
 
})