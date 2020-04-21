// 写一个正则表达式 匹配所有 Number 直接量

/**
 NumericLiteral ::
  DecimalLiteral
  BinaryIntegerLiteral
  OctalIntegerLiteral
  HexIntegerLiteral

 DecimalLiteral ::
  DecimalIntegerLiteral . DecimalDigits opt ExponentPart opt
  . DecimalDigits ExponentPart opt
  DecimalIntegerLiteral ExponentPart opt

 DecimalIntegerLiteral ::
  0
  NonZeroDigit DecimalDigits opt

 DecimalDigits ::
  DecimalDigit
  DecimalDigits DecimalDigit

 DecimalDigit :: one of
  0 1 2 3 4 5 6 7 8 9

 NonZeroDigit :: one of
  1 2 3 4 5 6 7 8 9

 ExponentPart ::
  ExponentIndicator SignedInteger

 ExponentIndicator :: one of
  e E

 SignedInteger ::
  DecimalDigits
  + DecimalDigits
  - DecimalDigits


 BinaryIntegerLiteral ::
  0b BinaryDigits
  0B BinaryDigits

 BinaryDigits ::
  BinaryDigit
  BinaryDigits BinaryDi

 BinaryDigit :: one of
  0 1

 OctalIntegerLiteral ::
  0o OctalDigits
  0O OctalDigits

 OctalDigits ::
  OctalDigit
  OctalDigits OctalDig

 OctalDigit :: one of
  0 1 2 3 4 5 6 7

 HexIntegerLiteral ::
  0x HexDigits
  0X HexDigits

 HexDigits ::
  HexDigit
  HexDigits HexDigit

 HexDigit :: one of
  0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
 */

function main() {
  const flag = /^(0[x|X]([0-9]|[a-f]|[A-F])+)/.test('0xf')
  console.log(flag)
}

main()