---
layout: post
title: 翻译《Pro AngularJS》
tags: [translate, angularjs, javascript]
category: Work
---

![Pro AngularJS](/img/post/pro-angularjs.png)

从去年春天就开始翻译这本《Pro AngularJS》，前前后后将近1年半总算是正式出版。从最初的兴奋，到期间的苦逼，最后拿到样书，还是很满足的。这本书由浅入深的详细介绍了AngularJS的各种功能和原理，以及大量示例贯穿全书，开头甚至还有一些JavaScript的基础。原书一共600多页，我和同事各翻译了300多页，我主要是翻译的关于Services的第三部分以及第一部分的后几章。

总的来说收获很多，对AngularJS有了更深入的理解，虽然书中使用的AngularJS版本已经比较旧了，但是对很多方法的使用以及原理的解读还是非常不错的。并且英语阅读能力也感到有明显提升，许多长句子一开始完全不知所云，花了好几个小时通过上下文和代码才慢慢理解其中深意。当然就翻译本来说，也是有许多感想，所以才写了这篇文章总结一下翻译一本书所需要注意的地方。

<!-- more -->

### 格式

其实Markdown在今天已经十分的成熟，就像本文一样，直接使用编辑器就可以书写，还可以添加各种CSS样式。但是翻译时我还是选择了Word来编辑文本，而且由于Mac上没有购买正版，我只能用虚拟机在Windows中使用WPS免费版来编辑。费这么多功夫是为什么呢，原因很简单，出版社的编辑用的是Word，你没法指望他们使用CSS去编辑样式出版书籍。所以痛苦的格式修改开始了。

在最初开始翻译的时候，几乎一半的时间都花在了格式上。其实最后是有编辑来调整格式的，作为译者不需要做什么特别修改。但有一个小问题，如果你全部都使用正文的话，哪些标题是同级的，哪些标题是不同级的，完全就搞不清楚了，就算加个粗什么也会由于前后记忆偏差而导致乱掉，甚至目录都无法生成。所以首先要做的不是把这些文本调整成什么样式，而是把他们调整成不同的区分开来。

比如我后来设置了标题1、标题2、标题3、标题4、正文、代码、特别、警告等类型的文本，然后需要用什么就点一下。之后翻译的进度就大大提升了，并不需要特别在意当前的样式，只是区分，如此以后只要修改对应类型的格式就可以把全文的格式都修改了。

### 翻译

说到翻译，最难的其实不是英语水平问题，而是技术水平，这就是为什么技术书籍的翻译要找技术人员来做，而不是专业翻译人员。如果只是按照字面来翻，看上去可能和作者的话相一致，但技术层面可能会出现误解之类的地方，所以一定要作为技术人员去解读，把代码也看一遍，弄懂作者的意图再来翻译文本就会好很多。比如原书中这一句话：

> These are an artifact of
AngularJS processing the elements and resolving data bindings.

其中的`artifact`的字面意思是人工制品，但是这句话要是翻成“AngularJS有人工制品处理元素并解决数据绑定”，感觉太奇怪了。所以我查了许多字典，发现这个词不仅有人工制品的意思，还有古文物的意思，所以它真正的意思是器具。然后我又看了看上下文和相关代码，这里作者要表达的意思是AngularJS已经有了能处理那些的东西，开发者不需要管这些，所以它们应该是特别好用的一个“器”。最终我把Artifact翻译成了“神器”，自认为还是比较贴切的。

通过上面的例子，说明翻译不仅需要英语水平，还需要技术的理解。所以我的意思是说，还是需要英语水平的，确实两者缺一不可。所以再来看一个长句子：

> The benefit of using this technique is that it allows you to
limit the scope of controller functionality to the part of the application where it will be used, which makes it easier to
perform good unit tests (as described in Chapter 25) and prevents unexpected dependencies between components in
the application.

里面包含了that、where、which各种从句，所以断句是很重要的，把逗号和which后面的部分断开，来看看前面的这句。首先有一个benefit，意思是这个好处就是（is that）后面这句话，而后面这句话断开后剩下“limit the scope of controller functionality to the part of the application”，再加上前面的部分，和where所带的部分，翻译后就是“使用该技术的好处是|它让你可以|将控制器的作用域的功能限制在应用程序中|使用它的那部分上”。

接着应该调整一下后面那部分的顺序，按中文习惯断句，就成了“使用该技术的好处是，它可以让你将控制器作用域的功能限制在应用程序的一部分中，就是使用该功能的那部分。”

最后，我觉得翻译最重要的就是，说人话。如果生搬硬套的把英文翻译成中文，但失去了原有的意思，那将是致命的，所以一定要语法通畅和语义明确。

### 注解

有一种东西叫译者注，是翻译者自己的话。所以很多时候我们看到书中的译者注成了译者的吐槽弹幕，有翻译不了的注一下，有专有名词注一下，甚至原文有错也注一下，这都是或多或少的滥用了译者注。最开始我也是这样使用，但后面校对的时候，我以一个读者的思维看了一遍，感觉译者注基本都是废话，大大的破坏了原书的感觉。

比如翻译方面的解释，其实这说明译文有问题，应该优化译文，让其表达的更清楚，而无需注解。

专有名词也不需要解释，读者不是小白，书籍所面向的人群是否可以理解该专有名词，不是译者该考虑的问题，如果作者认为有必要解释，原文就会有解释，译者只需要翻译就行了，如果没有，说明作者认为读者应该理解，就不该解释。

原文有错与否也不是译者该操心的，如果是明显的印刷错误，可以翻译为正确的，然后注解一下或不注解。如果是其他层面的错误，就应该翻译成错的，况且我也不认为译者可以100%保证那就是错误的。

但究竟什么时候应该使用译者注呢？我认为只有在翻译之后会产生问题的地方才该使用译者注。举个典型的例子，在译文中有这样一段话：

> 迷惑的是，AngularJS所提供的内置过滤器叫作filter。

读者真的迷惑了，迷惑的到底是什么？从中文来看没什么迷惑的地方。所以我们再看看原文：

> One of the built-in filters that AngularJS provides is called, confusingly, filter.

明显看出了问题，过滤器的英文就是filter，所以在英文中这句话看着很奇怪，好比在中文里说，AngularJS所提供的过滤器叫做过滤器。所以直接翻译过来时，中文读者反而会迷惑，此时译者注就可以光明正大的出来解释一下了。

### 协作

这次的翻译过程最有意思的就是合译了，因为有协作的部分。虽然我们是分开翻译，但是还是有很多地方需要协作。比如最常见的就是专有名词翻译的统一性问题，就算是自己一个人翻都有可能前后出现偏差，何况是两人呢。

由于我在HTML中文兴趣组参与过几次翻译工作，所以知道这个问题，一开始我就在Github建立了一个单词对照表（[glossary](https://github.com/tychio/glossary/blob/master/JavaScript/AngularJS.md)）用来维护专有名词对照表。要特别注意的是，每个对照单位都应该是专有的，特别的，可能是词组也可能是单词，或者也可能是语团，但绝不能用其中的任意两项来组合使用，它们都应该是独立的。

无论如何，第一次翻译书籍，肯定有很多不足之处，但也收获了大量的经验，如果还有下一次的机会，希望能做的更好。总结这些，也希望能帮到其他人，无论是翻译书籍还是文档，以一个读者的心就做应该会有所收获。
