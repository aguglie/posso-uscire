import { useEffect } from 'react'
import removeAccents from 'remove-accents'

function prettify(string) {
  return removeAccents(string.trim()).replace(/ +/g, '-')
}

function setHash(hash) {
  const encodedHash = `#${encodeURI(prettify(hash))}`
  if (history.pushState) {
    history.pushState(null, null, encodedHash)
  } else {
    location.hash = encodedHash
  }
}

function getHash() {
  return decodeURI(window.location.hash.substr(1))
}

function hashConsumer(callable) {
  return useEffect(() => {
    const hash = getHash()
    if (hash) {
      callable(hash)
    }
  }, [])
}

export default { setHash, hashConsumer, prettify }
