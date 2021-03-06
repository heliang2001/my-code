// pages/center/center.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../../images/head.png',
    nickName:'<-微信登录',
    city:''
  },
  // 如果未登录就跳转到登录界面
  login(){
    if (app.is_login()) {
      console.log("用户已登录");
      
    } else {
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
 // 调取登录信息 
 loadUserInfo(){
  wx.getSetting({
    success: (res) => {
      if (res.authSetting["scope.userInfo"]) {
        wx.getUserInfo({
          success: (res) => {
            app.globalData.userInfo=res.userInfo
            console.log(res.userInfo)
            this.setData({
              avatarUrl:res.userInfo.avatarUrl,
              nickName:res.userInfo.nickName,
              city:res.userInfo.city
            })
          },
        })
      }
    },
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.loadUserInfo()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})