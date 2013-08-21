1.FileReader
  -接口
    1) abort 中断读取
    2) readAsBinaryString @param file 将文件读取为二进制字符串
    3) readAsDataUrl @param file 将文件读取为DataURL即Base64码
    4) readAsText @param file,[encoding] 将文件读取为文本,encoding为编码方式，默认为utf-8
  -事件
    1) onabort 中断时fire
    2) onerror 错误时fire
    3) onload 文件成功读取完成时fire
    4) onloadend 文件读取结束时无论成功与否fire
    5) onloadstart 文件读取开始时fire
    6) onprogress 文件读取过程中fire
2.HTML5的input标签
  -fire
    1) jQuery方法trigger触发
    2) small button overflow:hidden
    3) mousemove mouseenter mouseleave 使input在button内跟随鼠标
    4) 利用label的for属性
  -attribute
    1) multiple
    2) 


[W3C FileReader Interface](http://www.w3.org/TR/FileAPI/)
[MDN FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader?redirectlocale=en-US&redirectslug=DOM%2FFileReader)

[Using FormData to send forms with xhr as key/value pairs](http://robertnyman.com/2013/02/11/using-formdata-to-send-forms-with-xhr-as-keyvalue-pairs/)
[MDN FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
[Whatwg Interface FormData](http://xhr.spec.whatwg.org/#interface-formdata)

[W3C Forms multiple](http://www.w3.org/html/wg/drafts/html/master/forms.html#multipart-form-data)