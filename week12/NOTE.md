# 第12周学习记录

## 使用LL算法构建AST

### 四则运算
- TokenNumber: 0-9的组合
- Operator: \+ \- \* \\ 之一
- Whitespace: \<SP>
- LineTerminator: \<LF> \<CR>

```bash
// BNF
<Expression> ::=
  <AdditiveExrpression><EOF>

<AdditiveExpression>::=
  <MultiplicativeExpression>
  |<AdditiveExpression><+><MultiplicativeExpression>
  |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
  <Number>
  |<MultiplicativeExpression><*><Number>
  |<MultiplicativeExpression></><Number>
```

`tips: 正则重点掌握[]()^$等`