/* eslint-disable import/extensions */
import encoder from '../encodings/o200k_base.js'
import { GptEncoding } from '../GptEncoding.js'

export * from '../specialTokens.js'
// prettier-ignore
const api = GptEncoding.getEncodingApiForModel('o1-mini', () => encoder)
const {
  decode,
  decodeAsyncGenerator,
  decodeGenerator,
  encode,
  encodeGenerator,
  isWithinTokenLimit,
  encodeChat,
  encodeChatGenerator,
} = api
export {
  decode,
  decodeAsyncGenerator,
  decodeGenerator,
  encode,
  encodeChat,
  encodeChatGenerator,
  encodeGenerator,
  isWithinTokenLimit,
}
// eslint-disable-next-line import/no-default-export
export default api
