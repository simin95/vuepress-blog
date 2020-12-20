console.log("start---");
var Lazyman = function(name) {
  const quene = [];
  const next = () => {
    const thing = quene.shift();
    thing && thing();
  };

  quene.push(() => {
    console.log(`我是 ${name}`);
    next();
  });

  setTimeout(() => {
    next();
  });

  return (api = {
    _q: quene,
    sleepFirst(time) {
      quene.unshift(() => {
        setTimeout(() => {
          console.log(`我刚睡了 ${time} 秒钟`);
          next();
        }, time * 1000);
      });
      return api;
    },
    eat() {
      quene.push(() => {
        console.log("去吃午餐");
        next();
      });
      return api;
    }
  });
};

Lazyman("Tom")
  .sleepFirst(3)
  .eat("lunch");
