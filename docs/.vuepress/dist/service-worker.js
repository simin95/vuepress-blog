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
    "revision": "d1f3ad546f33b209b54f5fb2eb4d5722"
  },
  {
    "url": "about/index.html",
    "revision": "dee168391bddfe72ccb88201ff2c3eb7"
  },
  {
    "url": "about/q.html",
    "revision": "185920b1ea09e8fee66ded060992c717"
  },
  {
    "url": "about/w.html",
    "revision": "82222faaaa2d2e4a69bf20ace34251ac"
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
    "url": "assets/js/10.49ed8fde.js",
    "revision": "699fa74b235691bf91d408dfb98d747a"
  },
  {
    "url": "assets/js/11.6c4b6ee1.js",
    "revision": "0d5a13facccc215a693aadd253e87633"
  },
  {
    "url": "assets/js/12.8b9defa9.js",
    "revision": "2030ec6652bc2ad5676ab31e068fb148"
  },
  {
    "url": "assets/js/13.a0e9790c.js",
    "revision": "675609ed7f5087196793f93119a3407f"
  },
  {
    "url": "assets/js/14.80651635.js",
    "revision": "8362dd55375dcab64a90f78a5a1a2826"
  },
  {
    "url": "assets/js/15.22e9c2ca.js",
    "revision": "62303842bd1b7ccc5bf63330c6478ad6"
  },
  {
    "url": "assets/js/16.0a8abc2f.js",
    "revision": "96defc5a60c26101bf3df488da03261f"
  },
  {
    "url": "assets/js/17.8524630f.js",
    "revision": "b0794ea58f49c3ff11b87e1b309f98de"
  },
  {
    "url": "assets/js/18.7f4949dd.js",
    "revision": "0a223beaa6cfb88bd2a1ce1d6e4ab82b"
  },
  {
    "url": "assets/js/19.03d74887.js",
    "revision": "c2a3831a9a2433e276ae0cd04da1e2ab"
  },
  {
    "url": "assets/js/2.a6b43ca8.js",
    "revision": "f982299e3462916c2d66bb0625cb5ac2"
  },
  {
    "url": "assets/js/20.fc8b51ff.js",
    "revision": "46de96410acf8651a7164e4a7bb73d54"
  },
  {
    "url": "assets/js/21.e6544af0.js",
    "revision": "ed786963e4013a6c37c69ee971ae299e"
  },
  {
    "url": "assets/js/22.11871ae4.js",
    "revision": "aa0cd14f656ad58acdaa62606a6ff87b"
  },
  {
    "url": "assets/js/23.dda8fc68.js",
    "revision": "34ab4f46e02a16b80b51c03892c8a235"
  },
  {
    "url": "assets/js/24.76b1c55d.js",
    "revision": "fda28513a5a71efa1af321f69b92fa91"
  },
  {
    "url": "assets/js/25.76f2fb03.js",
    "revision": "0054c9f7fecdb3f0f2769f1c30233ee7"
  },
  {
    "url": "assets/js/26.94c56c7f.js",
    "revision": "abbe166365e1e29dd37dab2d6d54a7e2"
  },
  {
    "url": "assets/js/27.5e9b89eb.js",
    "revision": "ed376329ff0c9af6513fe473ecb2705e"
  },
  {
    "url": "assets/js/28.ed6396ae.js",
    "revision": "5391690d18542b5699496e68c9c23b68"
  },
  {
    "url": "assets/js/29.66ad06f1.js",
    "revision": "67c17e440ea09fc8813b15fa892ff51d"
  },
  {
    "url": "assets/js/3.4a53c04e.js",
    "revision": "23b21e3292c9069952d7007ff1474928"
  },
  {
    "url": "assets/js/30.b60ec18d.js",
    "revision": "c8e2b00ff2fbd0966b3708f5e260686f"
  },
  {
    "url": "assets/js/31.a1171554.js",
    "revision": "b01aca36c23eacb685c4a5827b496dd5"
  },
  {
    "url": "assets/js/32.e8c03cad.js",
    "revision": "6680b6c3d7da44f51a9333aaaeec5f26"
  },
  {
    "url": "assets/js/33.92eebbce.js",
    "revision": "bd99cae53363159ed307724dfeb4258d"
  },
  {
    "url": "assets/js/34.bd9a4a6a.js",
    "revision": "c6c908b767be565407ecfe62d3b7c095"
  },
  {
    "url": "assets/js/35.31887f27.js",
    "revision": "8168d10f71e4755a359f53acc92ecb5a"
  },
  {
    "url": "assets/js/36.ea65161a.js",
    "revision": "ac940c2f253fe045ee4ed633863ab59d"
  },
  {
    "url": "assets/js/37.c7808e37.js",
    "revision": "5da8e9ab41f12e4ed7087a14571ae206"
  },
  {
    "url": "assets/js/38.4656fa68.js",
    "revision": "2892d5fe0e5155c90bb549476147519e"
  },
  {
    "url": "assets/js/39.414cc204.js",
    "revision": "8707958471851849bbfd22e3926ac338"
  },
  {
    "url": "assets/js/4.ee17f93e.js",
    "revision": "f55ba1c716cd6352028d95b48f6f6669"
  },
  {
    "url": "assets/js/40.d2f15f7a.js",
    "revision": "ef16b03dabd5ccee9a0b53d836146140"
  },
  {
    "url": "assets/js/5.bf1abe88.js",
    "revision": "a1b099db1cdd0204bad637442a6ed7b5"
  },
  {
    "url": "assets/js/6.fcd65c13.js",
    "revision": "1dbcdfa0f63f00245adcde05907602cc"
  },
  {
    "url": "assets/js/7.41f015ae.js",
    "revision": "13c238ea31175cccb5d859c6e8c0f481"
  },
  {
    "url": "assets/js/8.8f1e202e.js",
    "revision": "9043c39dde8bfa1770e3613b110941c9"
  },
  {
    "url": "assets/js/9.eb563a27.js",
    "revision": "8a5bb8be488f1dfa0a5cf952ff6c16cb"
  },
  {
    "url": "assets/js/app.37b3d329.js",
    "revision": "71a553c9c8bffc8c291acdd6dba8fd22"
  },
  {
    "url": "icons/myBook.png",
    "revision": "0c126b976b0b1467f6967dc006603047"
  },
  {
    "url": "index.html",
    "revision": "da6490391d75f6474cab812f55232267"
  },
  {
    "url": "knowledge/algorithm/index.html",
    "revision": "3d1eb84820d196b8f5275b287d9d3aa1"
  },
  {
    "url": "knowledge/algorithm/快速排序.html",
    "revision": "d91fdbd34d671071bb8ecfb5060fad19"
  },
  {
    "url": "knowledge/html&css/index.html",
    "revision": "06c8021f2df4399c9ca01fb9574a47d3"
  },
  {
    "url": "knowledge/html&css/使用flex布局.html",
    "revision": "d608a712fd07a2185229fd5b2ede652b"
  },
  {
    "url": "knowledge/index.html",
    "revision": "d6e7aa65720f85f6ada31f08e3803d2d"
  },
  {
    "url": "knowledge/js/index.html",
    "revision": "0902331a807151c16f344fd27ef6dc11"
  },
  {
    "url": "knowledge/js/js函数基础_call和apply和bind.html",
    "revision": "fe014ab0f71fb6c19266c9f384dcc60e"
  },
  {
    "url": "knowledge/js/js基础_原型和继承.html",
    "revision": "7ce05e2d56a9a0c84565703782d78e5b"
  },
  {
    "url": "knowledge/js/js基础_正确的使用Promise和async.html",
    "revision": "cde2e791ea3367eece49c5aa25a0adab"
  },
  {
    "url": "knowledge/js/js基础_深拷贝.html",
    "revision": "5f53af7325d6f50ad2958d30c6067774"
  },
  {
    "url": "knowledge/js/函数节流和防抖.html",
    "revision": "949ab9920f47796127076f007214bea3"
  },
  {
    "url": "knowledge/js/手写promise_使用class.html",
    "revision": "489711ce07d9566d87f8a1bdfe13d538"
  },
  {
    "url": "knowledge/js/手写promise.html",
    "revision": "470c6d3355c4018d36ed5adb0660df9b"
  },
  {
    "url": "knowledge/linux/index.html",
    "revision": "88bb54126150fdfcc682340dce7bf3fa"
  },
  {
    "url": "knowledge/linux/linux基本操作.html",
    "revision": "cda14d58f4c4d08f1b3880f74a08d9bf"
  },
  {
    "url": "knowledge/node/index.html",
    "revision": "0e3a2919c0a5199c941b313d167a4998"
  },
  {
    "url": "knowledge/node/使用express+mongoDB.html",
    "revision": "30df6ae3eab38035520e6cd66292c19c"
  },
  {
    "url": "knowledge/vue/index.html",
    "revision": "56d6f8a0d329438623c1946a4f4bd203"
  },
  {
    "url": "knowledge/vue/尝试 vue-cli 3.html",
    "revision": "dd53d5601976cafd9fb3184cd72efab5"
  },
  {
    "url": "knowledge/vue/手撸一个简易MVVM模型.html",
    "revision": "90e8d68626b6a3d577ce807b07b19dda"
  },
  {
    "url": "knowledge/vue/用于vue组件间传值的其他黑科技.html",
    "revision": "d334b5b7df03b1a5923588da2be5e46a"
  },
  {
    "url": "knowledge/vue/组件化设计方法论.html",
    "revision": "8784d041a6221e5e780803e4b749cb06"
  },
  {
    "url": "knowledge/webpack/index.html",
    "revision": "c2a6a04d715604b19d06712316d5e006"
  },
  {
    "url": "knowledge/webpack/webpack打包初探.html",
    "revision": "e0faeaf7cded7ed0581a665015078390"
  },
  {
    "url": "otherTips/cdn是什么.html",
    "revision": "f26ed84a6674fd3ddf25f6f02ef56b9b"
  },
  {
    "url": "otherTips/docker是什么.html",
    "revision": "0a028e48428ad99c8f0c9ce3a52a6273"
  },
  {
    "url": "otherTips/index.html",
    "revision": "3580e1657dc38fa499117b94fd941b15"
  },
  {
    "url": "otherTips/markdown的语法总结.html",
    "revision": "9e750282c45705b7845c88a03cda7520"
  },
  {
    "url": "otherTips/RSA加密算法初探.html",
    "revision": "06652fc81f1f413c83acf6e8585c8f6c"
  },
  {
    "url": "otherTips/智能家居设备配网逻辑.html",
    "revision": "86ca77197004f9b96c5c6fcaadea2265"
  },
  {
    "url": "otherTips/组件的设计规范.html",
    "revision": "b596f59ad3755a8a0f65c92b4741b9b1"
  },
  {
    "url": "project/index.html",
    "revision": "8d5df295f0cc0e318811adb9ab61c38a"
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
