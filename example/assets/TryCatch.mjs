export const View = () => {
  const fn = (m) => new Error(m)

  const catchable = lib.tryCatch(fn)

  const msg = 'lib.tryCatch returns errors instead of throwing them'

  const result = catchable(msg)

  return Pre(result.message)
}
