---
layout: post
title: 浅谈AngularJS模板
tags: [javascript, angular, angularjs, template]
category: Tech
---

作为最流行的MVVM（Model-View-View-Model）框架之一，相信大部分前端对AngularJS都不会陌生，我也一样久仰大名，不过要说真正的学习和使用AngularJS，还是从三个月前来到现在的项目开始的。不得不说，AngularJS所带来的改变是巨大的，被称为未来浏览器的模式一点也不为过，尤其是思维上的转变。

作为一个常年挥舞着jQuery去指挥无穷无尽的DOM的前端，初次接触AngularJS是有困难的，许多先贤警告我们不要在AngularJS中使用jQuery亦是如此。即使AngularJS中带有jQlite对象，也仅仅是为了弥补一些地方AngularJS的局限性。在深入学习之后，我渐渐的发现了这点。过去使用jQuery的前端就像一个操纵提线木偶的傀儡师，而手握AngularJS的前端简直是不折不扣的魔法师。我们不需要再根据数据去改变DOM，然后填入数据，我们所要做的仅仅是决定数据的表现形式后等待数据的注入。文档流中的元素就像活过来了一样，根据数据表现出了对应的样子。

这一切的核心除了匪夷所思的DOM监听机制，还有就是AngularJS的模板（template）以及其中多不胜数的内置指令（directive）了。因此，我将在本文中谈谈AngularJS的模板以及其思维模式。
<!-- more -->

### 模板中的内置指令

AngularJS模板和EmberJS的模板相比它比较普通，仍然是HTML格式的文件。这使得许多人并未真正了解AngularJS的模板，而仅仅认为AngularJS只是提供了一堆内置指令并可用于HTML文件。不过就先来说说这些内置指令吧，模板后面再详细讨论。

ngIf是个对于模板很重要的指令，它是基本的条件表达，满足条件时则存在，不满足则不存在。通过它可以轻松的让模板基于数据呈现不同结构。另外它会形成独立scope，这也是其与ngShow/ngHide的区别之一。如果ngIf出现太多可能会导致页面渲染速度降低，此时可以选择ngSwitch来代替它，不过我更建议检查你的逻辑。使用ngIf有2个原则，一个模板就是一个对象，不属于它的东西，即使HTML可以放在一起也一定要排除在外，无论封装成directive还是partial或者分离出去；以及ngIf的值应该是一个表达式，基于Model数据的表达式，而不应该是一个Boolean变量，比如hasButton这样的东西。

ngRepeat则是另一重要指令，能循环创建DOM。可以说只要数据中有数组等结构，这一指令就必不可少。配合$first、$last、$index、$middle、$even以及$odd这样的索引变量，使得ngRepeat可以创造出任何形式的列表。



### 真正的页面只有一个
### 反向思维的命名


