# 每周总结可以写在这里
### [作业](./http-toy)
## http报文

- 报文首部
- 空行(CR+LF)
- 报文主体

### 请求报文首部
- 请求行
    - 请求方法
    - 请求URI
    - HTTP版本
    ```bash
        GET /path HTTP/1.1
    ```
- 请求首部字段
- 通用首部字段
- 实体首部字段
- 其他

### 响应报文首部
- 状态行
    - HTTP版本
    - 状态码
    - 原因短语
    ```bash
        HTTP/1.1 200 OK
    ```
- 响应首部字段
- 通用首部字段
- 实体首部字段
- 其他

## 状态机
> 逻辑分割

##
1. request content-length
2. chunked 中文字符

## 爬坑
- netstat -a -n  #各个端口占用
- netstat -ano   #各个端口占用和进程PID
- netstat -aon | findstr "8088" 
- tasklist | findstr "8088" 查看端口号所对应的应用程序
- taskkill /pid 4456 /F 终止进程
```bash
tasklist | findstr "8088" 
```
- [window上杀死端口号 占用（node进程常见）](https://blog.csdn.net/wwq147852/article/details/78721983)