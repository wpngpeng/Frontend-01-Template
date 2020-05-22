/*
HTTP/1.1 200 OK
Content-Type: text/plain
X-Foo: bar
Date: Sun, 10 May 2020 12:37:13 GMT
Connection: keep-alive
Transfer-Encoding: chunked

0
 */
class ResponseParser {
  constructor() {
    this.WAITING_STATUS_LINE = 0
    this.WAITING_STATUS_LINE_END = 1
    this.WAITING_HEAD_NAME = 2
    this.WAITING_HEAD_NAME_END = 3
    this.WAITING_HEAD_VALUE = 4
    this.WAITING_HEAD_VALUE_END = 5
    this.WAITING_HEAD_END = 6
    this.WAITING_BODY = 7
    this.current = this.WAITING_STATUS_LINE
    this.statusLine = ''
    this.headers = {}
    this.headerName = ''
    this.headerValue = ''
  }
  get isFinished() {
    return this.chunkBodyParser && this.chunkBodyParser.isFinished
  }

  get response() {
    const m = this.statusLine.split(' ')
    return {
      statusCode: m[1],
      statusText: m[2],
      headers: this.headers,
      body: this.chunkBodyParser && this.chunkBodyParser.bodyContent.join('')
    }
  }
  receive(string) {
    for (let i = 0; i < string.length; i++) {
      if (!this.isFinished) {
        this.receiveChar(string[i])
      }
    }
    this.chunkBodyParser && (this.chunkBodyParser.isFinished = true)
  }
  receiveChar(char) {
    if (this.current === this.WAITING_STATUS_LINE) {
      if (char === '\r') {
        this.current = this.WAITING_STATUS_LINE_END
      } else {
        this.statusLine += char
      }
    } else if (this.current === this.WAITING_STATUS_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEAD_NAME
      }
    } else if (this.current === this.WAITING_HEAD_NAME) {
      if (char === '\r') {
        this.current = this.WAITING_HEAD_END
      } else if (char === ':') {
        this.current = this.WAITING_HEAD_NAME_END
      } else {
        this.headerName += char
      }
    } else if (this.current === this.WAITING_HEAD_NAME_END) {
      if (char === ' ') {
        this.current = this.WAITING_HEAD_VALUE
      }
    } else if (this.current === this.WAITING_HEAD_VALUE) {
      if (char === '\r') {
        this.current = this.WAITING_HEAD_VALUE_END
        this.headers[this.headerName] = this.headerValue
        this.headerName = ''
        this.headerValue = ''
      } else {
        this.headerValue += char
      }
    } else if (this.current === this.WAITING_HEAD_VALUE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEAD_NAME
      }
    } else if (this.current === this.WAITING_HEAD_END) {
      if (char === '\n') {
        this.current = this.WAITING_BODY
        if (this.headers['Transfer-Encoding'] && this.headers['Transfer-Encoding'] === 'chunked') {
          this.chunkBodyParser = new ChunkBodyParser()
        }
      }
    } else if (this.current === this.WAITING_BODY) {
      this.chunkBodyParser && this.chunkBodyParser.receiveChar(char)
    }
  }
}

class ChunkBodyParser {
  constructor() {
    this.WAITING_CHUNK_NUMBER = 1
    this.WAITING_CHUNK_NUMBER_END = 2
    this.WAITING_CHUNK = 3
    this.WAITING_CHUNK_END = 4
    this.current = this.WAITING_CHUNK_NUMBER
    this.length = ''
    this.bodyContent = []
    this.isFinished = false
  }
  receiveChar(char) {
    if (this.current === this.WAITING_CHUNK_NUMBER) {
      if (char === '\r') {
        this.current = this.WAITING_CHUNK_NUMBER_END
        this.length = Number('0x' + this.length)
        if (this.length === 0) {
          this.isFinished = true
        }
      } else {
        this.length += char
      }
    } else if (this.current === this.WAITING_CHUNK_NUMBER_END) {
      if (char === '\n') {
        this.current = this.WAITING_CHUNK
      }
    } else if (this.current === this.WAITING_CHUNK) {
      if (this.length === 0) {
        this.current = this.WAITING_CHUNK_END
      } else {
        this.bodyContent.push(char)
        if (/[^\x00-\xff]/.test(char)) {
          this.length -=3
        } else {
          this.length--
        }
      }
    } else if (this.current === this.WAITING_CHUNK_END) {
      if (char === '\r') {
        this.current = this.WAITING_CHUNK_NUMBER
      }
    }
  }
}

module.exports = {
  ResponseParser
}