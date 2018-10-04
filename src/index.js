import truncate from './truncate'

export default (path, max, ellipsis = '...') => {
  let maxlen = max
  const file = {}
  if (path.includes('/.')) {
    file.path = path.split('/.').filter(Boolean)
    file.name = `.${file.path.pop()}`
    file.path = file.path[0].split('/')
    file.ext = []
  } else {
    file.path = path.split('/').filter(Boolean)
    file.name = file.path.pop().split('.')
    file.ext = file.name.pop()
    file.name = file.name.join('.')
  }

  let resStr = ''

  // add extension
  if (file.ext.length) {
    resStr = `.${file.ext}${resStr}`
    maxlen -= resStr.length
  }

  // add add filename
  const pathFallBackStr = '.../'
  if (file.path.length && file.name.length >= maxlen) {
    maxlen -= pathFallBackStr.length

    const customFileName = truncate(file.name.split(''), maxlen)
    maxlen -= customFileName.length

    resStr = `${pathFallBackStr}${customFileName}${resStr}`
  } else {
    const customFileName = truncate(file.name.split(''), maxlen)
    maxlen -= customFileName.length
    resStr = `${customFileName}${resStr}`
  }

  // add path
  if (file.path.length && maxlen > pathFallBackStr.length) {
    maxlen -= 1
    resStr = `/${resStr}`

    const customFilePathStr = truncate(file.path, maxlen, '/')
    maxlen -= customFilePathStr.length
    resStr = `${customFilePathStr}${resStr}`
  }

  return resStr
}
