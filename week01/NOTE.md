# 本周概要
- [学习方法](#学习方法)
- [前端知识](#前端知识)
- [职业规划](#职业规划)
- [工程体系](#工程体系)
- [参考](#参考名词)

# 开营
### [开营记录](https://github.com/JTR354/Frontend-01-Template/blob/master/warming-up/NOTE.md)
# 热身【warming-up】

##### 1.编写一个 DOM 编辑器：可以自由地操作一个 iframe（空白）中的 DOM 结构，包括增、删、移动。
> 不知道

##### 2.讲讲 position float display 各有哪些取值，它们互相之间会如何影响？
> [position:](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) static | relative | absolute | fixed | sticky  
> [float:](https://developer.mozilla.org/zh-CN/docs/CSS/float) none | left | right  
> [display:](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) inline | block | flex | table | grid ...   

##### 3.JavaScript 启动后，内存中有多少个对象？如何用代码来获得这些信息？
> 1个对象,global? Object.keys(window)

##### 4.HTML 的中，如何写一个值为 “a”=‘b’ 的属性值？
```js
const div = document.querySelector('div')
div.setAttribute('data', `"a"='b'`)
```

##### 5.编写一个快速排序代码，并且用动画演示它的过程

>  [快速排序动画](https://jtr354.github.io/Frontend-01-Template/warming-up/5-quick-sort/qucik-sort.html)

---

# 前端知识
### [前端知识体系脑图](http://naotu.baidu.com/file/4b117c428d0bf5e6ab83f89ae83f81f1?token=f73e721835cc5c97)

# 学习方法
[回到顶部](#本周概要 "tips: back")
### 前端技能模型
> 技能的最终目标还是为了解决问题，前端技主要包括： 编程能力、架构能力、工程能力、前端知识、领域知识

![](https://jtr354.github.io/Frontend-01-Template/week01/skill-model.jpg)
- 编程能力 处理 难的问题(技术难点,具体事务)
- 架构能力 处理 大的问题(系统很大,考虑周全)
- 工程能力 处理 多的问题(多人协作)
- 前端知识 (前端岗位特有知识)
- 领域知识 (跟行业相关,图形领域,直播领域,电商领域...)

### 整理法
> 整理法就是找到各个知识点的关系,有如下方法可以实施:
- 顺序关系(事务发展的顺序；如编译原理)
- 组合关系(不同功能的配合;如CSS规则)
- 维度关系(站在不同的视角来串联知识;如javascript)
- 分类关系(用集合的思想串联知识父级包含子集;如CSS选择器)

### 追溯法
> 就是根据线索找到知识的关系,主要可以通过以下几个方法实现:
- 源头(最早出现的论文/杂志;最初的实现案例)
- 标准和文档(w3.org;developer.mozilla.org;msdn.microsoft.com;developer.apple.com)
- 大师(Tim Berners-Lee;Brendan Eich;Bjarne Stroustup)

```bash
tips:
    所谓知识体系的建设,不过就是将知识按照你最舒服的方式串联起来,从而达到收放自如的境界!
    建立知识体系的关键点在于完备性,及不多不少刚刚好
```
# 工程体系
[回到顶部](#本周概要 "tips: back")
### 工具链(套件)
> 规定工具的位置;保证在同一个工具链中各个工具可以相互配合.主要有4个关键工具

init --> run --> test --> publish

- 工具链的作用
- 工具的分类
    - 脚手架 init
    - 本地调试 run
    - 单元测试 test
    - 发布 publish
- 工具链体系的设计
    - 版本问题：要保证同一个团队都使用同一个版本（强迫升级，或鼓励大家停留在一个版本）
    - 数据统计：init 多少项目，最终publish多少项目，组件使用率，发布次数（帮助发现团队问题）

### 持续集成
> 大白话: 合并代码  
> 目标: 降低集成风险
- 客户端软件持续集成
    - Daily build(每日集成一个最终版本)
    - BVT(Build Verification Test/版本验证测试)
- 前端持续集成
    - Check-in build
    - Lint + Rule Check
    
### 技术架构
- 客户端架构: 解决软件需求规模带来的复杂性
- 服务端架构: 解决大量用户访问带来的复杂性
- 前端架构: 解决大量页面需求带来的重复劳动的问题(复用!)
    - 库: 有复用价值的代码
        - URL
        - AJAX
        - ENV
    - 组件: UI上多次出现的元素(组件的定义和基础设施,就是组件化方案!)
        - 轮播
        - Tab
    - 模块: 经常被使用的业务区块
        - 登录

# 职业规划
[回到顶部](#本周概要 "tips: back")
### 优秀的前端工程师
- 拥有领域知识,自成体系
- 能力(编程,架构,工程)
- 潜力(有上升的空间，在编程能力，基础越牢往高走越容易**就是突破能力上限的能力**)
- 明确的职业规划
- 成就(教育经历或职业经历获得的一个个的成就)

### 职业发展
成长 --> 成就 --> 晋升 --> 成长 --> ...

### 成就问题
- 业务型成就
    - 业务目标
        - 理解公司业务的核心目标
        - 目标转化为指标
    - 技术方案
        - 业务指标到指数指标的转化
        - 形成纸面方案/完成小规模试验
    - 实施方案
        - 确定实施目标/参与人
        - 管理实施进度
    - 结果评估
        - 数据采集/数据报表
        - 向上级汇报
```bash
案例：
  给tab加手势操作--点击率提升3倍，技术含量不高（不是他写的，代码就两三百行）对业务效果明显
```
- 技术型成就 (解决技术难题)
    - 目标
        - 公认的技术难点
    - 方案与实施
        - 依靠扎实的编程能力/架构能力形成解决方案
    - 结果
        - 问题解决
```bash
案例：
背景：在某浏览器插件项目中，需要爬取各个网站的价格比价，但是各个网站会采用图片的等价格手段进行防御
方案：引入JS端的数字识别技术，靠AI技术解决
实施：直接上线
结果：成功采集到信息

```
- 工程型成就 (不一定要是实体，可以是宣讲，可以是规章制度，唯一的标准是有效，能够起到作用帮助到产品)
    - 目标
        - 质量/效率
    - 方案与实施
        - 规章制度
        - 库
        - 工具
        - 系统
    - 结果
        - 线上监控
```bash
案例：
目标：xss攻击白帽子反馈漏洞
技术方案：整理安全手册，review历史代码，代码扫描工具
实施：对全体前端宣讲，整体review代码，更改发布流程
结果：xss漏洞大幅减少
```
        
### 如何晋升?
> 数据驱动的思考方式  
> 混得好的评价是: 技术好,业务敏感度高,老板赏识度高!   
> 加班的原因,公司的核心目标停滞不前,老板就会找些奇奇怪怪的办法来实现目标!  

![](https://jtr354.github.io/Frontend-01-Template/week01/data-driven.jpg)

- 目标(量化目标;分析业务目标)
- 现状(展示数据;采集数据建立数据展示系统)
- 方案(预估数据;设计技术方案预估数据)
- 实施(制度建设;小规模试验,推广全公司落地形成制度)
- 结果(总结分析;统计最终效果汇报)

```bash
要清楚公司的想要的是什么，核心指标是什么，不做老黄牛，体现自己的工作价值，让自己有所成长。

注意事项：
  现状非常重要，要有对比，
  先采集好之前的数据（业务数据，技术数据：加载时长，错误数据），
  实施方案之后，统计最终的效果，
  再搞个echart展示汇报
```

## 参考名词
[回到顶部](#本周概要 "tips: back")
- UV：（Unique Visitor）独立访客，统计 1 天内访问某站点的用户数 (以 cookie 为依据)，如果清除了 cookies 或者更换设备访问，计数会加 1。按用户算的，比较真实一点。
- PV：（Page View）访问量, 即页面浏览量或点击量，在一定统计周期内用户每打开或刷新一个页面就记录 1 次。
- ctr：点击率（click-through rate）
判断用户活跃度：日活除以月活
- CICD：持续集成 (Continuous Integration) 和持续部署 (Continuous Deployment) 简称。
- SpriteJS：是跨平台的高性能图形系统，它能够支持 web、node、桌面应用和小程序的图形绘制和实现各种动画效果。
- 前端之巅：InfoQ 旗下关注大前端的技术社群
- 龙书：《编译原理》
- XMind：思维导图软件（ https://www.xmind.cn/）
- DTD：Document Type Definition（ https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd）
- Entity：实体（在 HTML 语境下就是 & 符后边的东西）
- ARIA：Accessible Rich Internet Applications（ https://www.w3.org/TR/html-aria/）
- Token：有效的输入元素
- Comment：注释
- WhiteSpace：空白符
- Line Terminator：行终止符
- Atom：原子
- Semantics：语义
- Runtime：运行时
- QCon：全球软件开发大会（ https://qcon.infoq.cn/2020/beijing/）
- Closure：闭包（ https://en.wikipedia.org/wiki/Closure_(computer_programming) ）

## 参考链接
[回到顶部](#本周概要 "tips: back")
- https://www.w3.org/
- http://w3school.com/
- https://whatwg.org/
- https://scholar.google.com/
- https://developer.mozilla.org/
- https://docs.microsoft.com/
- https://developer.apple.com/
- https://www.ecma-international.org/
- https://developer.mozilla.org/en-US/docs/Web
- https://whatwg.org/
- https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf
- https://www.w3school.com.cn/html/html_entities.asp
- https://www.w3.org/1999/xhtml/
- https://html.spec.whatwg.org/multipage/
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element
- https://fed.taobao.org/blog/taofed/do71ct/fed-learning-quizzes-apply/?spm=taofed.blogs.blog-list.9.44fe5ac8p6qg66
- https://tools.ietf.org/html/rfc3986
- https://svn.apache.org/repos/asf/labs/webarch/trunk/uri/rev-2002/issues.html
- https://tools.ietf.org/
- https://github.com/spritejs/spritejs
- https://spritejs.org/#/