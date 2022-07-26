import scrollLock from 'scroll-lock'

export default (_, inject) => {
  inject('scrollLock', scrollLock)
}
