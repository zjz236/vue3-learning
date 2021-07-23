# Vue2.x和Vue3.x响应式对比

## Vue2.x

Vue2.x使用的是`Object.defineProperty`：

- `Object.defineProperty`只能劫持对象的属性，所以新增属性时，需要重新遍历对象的每个属性。
- `Object.defineProperty`对新增属性需要手动进行`Observe`，对其新增属性再使用`Object.defineProperty`进行劫持。也正是因为这个原因，使用Vue给data中的数组或对象新增属性时，需要使用vm.$set才能保证新增的属性也是响应式的。

## Vue3.x

Vue3.x使用的是`Proxy`和`Reflect`，直接代理整个对象。

- `Proxy`支持13种拦戳操作，这是defneProperty所不具有的新标准。
- `Proxy`作为新标准，长远来看，JS引擎会继续优化Proxy，但`getter`和`setter`基本不会再有针对性优化。`Proxy`兼容性差目前并没有一个完整支持Prox所有拦戳方法的 `Polyfill`方案。