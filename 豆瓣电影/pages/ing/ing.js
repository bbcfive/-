var api = require('../../utils/api.js');

Page({

	data:{
    pn: 0,
    list:[],
    showLoading:true,
    showMore:true
	},
  lower: function (e) {
    if(!this.data.showMore) return;
      this.loading(this.data.pn);
      console.log(this.data.pn)
  },
  redirect:function(e){
    var id = e.currentTarget.dataset.id//考虑这一行代码的重要性 
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },
  loading:function(pn){
    api.getList("in_theaters",pn)
      .then(res => {
          console.log(res)
          if(res.subjects.length>0){
            this.setData({
              list: this.data.list.concat(res.subjects),
              showLoading: false,
              pn: pn+1
            }
          )
      }else{
          this.setData({
            showMore: false
          })
      }
    })
  },
	onLoad:function(options){
    this.loading(this.data.pn)
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		