# 其它区别

## performance优化

- 重构了虚拟DOM，保持兼容性，使dom 脱离模板渲染，提升性能
- 优化了模板编译过程，增加patchFlag，遍历节点的时候，会跳过静态节点
- 高效的组件初始化
- 组件upload的过程性能提升1.3~2倍
- SSR速度提升2~3倍

**编译模版的静态标记**

```vue
<div id="app">
  <p>A</p>
  <p>B</p>
  <div>{{word}}</div>
</div>
```

在Vue2.x中会编译成以下代码

```js
function render() {
  with(this) {
    return _c('div', {
      attrs: {
        "id": "app"
      }
    }, [_c('p', [_v("A")]), _c('p', [_v('B')]), _c('div', [_v(_s(word))])])
  }
}
```

在Vue3.x中会编译成以下代码

```js
import { createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", {id: "app"}, [
    _createVNode("p", null, "A"),
    _createVNode("p", null, "B"),
    _createVNode("div", null, _toDisplayString(_ctx.word), 1 /* TEXT */)
  ]))
}
```

从上面的例子可以看出，两个`p`标签是完全静态，在后续渲染中，是没有发生任何变化的。但是在`Vue2.x`中依然会使用`_c`新建成一个vdom，在`diff`的时候还是会去比较，就会造成一定量性能消耗。但是在Vue3.x中，只有当`_createNode`的第四个参数不为空的时候，这时才会被遍历到，而静态节点就不会被遍历到。

同时可以看到在Vue3.x的那个非静态节点编译后，出现了`/* TEXT */`，这是为了标记当前内容的类型以便进行diff，如果不同的标记，只需要去比较对比相同的类型。这就不会去浪费时间对其他类型进行遍历了。

```js
export const enum PatchFlags {
  // 动态文字内容
  TEXT = 1,

  // 动态 class
  CLASS = 1 << 1,

  // 动态样式
  STYLE = 1 << 2,

  // 动态 props
  PROPS = 1 << 3,

  // 有动态的key，也就是说props对象的key不是确定的
  FULL_PROPS = 1 << 4,

  // 合并事件
  HYDRATE_EVENTS = 1 << 5,

  // children 顺序确定的 fragment
  STABLE_FRAGMENT = 1 << 6,

  // children中有带有key的节点的fragment
  KEYED_FRAGMENT = 1 << 7,

  // 没有key的children的fragment
  UNKEYED_FRAGMENT = 1 << 8,

  // 只有非props需要patch的，比如`ref`
  NEED_PATCH = 1 << 9,

  // 动态的插槽
  DYNAMIC_SLOTS = 1 << 10,

  // SPECIAL FLAGS -------------------------------------------------------------

  // 以下是特殊的flag，不会在优化中被用到，是内置的特殊flag

  // 表示他是静态节点，他的内容永远不会改变，对于hydrate的过程中，不会需要再对其子节点进行diff
  HOISTED = -1,

  // 用来表示一个节点的diff应该结束
  BAIL = -2,
}
```

**事件储存**

```vue
<div id="app">
  <button @click="handleClick">AA</button>
</div>
```

会编译成

```js
import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", {id: "app"}, [
    _createVNode("button", {
      onClick: _cache[1] || (_cache[1] = ($event, ...args) => (_ctx.handleClick($event, ...args)))
    }, 'AA')
  ]))
}
```

在代码中可以看出在绑定点击事件时，会生成并缓存了一个内联函数在cache中，并生成一个静态节点。

**静态提升**

```vue
<div id="app">
  <p>A</p>
  <p>B</p>
  <div>{{word}}</div>
  <div :class="{active: isActive}">C</div>
</div>
```

会编译成

```js
import { createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from "vue"

const _hoisted_1 = { id: "app" }
const _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "A", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "B", -1 /* HOISTED */)

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _createVNode("div", null, _toDisplayString(_ctx.word), 1 /* TEXT */),
    _createVNode("div", {
      class: {active: _ctx.isActive}
    }, "C", 2 /* CLASS */)
  ]))
}
```

 `_hoisted_2` 和 `_hoisted_3` 变量中都有一个 `/*#__PURE__*/` 注释。

这个注释的作用是表示这个函数是纯函数，没有副作用，主要用于 tree-shaking。压缩工具在打包时会将未被使用的代码直接删除（shaking 摇掉）。



## 片段（Fragment）

在 Vue2.x 中， `template`中只允许有一个根节点：

```vue
<template>
    <div>
        <span></span>
        <span></span>
    </div>
</template>
```

但是在 Vue3.x 中，你可以直接写多个根节点：

```vue
<template>
    <span></span>
    <span></span>
</template>
```



## 提供了tree shaking

- 打包的时候自动去除了没用到的vue模块



## 更好的ts支持

- 类型定义提示
- tsx支持
- class组件的支持



## 其它

未完待续...