(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{171:function(a,n,t){"use strict";t.r(n);var e=t(0),_=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"content"},[t("blockquote",[t("p",[a._v("最近偶然读到了介绍非对称加密算法的文章，其中RSA加密算法是目前使用最广泛的算法，比如之前看到的区块链技术，其中的数学原理基础简单，却蕴藏巨大能量，本来算法这类神奇的玩意就很吸引我，这里简单的记录我所理解的内容")])]),a._v(" "),t("h2",{attrs:{id:"数学原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数学原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 数学原理")]),a._v(" "),t("p",[a._v("对极大整数做乘法对于计算机来说是简单的，而将极大整数做因数分解却是困难的，这也是RSA算法的核心，对极大整数做因数分解的难度决定了算法的可靠性，如果将来出现一种能够对极大整数进行快速因数分解的方法，应该能颠覆这个加密算法，不过几十年过去了，目前仍然是通过提升计算速度（如：量子计算机）的方式来尝试破解")]),a._v(" "),t("h2",{attrs:{id:"一般实现流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一般实现流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 一般实现流程")]),a._v(" "),t("ol",[t("li",[a._v("寻找两个不相等的质数 p,q：如 p=7, q=9")]),a._v(" "),t("li",[a._v("计算 n=p*q，这里 n=63")]),a._v(" "),t("li",[a._v("计算 φ(n)=(p - 1) * (q - 1)，这里 φ(n)=48")]),a._v(" "),t("li",[a._v("取随机整数 e，使得 1<e<φ(n), e 与 φ(n) 互质，这里 e=5")]),a._v(" "),t("li",[a._v("计算 d，使得 (e * d) % φ(n) = 1, 这里d取最小时 d=29")]),a._v(" "),t("li",[a._v("使用{e, n}作为公钥，{d, n}作为私钥\n对于一个信息传递过程，其明文为M，密文为C，如取 M=17：\n加密过程：C=( M^e ) % n ,这里 C=( 17^5 ) % 63 = 26\n解密过程：M=( C^d ) % n ,这里可解出 M=( 26^29 ) % 63 = 17")])]),a._v(" "),t("blockquote",[t("p",[a._v("可使用大整数的求余数公式进行完整过程验证：")])]),a._v(" "),t("ol",[t("li",[a._v("(a + b) mod n = ((a mod n) + (b mod n)) mod n")]),a._v(" "),t("li",[a._v("(a * b * c) mod n = (a mod n) * (b mod n) * (c mod n) mod n")])]),a._v(" "),t("p",[a._v("--\x3e 附上对公式2的证明：")]),a._v(" "),t("blockquote",[t("p",[a._v("令 a mod n = x, b mod n = y，则有 a * b = (a-x+x)"),t("em",[a._v("(b-y+y)=(a-x)")]),a._v("(b-y) + x*(b-y) + y*(a-x) + x"),t("em",[a._v("y，因为 a-x, b-y能整除n，所以前三项被约去，余数是 x")]),a._v("y = (a mod n)*(b mod n)，同理可推至n个数相乘。")])]),a._v(" "),t("p",[a._v("补充：p,q应取较大的整数，以保证解密难度，提升可靠性")]),a._v(" "),t("h2",{attrs:{id:"关键代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关键代码实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 关键代码实现")]),a._v(" "),t("h2",{attrs:{id:"后记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后记","aria-hidden":"true"}},[a._v("#")]),a._v(" 后记")])])}],!1,null,null,null);_.options.__file="RSA加密算法初探.md";n.default=_.exports}}]);