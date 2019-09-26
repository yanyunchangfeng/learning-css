import '../index.scss';
// 模拟React画异步动态导入组件的过程
function a(){
    throw new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('动态导入组件已下载完成')
        },3000)
    })
}
try {
    a();
} catch(err){
    if(Object.prototype.toString.call(err) === '[object Promise]'){
        // 判断异常是promise的代码
        err.then(function(data:any){
             console.log(data,'开始绘画组件')
        })
    }
    console.log(err)
}