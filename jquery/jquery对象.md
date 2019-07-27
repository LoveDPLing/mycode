### jQuery对象
1. jQuery对象就是通过$获取到的对象
2. jq对象不能调用原生js操作方法，DOM对象当然也不能调用jq的方法

### jQuery对象转成DOM对象
1. 在jq中调用[index]
2. 在jq中调用get(index)
```
let domObj = $("#div")[0]
let domObj = $("#div").get(0)
```

### DOM对象转成jq对象
DOM对象只需要调用jq的$()方法就可包装成jq对象
```
let domObj = document.getElementById(""div)
let $domObj = $(domObj)
```