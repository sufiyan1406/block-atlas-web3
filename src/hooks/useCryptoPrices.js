import { useState, useEffect, useCallback } from 'react'

const API_KEY = 'CG-vAfWK9y6pi9AJLy2wzveMq71'

const API_URL =
  `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,arbitrum,polygon-pos&vs_currencies=usd&include_24hr_change=true&x_cg_demo_api_key=${API_KEY}`

/**
 * Hook that fetches live crypto prices from the CoinGecko API.
 * Returns { data, loading, error, lastUpdated, refresh }.
 */
export function useCryptoPrices() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const fetchPrices = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(API_URL, {
        headers: {
          'x-cg-demo-api-key': API_KEY,
        },
      })
      if (!response.ok) {
        throw new Error(`API returned ${response.status}`)
      }
      const json = await response.json()

      const formatted = [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price: json.bitcoin?.usd ?? 0,
          change: json.bitcoin?.usd_24h_change ?? 0,
          color: '#F7931A',
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price: json.ethereum?.usd ?? 0,
          change: json.ethereum?.usd_24h_change ?? 0,
          color: '#627EEA',
        },
        {
          id: 'solana',
          name: 'Solana',
          symbol: 'SOL',
          price: json.solana?.usd ?? 0,
          change: json.solana?.usd_24h_change ?? 0,
          color: '#9945FF',
        },
        {
          id: 'arbitrum',
          name: 'Arbitrum',
          symbol: 'ARB',
          price: json.arbitrum?.usd ?? 0,
          change: json.arbitrum?.usd_24h_change ?? 0,
          color: '#2D374B',
        },
        {
          id: 'polygon-pos',
          name: 'Polygon',
          symbol: 'MATIC',
          price: json['polygon-pos']?.usd ?? 0,
          change: json['polygon-pos']?.usd_24h_change ?? 0,
          color: '#8247E5',
        },
      ]

      setData(formatted)
      setLastUpdated(new Date())
    } catch (err) {
      setError(err.message || 'Failed to fetch prices')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPrices()
  }, [fetchPrices])

  return { data, loading, error, lastUpdated, refresh: fetchPrices }
}
