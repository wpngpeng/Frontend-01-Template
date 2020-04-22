## 正则表达式，匹配所有的字符串直接量，单引号和双引号

```
/^['"\\bfnrtv/dxu]$|^u[0-9a-fA-F]{4}$|^u(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}$/
```
- SingleEscapeCharacter :: 
```
/^['"\\bfnrtv]$/
```

- HexEscapeSequence ::

```
/^u[0-9a-fA-F]{4}$|^u(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}$/
```

- UnicodeEscapeSequence ::

```
/[0-9a-fA-F]{4}$/
```


