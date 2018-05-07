// pages/home/home.js
var MD5 = require("../../util/md5.js");
var UniCode = require("../../util/unicode.js");

Page({

  data: {
    word: null,
  },

  onLoad: function (options) {
    var that = this;
    var appKey = '20180507000154705';
    var key = '1HdsueVLAdmKWu4i2Vio';
    var salt = (new Date).getTime();
    var query = '接口';
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    var froms = 'auto';
    var to = 'auto';
    var str1 = appKey + query + salt + key;
    var sign = MD5.md5(str1);
    console.log(`加密后字符串:${sign}`);

    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      dataType: 'json',
      method: "get",
      data: {
        q: query,
        appid: appKey,
        salt: salt,
        from: froms,
        to: to,
        sign: sign
      },
      success: function (res) {
        console.log(res.data);
      }
    })

  },


  onReady: function () {

  },

})