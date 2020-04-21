### 编写一个UTF8 Encoding函数
#### JavaScript提供了encodeURIComponent与decodeURIComponent方法组合来对查询字符串进行编码与解码。利用这一点，我们可以将encodeURIComponent方法编码后的字符串进行处理。代码如下：

```
function EncodeUTF8(text) {
    const  UTFcode = encodeURIComponent(text);
    const bytes = [];
    for (var i = 0; i < UTFcode.length; i++) {
        const Encode = UTFcode.charAt(i);
        if (Encode === '%') {
            const codeItem = UTFcode.charAt(i + 1) + UTFcode.charAt(i + 2);
            const codeData = parseInt(codeItem, 16);
            bytes.push(codeData);
            i += 2;
        } else bytes.push(Encode.charCodeAt(0));
    }
    return bytes;
}
```
