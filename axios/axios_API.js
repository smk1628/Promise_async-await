//axios的API介绍
axios.defaults.baseURL = 'http://localhost:3000'    //配置axios请求的默认域名
axios.defaults.timeout = 10000                      //配置超时
axios.get(url,{config})                             //get请求         config为配置对象
axios.post(url,data,{config})                       //post请求        config为配置对象
axios.put(url,data,{config})                        //put请求         config为配置对象
axios.delete(url,{config})                          //delete请求      config为配置对象
axios.request(config)                               //在config配置请求对象参数


//instance 模块化请求 instance是函数
const instance = axios.create({ //指定instance的默认配置
    baseURL:'http://localhost:4000',
    timeout:15000
})
instance({
    url:'/ports'
})
//github搜索axios查看更多API