type MethodType = "GET" | "POST" | "DELETE" | "OPTIONS" | "HEAD" | "PUT" | "TRACE" | "CONNECT";
interface RequestOptions {
  url:string;
  data:{type:number},
  baseUrl?:string,
  method?:MethodType;
};

//异步请求
async function request(options:RequestOptions) {
  const {url:queryUrl,baseUrl = "http://localhost:3000",data,method = "GET"} = options;
  const url = baseUrl + queryUrl;
  return new Promise((resolve,reject) => {
    wx.request({
      url,
      data,
      method,
      success(response) {
        resolve(response.data);
      },
      fail(error) {
        reject(error.errMsg)
      }
    });
  });
}

export default request;