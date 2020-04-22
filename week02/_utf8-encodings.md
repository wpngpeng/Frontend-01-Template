// 写一个 UTF-8 Encoding 的函数

```bash
Code Unit Value Representation 1 st Octet 2 nd Octet 3 rd Octet 4 th Octet
0x0000 - 0x007F 00000000 0zzzzzzz 0zzzzzzz
0x0080 - 0x07FF 00000yyy yyzzzzzz 110yyyyy 10zzzzzz
0x0800 - 0xD7FF xxxxyyyy yyzzzzzz 1110xxxx 10yyyyyy 10zzzzzz
0xD800 - 0xDBFF
followed by
0xDC00 - 0xDFFF
110110vv vvwwwwxx
followed by
110111yy yyzzzzzz
11110uuu 10uuwwww 10xxyyyy 10zzzzzz
0xD800 - 0xDBFF
not followed by
0xDC00 - 0xDFFF
causes URIError
0xDC00 - 0xDFFF causes URIError
0xE000 - 0xFFFF xxxxyyyy yyzzzzzz 1110xxxx 10yyyyyy 10zzzzzz
```
