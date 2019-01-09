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
    "revision": "32a85055e35ad0f451fbddbe3831e94c"
  },
  {
    "url": "about/index.html",
    "revision": "f15cb016351a0255219b460ddc5b9f4b"
  },
  {
    "url": "about/q.html",
    "revision": "31c23d0322088bdd5fa6a9b03f0f332c"
  },
  {
    "url": "about/w.html",
    "revision": "50887c29ec78a95a63ddd24db4aa425f"
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
    "url": "assets/js/10.3c66b935.js",
    "revision": "58ea2b0b1c85124bdd389d0ab1b6be0d"
  },
  {
    "url": "assets/js/11.85a777c4.js",
    "revision": "adc12baffaecf45eaab66fff841c6246"
  },
  {
    "url": "assets/js/12.9dcb4ecf.js",
    "revision": "8635074e61f1cf11e6478171f869ad22"
  },
  {
    "url": "assets/js/13.95fef4bd.js",
    "revision": "c49c9d0958177fded0ba293cf1e03137"
  },
  {
    "url": "assets/js/14.8df88b73.js",
    "revision": "e7fa64b33df0addf01cada85d0959f13"
  },
  {
    "url": "assets/js/15.34665ef8.js",
    "revision": "e8f1fc633bb1fde98cb34443eae04e0a"
  },
  {
    "url": "assets/js/16.000b0f3c.js",
    "revision": "f01841a6ae3f2acd45cac5b4deef9e94"
  },
  {
    "url": "assets/js/17.2c13cfbc.js",
    "revision": "a2128fa868e79ee67b5ac9a9237f0e59"
  },
  {
    "url": "assets/js/18.37541b23.js",
    "revision": "9dc87eb5d42c05494122eb2792535487"
  },
  {
    "url": "assets/js/19.16d4a585.js",
    "revision": "cd332e9b0ac08489c305ca6df3c66263"
  },
  {
    "url": "assets/js/2.b5eed2c0.js",
    "revision": "78fdac3bf5f69f941b5bb770420a14e5"
  },
  {
    "url": "assets/js/20.64610df3.js",
    "revision": "9da4dc075ecb864e7eaa2074825fd9b5"
  },
  {
    "url": "assets/js/21.1d56dda5.js",
    "revision": "a0c5e822ce988df4a1687bf36d9b441a"
  },
  {
    "url": "assets/js/22.3142744d.js",
    "revision": "4050bedbdc19c61adb3fdc0749f376d2"
  },
  {
    "url": "assets/js/23.b61b892b.js",
    "revision": "0344828f12c6552ebde67e164168dbe1"
  },
  {
    "url": "assets/js/24.0dd7f4d1.js",
    "revision": "d6c771c2947d365a93f116c5af127704"
  },
  {
    "url": "assets/js/25.5fd325f3.js",
    "revision": "5297a552942acdf72de070755a44bc4f"
  },
  {
    "url": "assets/js/26.220e010c.js",
    "revision": "520b472115eb1518ed266f9bb20cf2d2"
  },
  {
    "url": "assets/js/27.e12e736c.js",
    "revision": "65b03270a9b80b4c018b627b3e8e9f17"
  },
  {
    "url": "assets/js/28.ab104a43.js",
    "revision": "0dab60652482116570254ef558ce8628"
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
    "url": "assets/js/5.c2ec794c.js",
    "revision": "242c6330fa672bdfc51491307eaab1ec"
  },
  {
    "url": "assets/js/6.6516bf19.js",
    "revision": "8004d0ca7be806184c5bd8f164fe55f9"
  },
  {
    "url": "assets/js/7.942a0eb1.js",
    "revision": "b75843c0c046d3f4ef54c13faa64aa0b"
  },
  {
    "url": "assets/js/8.5c62ad48.js",
    "revision": "e49be2c2af0d96cc91374f96aa717da0"
  },
  {
    "url": "assets/js/9.c67eca36.js",
    "revision": "41ae4817ddd1a966acb8f1ca5107e0b0"
  },
  {
    "url": "assets/js/app.9d810a9e.js",
    "revision": "944311e7b115bcd2da8c259550e2f99c"
  },
  {
    "url": "icons/myBook.png",
    "revision": "0c126b976b0b1467f6967dc006603047"
  },
  {
    "url": "index.html",
    "revision": "572e0d649ad5f677a1c442544dbc0f0c"
  },
  {
    "url": "knowledge/html&css/index.html",
    "revision": "7278d00d3920ea4a73bbb8d0a4b3a70a"
  },
  {
    "url": "knowledge/index.html",
    "revision": "44946e351f2bcb62bf0a6699a0d29f7e"
  },
  {
    "url": "knowledge/js/index.html",
    "revision": "0bdcc3cebfd78f78c3da5bb9e8e09f38"
  },
  {
    "url": "knowledge/js/js函数基础_call和apply和bind.html",
    "revision": "9f75daa9ce0da3bfe1eb34886994d357"
  },
  {
    "url": "knowledge/js/js基础_原型和继承.html",
    "revision": "960c92f9064c41f4cb7c83cf7e7ab553"
  },
  {
    "url": "knowledge/js/js基础_正确的使用Promise和async.html",
    "revision": "672c3c6235543051a831e47dbf296033"
  },
  {
    "url": "knowledge/js/js基础_深拷贝.html",
    "revision": "576a7de4ee46d5b5d09d4793e218c7f3"
  },
  {
    "url": "knowledge/js/手写promise.html",
    "revision": "1ec29338175a57979de58516bec07fa2"
  },
  {
    "url": "knowledge/linux/index.html",
    "revision": "28d10152f88aaaeb483e79d05c7ceab2"
  },
  {
    "url": "knowledge/linux/linux基本操作.html",
    "revision": "8540e43ec9e00e9f1a9ad2adaf8c9696"
  },
  {
    "url": "knowledge/node/index.html",
    "revision": "b365d6a3df835cb4585d78ad4f7e5fab"
  },
  {
    "url": "knowledge/vue/index.html",
    "revision": "aa95967bdf98c47e1ffc77893269a98b"
  },
  {
    "url": "knowledge/vue/尝试 vue-cli 3.html",
    "revision": "d6b5967cd545132e29a9739e79bd276b"
  },
  {
    "url": "knowledge/webpack/index.html",
    "revision": "718418b75c0259cf3c1d5500cb58c915"
  },
  {
    "url": "knowledge/webpack/webpack打包初探.html",
    "revision": "dad73637fa740bf9e04f17b0520f5039"
  },
  {
    "url": "otherTips/index.html",
    "revision": "fd21605ea7b29dd22a5c9394bf766fdf"
  },
  {
    "url": "otherTips/markdown的语法总结.html",
    "revision": "c58b3d201c2132c89e52cc14833bfd17"
  },
  {
    "url": "otherTips/RSA加密算法初探.html",
    "revision": "a7e5e70c95f52aab90165b8a302e1a5b"
  },
  {
    "url": "otherTips/组件的设计规范.html",
    "revision": "79b85355436b6db8e4f1a1676bfdfdff"
  },
  {
    "url": "project/index.html",
    "revision": "88eea25515e675cbc88264539f633840"
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
