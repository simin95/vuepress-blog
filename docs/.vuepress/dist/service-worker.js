/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "20bcef5666a17dda784ce3d9384d3b25"
  },
  {
    "url": "about/index.html",
    "revision": "997aff4074d05d37db9adc126da5477c"
  },
  {
    "url": "about/q.html",
    "revision": "005b61d3451a793c5a1bcfa3f699cb70"
  },
  {
    "url": "about/w.html",
    "revision": "5d215d222d46044768c5aeae8f6f45b4"
  },
  {
    "url": "assets/css/0.styles.d5f88fb4.css",
    "revision": "cbb158c5d8dd5b0c179d35cf98a8e90f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.73e8a79d.js",
    "revision": "8442c0d4760078e06b1d2cf44bdc5ac1"
  },
  {
    "url": "assets/js/11.d7fd3bc0.js",
    "revision": "545231f9d5037bd647e2b457902e61ee"
  },
  {
    "url": "assets/js/12.f65a9857.js",
    "revision": "cd7772059a9d7cc4af51128e683644dd"
  },
  {
    "url": "assets/js/13.cf885879.js",
    "revision": "7a2d367fa48fe0eba5c28ba9ae3e80d7"
  },
  {
    "url": "assets/js/14.db489c46.js",
    "revision": "2520b3beec77a02df6f325284cbd224a"
  },
  {
    "url": "assets/js/15.209348ad.js",
    "revision": "ff9f5178484d2cad9babb236f12b93df"
  },
  {
    "url": "assets/js/16.be19a435.js",
    "revision": "b9b343f5fd71b395e1ffe9f62c398c88"
  },
  {
    "url": "assets/js/17.ae86c265.js",
    "revision": "e8c523a5712fc148007d923216fa7be2"
  },
  {
    "url": "assets/js/18.0a2dc213.js",
    "revision": "bd0fdfa180563f6d9f4135f300f605d9"
  },
  {
    "url": "assets/js/19.95b27ae4.js",
    "revision": "b4719bdcbb48cf7c8cd71e7f952c8175"
  },
  {
    "url": "assets/js/2.066b3f09.js",
    "revision": "478342995cd70c72cee44d5757c1649c"
  },
  {
    "url": "assets/js/20.a9b1696c.js",
    "revision": "9f6b6b1a6ab0759026c156dd53523cbe"
  },
  {
    "url": "assets/js/21.3a08e916.js",
    "revision": "957ee348ab2b0d9d3f8b19eab0a8afc1"
  },
  {
    "url": "assets/js/22.25715c9c.js",
    "revision": "6a970f414d08e9d435b4d5bde7bb7b3e"
  },
  {
    "url": "assets/js/23.802c7b21.js",
    "revision": "07090238bcbfd8472af6dcabcb4b072a"
  },
  {
    "url": "assets/js/24.d4e89e43.js",
    "revision": "09c6291c3aeae38ae8e0906d47dfb9af"
  },
  {
    "url": "assets/js/25.673d8437.js",
    "revision": "d2473c143cc376bb780487c4036824cf"
  },
  {
    "url": "assets/js/26.f54bdf51.js",
    "revision": "163e4253a5b5f3ac89d4ae5c573d9007"
  },
  {
    "url": "assets/js/27.eab2bd7f.js",
    "revision": "10527deac77cb83fe5520daadb7985e0"
  },
  {
    "url": "assets/js/28.30ede350.js",
    "revision": "32dfe28569840dfc55463a4472f6f3f3"
  },
  {
    "url": "assets/js/29.dc668b3c.js",
    "revision": "920447f89220230e0ab3cb349f1054c8"
  },
  {
    "url": "assets/js/3.4a53c04e.js",
    "revision": "23b21e3292c9069952d7007ff1474928"
  },
  {
    "url": "assets/js/30.a765596f.js",
    "revision": "fd94205208571c1d31d146bfec7504dd"
  },
  {
    "url": "assets/js/31.e8aead16.js",
    "revision": "e456c03769f0bf0284ca4aa99dbc836c"
  },
  {
    "url": "assets/js/32.2ad409bb.js",
    "revision": "95f2d9229ce4b929588f4998a6921f86"
  },
  {
    "url": "assets/js/33.9d821838.js",
    "revision": "3de37fa9ef64688ca8fe6e6a78c66abf"
  },
  {
    "url": "assets/js/34.fb8831ec.js",
    "revision": "532db546f22ba4f4fe2f08a59e431b30"
  },
  {
    "url": "assets/js/35.8e53822f.js",
    "revision": "a9e8263c12b78038725a00f729fceed8"
  },
  {
    "url": "assets/js/36.96ea36ca.js",
    "revision": "83406779a551d316dd312e160669df30"
  },
  {
    "url": "assets/js/37.05c7bb0a.js",
    "revision": "a381d572eb4f26f2998ab87d610681b2"
  },
  {
    "url": "assets/js/38.85108e5b.js",
    "revision": "43c890d01d71b35b1ae0509c2360d4da"
  },
  {
    "url": "assets/js/39.5141d825.js",
    "revision": "4c433e775834de30bdc60d83cd333095"
  },
  {
    "url": "assets/js/4.d1ad7720.js",
    "revision": "859230a022b07a3c057ce5f05748b8c6"
  },
  {
    "url": "assets/js/40.c9ff42ee.js",
    "revision": "3545202bad1e23ab7a34b861fb6bc9a2"
  },
  {
    "url": "assets/js/41.66839da5.js",
    "revision": "9511e6ed1fdd6a2a9fb35c6520c02044"
  },
  {
    "url": "assets/js/42.d41ebe44.js",
    "revision": "3422079641f866d42679de9b9d44bcb4"
  },
  {
    "url": "assets/js/43.30fc99e1.js",
    "revision": "82e1d505801bd0a9c8e4f1640b618ae5"
  },
  {
    "url": "assets/js/44.ae0a95e6.js",
    "revision": "fd5b3efeee117fe70ede7a8aab7c4e52"
  },
  {
    "url": "assets/js/45.f02568f3.js",
    "revision": "0b5c5e47ccecb73793ba5ad1038b6e4c"
  },
  {
    "url": "assets/js/46.1c7e3810.js",
    "revision": "b515851a7ac4295992862c6cb9435426"
  },
  {
    "url": "assets/js/47.ae6b8990.js",
    "revision": "b1194c5731e9f477c02a2f9bc0e240fe"
  },
  {
    "url": "assets/js/48.039d3b3b.js",
    "revision": "52372ce923df2dbd93d1727e99b5e9fd"
  },
  {
    "url": "assets/js/5.1972c0f7.js",
    "revision": "7008ada8e8d82a6a00c5eff897a177d4"
  },
  {
    "url": "assets/js/6.cb5a4427.js",
    "revision": "c67e659f439616999cd9d1ea022fef3c"
  },
  {
    "url": "assets/js/7.caf1037f.js",
    "revision": "b147ba7f0196a3e5eae5fafa92a6d11b"
  },
  {
    "url": "assets/js/8.7aa5ebdd.js",
    "revision": "81756a57305e3a63d16412ad1d8b04d9"
  },
  {
    "url": "assets/js/9.5b37027e.js",
    "revision": "13a68250b80ca104074286e190282715"
  },
  {
    "url": "assets/js/app.e0b2c4ee.js",
    "revision": "49ad1c77f77d6900063998b92c82100c"
  },
  {
    "url": "icons/myBook.png",
    "revision": "0c126b976b0b1467f6967dc006603047"
  },
  {
    "url": "index.html",
    "revision": "b7ddaee77cbd8fd16b69f9caea71d268"
  },
  {
    "url": "knowledge/algorithm/index.html",
    "revision": "fda0081636d358ac73ec29c20f17fc6a"
  },
  {
    "url": "knowledge/algorithm/广度优先遍历.html",
    "revision": "7ce1c18bf33ae8905b72592e08329bdb"
  },
  {
    "url": "knowledge/algorithm/快速排序.html",
    "revision": "b430244a60f0f202784d10a244822062"
  },
  {
    "url": "knowledge/algorithm/深度优先b遍历.html",
    "revision": "dacaad9f40274843cad62e5c30e3c90e"
  },
  {
    "url": "knowledge/htmlcss/index.html",
    "revision": "0c4b8964243d92639ec30b6149f03387"
  },
  {
    "url": "knowledge/htmlcss/使用flex布局.html",
    "revision": "0b9eef3b7d953787e676e4a80b4bebe2"
  },
  {
    "url": "knowledge/index.html",
    "revision": "43db70b9e9536762b407d1e75726ac7d"
  },
  {
    "url": "knowledge/js/index.html",
    "revision": "b779f278501dc95547cc43c66987f96c"
  },
  {
    "url": "knowledge/js/js函数基础_call和apply和bind.html",
    "revision": "75e6eb113e05d427eb9901593dfcea86"
  },
  {
    "url": "knowledge/js/js基础_原型和继承.html",
    "revision": "ff7bb87f1f6aa83324f857841da0c575"
  },
  {
    "url": "knowledge/js/js基础_正确的使用Promise和async.html",
    "revision": "2a42269eb4113ec53411ed8f368a28b9"
  },
  {
    "url": "knowledge/js/js基础_深拷贝.html",
    "revision": "764e79567cc6cc0e84e3b867d049765f"
  },
  {
    "url": "knowledge/js/函数节流和防抖.html",
    "revision": "d9ba448148615735ca0d47288c2ea953"
  },
  {
    "url": "knowledge/js/手写promise_使用class.html",
    "revision": "8838b6236aab10267d44726f05c0618e"
  },
  {
    "url": "knowledge/js/手写promise.html",
    "revision": "691c3da49ec87d82a80bc37778d8ae6d"
  },
  {
    "url": "knowledge/linux/index.html",
    "revision": "6ab596a001a4bbf904e563bdca691ae4"
  },
  {
    "url": "knowledge/linux/linux基本操作.html",
    "revision": "f9f285b10dabadb1608fab38b468d084"
  },
  {
    "url": "knowledge/network/index.html",
    "revision": "c0e68749cebe308f5b629d56cbd56d6a"
  },
  {
    "url": "knowledge/network/懒加载和预加载.html",
    "revision": "3a52c778c5b60835fc88134f88a41cfe"
  },
  {
    "url": "knowledge/network/跨域及其解决方式.html",
    "revision": "fc507d4adf4e43e8e6ac6bedb1ebd197"
  },
  {
    "url": "knowledge/node/index.html",
    "revision": "63f7fd76f6bf686319c0209277eae6d7"
  },
  {
    "url": "knowledge/node/使用express+mongoDB.html",
    "revision": "97e1ff92a386f25a0b24892a848b103b"
  },
  {
    "url": "knowledge/vue/index.html",
    "revision": "e5e6db40781adbcc08893fae6a564c43"
  },
  {
    "url": "knowledge/vue/vue源码理解.html",
    "revision": "0739cfcdbd1d71af9178d7f2f767801a"
  },
  {
    "url": "knowledge/vue/尝试 vue-cli 3.html",
    "revision": "b3d5d70ae64bc7781c01072f8c1d985f"
  },
  {
    "url": "knowledge/vue/手撸一个简易MVVM模型.html",
    "revision": "e99330074bc1213c99f1972e576f7d96"
  },
  {
    "url": "knowledge/vue/用于vue组件间传值的其他黑科技.html",
    "revision": "5c9961f6a0e0cd6ec05a0e5e23d002bc"
  },
  {
    "url": "knowledge/vue/组件化设计方法论.html",
    "revision": "52213654242801373ec600953ab5f0d5"
  },
  {
    "url": "knowledge/webpack/index.html",
    "revision": "bf3877c636033a8d2354252983a30179"
  },
  {
    "url": "knowledge/webpack/webpack打包初探.html",
    "revision": "c07be76be4ab8ec02d6103c165634840"
  },
  {
    "url": "otherTips/cdn是什么.html",
    "revision": "0d0ab36205748d705a979ca512082b08"
  },
  {
    "url": "otherTips/docker是什么.html",
    "revision": "354092e6f0d5272d02e11c8bfd198395"
  },
  {
    "url": "otherTips/index.html",
    "revision": "48c974d20ade5abbefbdc7b9c882d08c"
  },
  {
    "url": "otherTips/markdown的语法总结.html",
    "revision": "482886a1bafd7a99789860b2c2d47ee3"
  },
  {
    "url": "otherTips/RSA加密算法初探.html",
    "revision": "bef3cee1b78c28e972009471fe774881"
  },
  {
    "url": "otherTips/webSocket是什么.html",
    "revision": "efd2b790705797e306a9b57429753ef9"
  },
  {
    "url": "otherTips/操作mongoDB.html",
    "revision": "ed17db90cd7ebb3be335875164abc5fd"
  },
  {
    "url": "otherTips/智能家居设备配网逻辑.html",
    "revision": "8e76280f293fb964cc719a2d4cee74ce"
  },
  {
    "url": "otherTips/组件的设计规范.html",
    "revision": "183d9ca75c4bb38e5f9900ccb5e2f8b6"
  },
  {
    "url": "project/index.html",
    "revision": "dcff904439f1f634557f4661ceab9b6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
