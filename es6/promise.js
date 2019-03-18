// 学习Promise对象，实现异步编程
// 1特点：1，对象的状态不受外界影响
//       2，一旦状态改变，就不会再变，任何时候都可以得到这个结果
// 2基本用法
// 2.1 创建实例
const promise = new Promise(function(resolve, reject) {
  console.log("创建promise");
  if(true) {
    resolve(value);
  } else {
    reject(error);
  }
});
promise.then(function(value){}, function(error){});

// 2.2 简单例子
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}
// 触发then方法绑定的回调函数
timeout(50).then((value) => {
  console.log(value);
});

// 2.3 Promise新建后就会立即执行
let promise = new Promise(function(resolve, reject) {
  console.log("Promise");
  resolve();
});
promise.then(function() {
  console.log("resolved");
});
console.log("hi");
// Promise hi resolved
// 上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。
// 然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。

// 2.4 异步加载图片的例子
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      reject(new Error("could not load image at " + url));
    };
    image.src = url;
  });
}

// 2.5 实现Ajax的例子
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if(this.readState !== 4) {
        return;
      }
      if(this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
    });
    
    return promise;
  };
  getJSON("/posts.json").then(function(json){
    console.log("Contents: " + json);
  }, function(error) {
    console.log("出错了", error);
  });
