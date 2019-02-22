---
title: vue源码理解 ———— 持续更新
date: 2019-01-28 13:35:03
tags: 总结
---

第二章
1. $options 存储了 初始化vue实例时传入的选项

2. data的初始化：`this.$options.data` 简写为 `this.data`
   使用 es6 的 proxy 代理了 data属性(函数)，实现方式：`proxy(vm, '_data', key)` 
   即 
   ``` javascript
    export default {
      data() {
        return {
          hello: o
        }
      },
    }

    // 以下方法均能访问到data里的数据：
    this.hello
    this._data.hello
    this.$options.data().hello
   ```


