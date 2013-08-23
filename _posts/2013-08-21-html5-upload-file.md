---
layout: post
title: HTML5实现图片上传
tags: [html5,html,file,upload]
category: Tech
---

最近公司项目准备更换图片上传的插件，原来的是一个Flash控件，其实用起来还是不错的，还有进度条，浏览器支持情况也不错。不过因为某些页面的图片上传涉及到了跨域的问题，Flash似乎解决不了了，所以准备索性换成HTML5的，高端大气上档赤。然后这个HTML5上传图片功能自然落到了我的手上了。

一般来说图片上传无非就是文件操作的问题，本来这是服务器对文件流的一个操作问题，前端应该是管不上的，不过HTML5再次赋予了我们前端神圣而伟大的权利，有了HTML5部分后端失业了lol。

其实以前写过一个上传图片的插件，不过那时还活在IE6年代，只能用iframe搞定，虽然还挺好使的，不过在HTML5面前就是一个战斗力负5的渣渣，不仅需要后端返回各项数据，还必须把保存的临时图片地址再发给后端保存，实际请求是2次，而且还无法告诉用户上传进度与速度。

### How to use the FileReader ? ###

首先FileReader是一个用于读取文件的类，我们可以用new关键字实例化一个文件读取器，像这样：
    
    var fr = new FileReader();

但是还有一个问题，这是一个HTML5的API，只有部分浏览器支持它，所以还得加上判断，另外它的支持情况是这样的：

    var fr = false;
    if (typeof window.FileReader === 'undefined') {
        fr = new FileReader();
    }

---
<table style="text-align: center;">
    <tr>
        <th width="20%">IE</th>
        <th width="20%">Chrome</th>
        <th width="20%">Firefox</th>
        <th width="20%">Opera</th>
        <th width="20%">Safari</th>
    </tr>
    <tr>
        <td>10+</td>
        <td>7+</td>
        <td>4.0+</td>
        <td>12.02</td>
        <td>6.02</td>
    </tr>
</table>
---

使用FileReader很简单，它提供了四个简单的接口用来读取文件，分别是abort，readAsBinaryString，readAsDataURL，readAsText。

##### readAsXXX #####

接口名清楚明白的说明了它的作用，以readAs开头的三个接口自然是用来读取文件的。很显然，所谓的文件，在不同的环境中有不同的格式不同的解释方式，这也正是这三个接口的不同之处。

但在我们弄清楚读取文件获得了什么之前，也许我们更应该关心目标文件是什么，怎么获取。幸运地是DOM中老早就存在一个files方法可以获取我们要的文件，并且它还提供了一些方法和属性。主要的属性有name，size，type，显然这是文件名、文件尺寸和文件类型，虽然它也提供了3个读取文件的方法getAsXXX，但是由于FileReader的存在已经被废弃很久了，同样被废弃的还有fileName和fileSize。

另外不得不说，Chrome在文件操作方面做的最出色，早在chrome13就已经实现了文件的写入，而其他浏览器至今还没有实现。

然后说说读取文件吧，这个过程是需要时间的，所以必须异步读取它，还好我们有load方法，像这样：

    var fr = false;
    if (typeof window.FileReader === 'undefined') {
        fr = new FileReader();
        fr.readAsXXX(document.getElementById('input_file').files[0]);
        fr.onload = function (p_fr) {
            console.log(p_fr.target.result);
        };
    }

###### readAsBinaryString ######

readAsBinaryString的result应该是一个二进制流，而log出的结果是一个夹杂着乱码符号的文本，里面还能看到图片是用PS保存的之类的信息。

###### readAsDataURL ######

readAsDataURL的result则是一个Base64的图片代码，可以直接放入HTML的img标签的属性src上。

###### readAsText ######


##### Abort #####
1.FileReader
  -interface
    1) abort 中断读取
    2) readAsBinaryString @param file 将文件读取为二进制字符串
    3) readAsDataUrl @param file 将文件读取为DataURL即Base64码
    4) readAsText @param file,[encoding] 将文件读取为文本,encoding为编码方式，默认为utf-8
  -event
    1) onabort 中断时fire
    2) onerror 错误时fire
    3) onload 文件成功读取完成时fire
    4) onloadend 文件读取结束时无论成功与否fire
    5) onloadstart 文件读取开始时fire
    6) onprogress 文件读取过程中fire
2.HTML5的input标签
  -fire
    1) jQuery方法trigger触发 ie8以内不支持
    2) small button overflow:hidden 尺寸小，鼠标样式不能变
    3) mousemove mouseenter mouseleave 使input在button内跟随鼠标，鼠标样式不能变，效率低
    4) 利用label的for属性 firefox不支持
  -attribute
    1) multiple
    2) 
3.FormData
    1) append 添加一个parameter
    2) 


[W3C FileReader Interface](http://www.w3.org/TR/FileAPI/)
[MDN FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader?redirectlocale=en-US&redirectslug=DOM%2FFileReader)
[MDN DOM Files](https://developer.mozilla.org/en-US/docs/Web/API/File)

[Using FormData to send forms with xhr as key/value pairs](http://robertnyman.com/2013/02/11/using-formdata-to-send-forms-with-xhr-as-keyvalue-pairs/)
[MDN FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
[Whatwg Interface FormData](http://xhr.spec.whatwg.org/#interface-formdata)

[W3C Forms multiple](http://www.w3.org/html/wg/drafts/html/master/forms.html#multipart-form-data)