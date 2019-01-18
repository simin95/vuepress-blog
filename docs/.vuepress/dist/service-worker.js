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
    "revision": "46fce60fa512a3c585f9660747d29277"
  },
  {
    "url": "about/index.html",
    "revision": "da3a4c8824d9046cd92c428540fb9194"
  },
  {
    "url": "about/q.html",
    "revision": "755892c0918fbad84fa28a12fed06ed4"
  },
  {
    "url": "about/w.html",
    "revision": "f64fdef387424f9b5d0a7a2c0a982453"
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
    "url": "assets/js/12.0705f29c.js",
    "revision": "1a1b3991cd44cb1dad3a47cd3191413b"
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
    "url": "assets/js/app.7810e517.js",
    "revision": "4e723800cfbaf58c10b66afca501f4d6"
  },
  {
    "url": "icons/myBook.png",
    "revision": "0c126b976b0b1467f6967dc006603047"
  },
  {
    "url": "index.html",
    "revision": "2057666bbd682b87413d41cef2bae464"
  },
  {
    "url": "knowledge/algorithm/index.html",
    "revision": "1be2d992d4b6abd6e8ae6e0fe4ecb399"
  },
  {
    "url": "knowledge/algorithm/快速排序.html",
    "revision": "edcf6304fe305a89f04ebe4c2192db37"
  },
  {
    "url": "knowledge/html&css/index.html",
    "revision": "64113296d217158083f7ac49b225e485"
  },
  {
    "url": "knowledge/html&css/使用flex布局.html",
    "revision": "8eca2ca7b49f3a7f2dc684e775d56d57"
  },
  {
    "url": "knowledge/index.html",
    "revision": "8501f07bd5c7028fc1e33c14b2a46e20"
  },
  {
    "url": "knowledge/js/index.html",
    "revision": "cba19ba5afc2b09de8538ce7ccf657ab"
  },
  {
    "url": "knowledge/js/js函数基础_call和apply和bind.html",
    "revision": "a96585367f23cfce277b1c51c84cdebf"
  },
  {
    "url": "knowledge/js/js基础_原型和继承.html",
    "revision": "c10a088da64c2e987a7fead78e32346a"
  },
  {
    "url": "knowledge/js/js基础_正确的使用Promise和async.html",
    "revision": "edf683c99d5e3d52ada9fddfe18a6d6e"
  },
  {
    "url": "knowledge/js/js基础_深拷贝.html",
    "revision": "74fdd84eecbab870b5b24e8c02671882"
  },
  {
    "url": "knowledge/js/函数节流和防抖.html",
    "revision": "00e2409693b8df103ce23bf075f5405e"
  },
  {
    "url": "knowledge/js/手写promise_使用class.html",
    "revision": "b6a51c8b86e595624ace9d9fccfca6b4"
  },
  {
    "url": "knowledge/js/手写promise.html",
    "revision": "7492b7c9aa74553e4d77ba36a4bdf75f"
  },
  {
    "url": "knowledge/linux/index.html",
    "revision": "16ac7b597fb4e0e912a8b8dc58ec3de5"
  },
  {
    "url": "knowledge/linux/linux基本操作.html",
    "revision": "14e5057e00d4986bb87c172a6d6b3050"
  },
  {
    "url": "knowledge/node/index.html",
    "revision": "bf8ed387e230edc44aa9d173e6243abe"
  },
  {
    "url": "knowledge/node/使用express+mongoDB.html",
    "revision": "1a82246566bb9c9442b0044ca4db89f5"
  },
  {
    "url": "knowledge/vue/index.html",
    "revision": "9870b81ae9a40cc1c298535a5dcbd99d"
  },
  {
    "url": "knowledge/vue/尝试 vue-cli 3.html",
    "revision": "e096e7aae3b97c540f65084949cd5a7b"
  },
  {
    "url": "knowledge/vue/手撸一个简易MVVM模型.html",
    "revision": "9290d7d873b32ac9048d21a6cd70a7b9"
  },
  {
    "url": "knowledge/vue/用于vue组件间传值的其他黑科技.html",
    "revision": "0b848924341c43aceb3fee9a962548cf"
  },
  {
    "url": "knowledge/vue/组件化设计方法论.html",
    "revision": "15a8487057d1b06e9275cb9d027035c9"
  },
  {
    "url": "knowledge/webpack/index.html",
    "revision": "f63d64269d63cb4748c6b2846b66b246"
  },
  {
    "url": "knowledge/webpack/webpack打包初探.html",
    "revision": "b53a5515dc2eb9be2fe6a02ab5760680"
  },
  {
    "url": "otherTips/cdn是什么.html",
    "revision": "52e58632c4155014a77558297a8f078b"
  },
  {
    "url": "otherTips/docker是什么.html",
    "revision": "20f43f6185df06e1ee36c7cc721c8772"
  },
  {
    "url": "otherTips/index.html",
    "revision": "981121f8a9603e478685d11746105f9c"
  },
  {
    "url": "otherTips/markdown的语法总结.html",
    "revision": "da749f0938fd7e7be3bf8cca39dcffb2"
  },
  {
    "url": "otherTips/RSA加密算法初探.html",
    "revision": "361971f3736a79479fc964aea6f96a67"
  },
  {
    "url": "otherTips/智能家居设备配网逻辑.html",
    "revision": "bf72f8fcb6c6af90c63d75f2629cfb8a"
  },
  {
    "url": "otherTips/组件的设计规范.html",
    "revision": "ce0867d2f87d67c8cebba4f934721b82"
  },
  {
    "url": "project/index.html",
    "revision": "5ecf7f02d6c84adf1c2b41fc585a46be"
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
