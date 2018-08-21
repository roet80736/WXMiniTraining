const config = require("../config.js")
const apiName = require("apiName.js")

function requestData(url, data, successCallback, failCallback, method = "POST") {
  wx.request({
    url: config.apiUrl + url,
    data: data,
    header: {
      'content-type': 'application/json' // 默认值
    },
    method: method,
    success: function(res) {
      console.log("调用成功,接口: ", url, "的返回结果:", res);
      successCallback(res)

    },
    fail: function(res) {
      console.log("调用失败,接口: ", url, "的返回结果:", res);
      failCallback(res);
    }
  })
}

function login(data, successCallback, failCallback) {
  let loginApiName = apiName.login;
  requestData(loginApiName, data, successCallback, failCallback);
}



module.exports = {
  login
}