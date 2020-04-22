 ### 写一个正则表达式 匹配所有 Number 直接量
 #### Grammar:
 - **DecimalLiteral**
 - **BinaryIntegerLiteral** 
 - **OctalIntegerLiteral**
 - **HexIntegerLiteral**
 

 - **整数**

 ```
 /^-?\\d+$/
 ```
 - **浮点数**

 ```
 /^(-?\\d+)(\\.\\d+)?$/
 ```

 - **二进制**

 ```
 /^0[bB][01]+$/
 ```

 - **八进制**

 ```
 /^0[oO][0-7]+$/
 ```

 - **十六进制**

 ```
 /^0[xX][0-9a-fA-F]+$/
 ```

 - Number字面量正则
 ```
 /^-?\\d+$|^(-?\\d+)(\\.\\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/
 ```

