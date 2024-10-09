export function timer(callback, timeout = 3000) {
  setTimeout(() => {
    callback('success')
  }, timeout)
}
