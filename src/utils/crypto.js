/**
 * Compute SHA-256 hash of a string using the Web Crypto API.
 * Returns a hex-encoded string.
 */
export async function sha256(message) {
  const encoder = new TextEncoder()
  const data = encoder.encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Mine a block by finding a nonce that produces a hash
 * starting with the given prefix (e.g. "00").
 * Calls onProgress with { nonce, hash } during mining.
 * Returns { nonce, hash } when a valid hash is found.
 */
export async function mineBlock(data, previousHash, prefix = '00', onProgress = null) {
  let nonce = 0
  const batchSize = 50

  while (true) {
    const input = `${nonce}${data}${previousHash}`
    const hash = await sha256(input)

    if (onProgress && nonce % 10 === 0) {
      onProgress({ nonce, hash })
    }

    if (hash.startsWith(prefix)) {
      return { nonce, hash }
    }

    nonce++

    // Yield to the main thread periodically
    if (nonce % batchSize === 0) {
      await new Promise(resolve => setTimeout(resolve, 0))
    }
  }
}

/**
 * Compute the hash of a block given its data, nonce, and previous hash.
 */
export async function computeBlockHash(data, nonce, previousHash) {
  const input = `${nonce}${data}${previousHash}`
  return sha256(input)
}
