// pages/category/index.js
const swiperImage = require('../../data/swiper')
Page({

  /**
   * 页面的初始数据
   */
    data: {
      searchValue: '',
      swiperImage: []
    },
    onSearch() {
      console.log(this.data.searchValue,'----------------6666')
    },
    onChange(e) {
      this.setData({
        searchValue: e.detail,
      });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('------------------33')
        console.log(swiperImage.swiperImage, '--------------------444')
        this.setData({
          swiperImage: swiperImage.swiperImage
        })
        // fetch('../../data/swiper.json').then( async res => {
        //   console.log(res.json())
        // })
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