import { is } from '@magic/test'
import { tryCatch } from '../src/index.mjs'

const handler = (fn, ...args) => tryCatch(fn)(...args)

export default [
  {
    fn: handler(() => { throw new Error('error') }),
    expect: is.error,
    info: 'successfully returns an error instead of throwing it',
  },
  {
    fn: handler(() => { throw new Error('error') }),
    expect: t => t.message === 'error',
    info: 'successfully returns an error with a message',
  },

  {
    fn: handler((...a) => a, 'okies', 'here', 'are some args'),
    expect: ['okies', 'here', 'are some args'],
    info: 'successfully returns if no error happens',
  },
]
