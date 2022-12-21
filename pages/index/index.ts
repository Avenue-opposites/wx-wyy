import request from "../../utils/request";
Page({
  data:{
    banners:[]
  },
  onLoad() {
    request({
      url:"/banner",
      data:{
        type:2
      }
    })
    .then(data => {
      console.log(data);
      this.setData({banners:(data as any).banners});
    })
    .catch(reason => {
      throw new Error(reason);
    })
  }
});