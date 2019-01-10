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
    "revision": "ec9393f12c1fb298cff9b70eca674e30"
  },
  {
    "url": "about/index.html",
    "revision": "d2ed6a31a782673f3faa0fafdbb5d858"
  },
  {
    "url": "about/q.html",
    "revision": "cf8fad80fcf1423a652b679929908f61"
  },
  {
    "url": "about/w.html",
    "revision": "12e6ea3ae1552868eb9e8d83b46a9f4d"
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
    "url": "assets/js/10.19551775.js",
    "revision": "fc3933db33bc5647e275bda9851fea29"
  },
  {
    "url": "assets/js/11.d7f03251.js",
    "revision": "32a3deaee5513f260486251da6372e34"
  },
  {
    "url": "assets/js/12.447a971f.js",
    "revision": "4112d1e57610d350a6c48b7e5ce7df41"
  },
  {
    "url": "assets/js/13.95fef4bd.js",
    "revision": "c49c9d0958177fded0ba293cf1e03137"
  },
  {
    "url": "assets/js/14.7222c56b.js",
    "revision": "95ecc477b7dd3359fb09da6235703679"
  },
  {
    "url": "assets/js/15.bb7aeede.js",
    "revision": "7803faf68dad055dad58ed571e383c69"
  },
  {
    "url": "assets/js/16.6a67b324.js",
    "revision": "3580a20715d58f87e3c453407df7c139"
  },
  {
    "url": "assets/js/17.4713bceb.js",
    "revision": "0e208e1136ebd0dfc29736fae7b43630"
  },
  {
    "url": "assets/js/18.bd6faa6a.js",
    "revision": "2f765b6c1aa4a2ea15c9966ef5aa6744"
  },
  {
    "url": "assets/js/19.1fcccad6.js",
    "revision": "1e92df0fce80cb03a6f6c6256103967e"
  },
  {
    "url": "assets/js/2.8d30b706.js",
    "revision": "932b8f151dd0efd8f1d227236baeee5b"
  },
  {
    "url": "assets/js/20.98f7a31d.js",
    "revision": "ada7e7e74773e9d8e12e2f18c150bbed"
  },
  {
    "url": "assets/js/21.4132828d.js",
    "revision": "fff612580bffb02a2b133b0040a8c0bb"
  },
  {
    "url": "assets/js/22.84aa9a89.js",
    "revision": "07f9cdea0ecdf319cdb434f2fc17ed59"
  },
  {
    "url": "assets/js/23.9a0a6fea.js",
    "revision": "0e29de96d02100426a9fe261f8e576ee"
  },
  {
    "url": "assets/js/24.e3f86cc2.js",
    "revision": "dda8de8ef4961e973c1772094263052f"
  },
  {
    "url": "assets/js/25.0dbadcc5.js",
    "revision": "d0cf0e5ec58ad2b22d6d43c634994578"
  },
  {
    "url": "assets/js/26.34fbb8c0.js",
    "revision": "efaadea185381e91080abc6da744b819"
  },
  {
    "url": "assets/js/27.7d3628a3.js",
    "revision": "18d3bb654ac7fbc8f83c1f282aebd50e"
  },
  {
    "url": "assets/js/28.3626f296.js",
    "revision": "07b7ca6851916ddcfcda2f5aa13ffa40"
  },
  {
    "url": "assets/js/29.e12c7a9b.js",
    "revision": "17eddc4284ee22c4a68684c476976d17"
  },
  {
    "url": "assets/js/3.4a53c04e.js",
    "revision": "23b21e3292c9069952d7007ff1474928"
  },
  {
    "url": "assets/js/4.f530c4b0.js",
    "revision": "e75b1eacda5f4e946a50436a229af1c8"
  },
  {
    "url": "assets/js/5.736af697.js",
    "revision": "549d087fccb608a50f5bf9964fb3bbec"
  },
  {
    "url": "assets/js/6.048ddfa4.js",
    "revision": "048724cc76fcd220d87bca66551c5dcb"
  },
  {
    "url": "assets/js/7.01810dc8.js",
    "revision": "6ffac8292a196ddc6a3f76dbddf0537e"
  },
  {
    "url": "assets/js/8.692a3b7c.js",
    "revision": "c8e2b04eeebcd24e818ee56871b2625c"
  },
  {
    "url": "assets/js/9.6c85039b.js",
    "revision": "c4960961031c2364f943ce8703d0263d"
  },
  {
    "url": "assets/js/app.88a432db.js",
    "revision": "aa6ea9c9efc2df3e04a57c86e5e9393c"
  },
  {
    "url": "icons/myBook.png",
    "revision": "0c126b976b0b1467f6967dc006603047"
  },
  {
    "url": "index.html",
    "revision": "06f0c370ad35a103eb0def4c065e3a35"
  },
  {
    "url": "knowledge/html&css/index.html",
    "revision": "2e15b23f8a6e8e29b66ce3d083b53f7a"
  },
  {
    "url": "knowledge/index.html",
    "revision": "e4f5df0bfaf1c609ad9e9d5b68eb9d14"
  },
  {
    "url": "knowledge/js/index.html",
    "revision": "10efba061638ac956edcdc5c1f4a1832"
  },
  {
    "url": "knowledge/js/js函数基础_call和apply和bind.html",
    "revision": "3ef4561c32e7fda5469bbd7f8e71b515"
  },
  {
    "url": "knowledge/js/js基础_原型和继承.html",
    "revision": "15a1e2bac7835692a9e77caab58dd5a3"
  },
  {
    "url": "knowledge/js/js基础_正确的使用Promise和async.html",
    "revision": "24b9dc37cd9da86ea79f7be3ede0a612"
  },
  {
    "url": "knowledge/js/js基础_深拷贝.html",
    "revision": "0f13526cb9c2663635dbb273ae93de99"
  },
  {
    "url": "knowledge/js/手写promise_使用class.html",
    "revision": "96d961e20f6310652bfdcd51e716f258"
  },
  {
    "url": "knowledge/js/手写promise.html",
    "revision": "ad604d61c30ffdc10af483b1b9f5c167"
  },
  {
    "url": "knowledge/linux/index.html",
    "revision": "5a8c67bb63e1181d03e338a208ad1ec6"
  },
  {
    "url": "knowledge/linux/linux基本操作.html",
    "revision": "903ebda3b00578ed19af9660e1e7ef9a"
  },
  {
    "url": "knowledge/node/index.html",
    "revision": "b713923062c2424b2715fc48f3529f94"
  },
  {
    "url": "knowledge/vue/index.html",
    "revision": "2c1af23a4d079dfb0c4b40f82a59e1e0"
  },
  {
    "url": "knowledge/vue/尝试 vue-cli 3.html",
    "revision": "f652b6937bfa5a155c62526ab44cd730"
  },
  {
    "url": "knowledge/webpack/index.html",
    "revision": "e33e9d1e5fa885df23ce082e6488930c"
  },
  {
    "url": "knowledge/webpack/webpack打包初探.html",
    "revision": "51d503e677f0ae9597a2228aabbf5419"
  },
  {
    "url": "otherTips/index.html",
    "revision": "b4feceaff3299f2af5fc3210e4c831f9"
  },
  {
    "url": "otherTips/markdown的语法总结.html",
    "revision": "0fbe9f777c99d5de31e262f4a9b06ed9"
  },
  {
    "url": "otherTips/RSA加密算法初探.html",
    "revision": "bc763b93031c72ba6427b7407db20d43"
  },
  {
    "url": "otherTips/组件的设计规范.html",
    "revision": "2bdeffcf091518dc03239efeb8539c38"
  },
  {
    "url": "project/index.html",
    "revision": "20e17e6e67d9cdf4df5ba5127266bacb"
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
