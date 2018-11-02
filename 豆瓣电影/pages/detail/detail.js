var api = require('../../utils/api.js');

// pages/detail/detail.js
Page({
  data: {
    img:'',
    name:'',
    year:'',
    points:'',
    directors:[],
    casts:[],
    summary:""
  },

  onLoad: function (options) {
    var id = options.id
    api.getDetail("subject",id)
      .then(res=>{
        console.log(res)
        this.setData({
          img: res.images.large ,
          name: res.original_title,
          year:res.year,
          points:res.rating.average,
          directors:res.directors,
          casts:res.casts,
          summary: res.summary
      })
  })
  },
  onReady: function () {
  
  },

  onShow: function () {
  
  },

  onHide: function () {
  
  },

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