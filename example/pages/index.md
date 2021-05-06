# ${title}

this is the
[@magic-libraries](https://github.com/magic-libraries/)
tryCatch library.

it returns errors instead of throwing them.

<GitBadges>@magic-libraries/try-catch</GitBadges>

### installation

`npm install @magic-libraries/try-catch`

### usage

tryCatch can wrap any function:

```
const fn = () => throw new Error('error')

const tryCatchable = lib.tryCatch(fn)

const result = tryCatchable()

// result.message === 'error'
```

this example contains a Module that uses tryCatch,
you can find it
[here](https://github.com/magic-libraries/try-catch/blob/master/example/assets/TryCatch.mjs)

```
export const View = () => {
  const fn = (m) => new Error(m)

  const catchable = lib.tryCatch(fn)

  const msg = 'lib.tryCatch returns errors instead of throwing them'

  const result = catchable(msg)

  return Pre(result.message)
}
```

renders

<TryCatch></TryCatch>

for another usecase,
have a look at [@magic-libraries/json](https://github.com/magic-libraries/json)

### source

the source for this page is in the
[example directory](https://github.com/magic-libraries/try-catch/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
