//使用promise
new Promise((resolve,reject)=>{
    //一段耗时的promise操作 
    resolve('success')
}).then(
    (res)=>{console.log(res)}, //成功
    (err)=>{console.log(err)} //失败
)

//promise api

Promise.all()
Promise.then()
Promise.catch()
Promise.race()

//async await语法