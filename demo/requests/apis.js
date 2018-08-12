const apiName = require("../requests/apiName.js")
const config = require("../config.js")

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
      successCallback(res.data)
      
    },
    fail: function(res) {
      console.log("调用失败,接口: ", url, "的返回结果:", res);
      failCallback(res);
    }
  })
}
function login(data, success, fail) {
  let url = apiName.login;
  requestData(url, data, success, fail);
}

module.exports = {
  login
}