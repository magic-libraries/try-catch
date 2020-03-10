export const tryCatch = fn => (...a) => {
  try {
    return fn(...a)
  } catch (e) {
    return e
  }
}

export default {
  tryCatch,
}
