import { useEffect } from 'react'

function setHash(hash) {
  const encodedHash = `#${encodeURI(hash)}`
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

export default { setHash, hashConsumer }
