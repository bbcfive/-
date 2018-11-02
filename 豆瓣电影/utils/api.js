
function fetchApi(type,params) { //不加type会酿成很严重的后果 ..分析下原因
  //原因：如果不加type，只有params，则传参时，第一个参数"in_theaters"会直接覆盖params，导致pn参数传不进来
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/'+type,
      data: params,
      header: {
        'content-type': 'json' 
      },
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
  getList: function(type,pn=0,count=20) {
    return fetchApi(type, {"start": pn*count, "count": count})
      .then(res => res.data)
  },
  getDetail:function(type,id){
    return fetchApi("subject/"+id)
      .then(res=> res.data)
  }
}