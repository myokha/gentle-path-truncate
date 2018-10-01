function truncate (arr, max, joinSymb = '', ellipsis = '...') {
  const str = arr.join(joinSymb)
  let mid = getMiddle(arr.length)

  if (str.length <= max) return str
  if (arr.includes(ellipsis)) {
    arr.splice(mid, 1)
    mid = getMiddle(arr.length)
  }

  arr.splice(mid, 1, ellipsis)

  return truncate(arr, max, joinSymb, ellipsis)
}

function getMiddle (val) {
  return Math.floor(val / 2)
}

module.exports = truncate
