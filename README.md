# Web3 Explorer

A production-ready, interactive blockchain education platform built with React, Vite, and Tailwind CSS. Features a modern **Digital Brutalist** design language with massive typography, strong grid layouts, and high-contrast aesthetics.

## Features

- **Home** — Hero section explaining blockchain with animated illustration, Layer 2 (Arbitrum) education, and feature cards
- **Concepts** — Side-by-side comparison panels: Web2 vs Web3, Bitcoin vs Ethereum, Public vs Private Keys, Blockchain vs Traditional Database
- **Live Prices** — Real-time cryptocurrency prices (BTC, ETH, SOL, ARB, MATIC) from the CoinGecko API with loading skeletons and error handling
- **Block Simulator** — Interactive SHA-256 mining simulation with two linked blocks demonstrating proof of work and chain immutability

## Tech Stack

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| React 19          | UI framework             |
| Vite              | Build tool & dev server  |
| React Router DOM  | Client-side routing      |
| Tailwind CSS v4   | Utility-first styling    |
| Lucide React      | Icon library             |
| Web Crypto API    | SHA-256 hashing          |
| Fetch API         | HTTP requests            |
| CoinGecko API     | Live crypto prices       |

## Installation

```bash
# Clone the repository
git clone <repo-url>
cd WEB3

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── Block.jsx         # Interactive mining block
│   ├── BlockchainIllustration.jsx  # Animated hero illustration
│   ├── Button.jsx        # Brutalist button (link/button variants)
│   ├── ComparisonCard.jsx# Side-by-side comparison panel
│   ├── CryptoCard.jsx    # Live price card + skeleton
│   ├── FeatureCard.jsx   # Feature showcase card
│   ├── Footer.jsx        # Site footer
│   └── Navbar.jsx        # Sticky navigation bar
├── hooks/                # Custom React hooks
│   ├── useCryptoPrices.js# CoinGecko API data fetching
│   └── useScrollReveal.js# IntersectionObserver scroll animation
├── pages/                # Route-level page components
│   ├── Home.jsx          # Landing page
│   ├── Concepts.jsx      # Web3 fundamentals
│   ├── LivePrices.jsx    # Real-time crypto prices
│   └── Simulator.jsx     # Block mining simulator
├── utils/                # Utility functions
│   ├── crypto.js         # SHA-256 hashing & mining
│   └── format.js         # Price, hash, time formatting
├── App.jsx               # Root component with routing
├── main.jsx              # Application entry point
└── index.css             # Global styles & design tokens
```

## Environment Variables

This project requires a CoinGecko API key to fetch live cryptocurrency prices.
Create a `.env` file in the root of the project (or copy from `.env.example`):

```env
VITE_COINGECKO_API_KEY=your_key_here
```

### Local Configuration
1. Obtain a free Demo API key from [CoinGecko Developer Dashboard](https://www.coingecko.com/en/developers/dashboard).
2. Create a `.env` file at the root of the project.
3. Add your key as `VITE_COINGECKO_API_KEY=your_key_here`.
4. Start your local development server using `npm run dev`.

### Vercel Deployment
When deploying to Vercel, you must securely provide this key:
1. Go to your project settings in the Vercel Dashboard.
2. Navigate to **Environment Variables**.
3. Add a new variable with the key `VITE_COINGECKO_API_KEY` and your actual API key as the value.
4. Redeploy the project if you've already deployed it.

## API Used

**CoinGecko API**

```
GET https://api.coingecko.com/api/v3/simple/price
  ?ids=bitcoin,ethereum,solana,arbitrum,polygon-pos
  &vs_currencies=usd
  &include_24hr_change=true
  &x_cg_demo_api_key=[YOUR_API_KEY]
```

## Design Principles

- **Digital Brutalist** — Thick 4px borders, flat colors, sharp corners, massive typography
- **Editorial composition** — Large whitespace, strong grid, slight asymmetry
- **High contrast** — Black (#111111) on cream (#F7F7F5) background
- **Micro-interactions** — Hover lift, shadow movement, card rotation, scroll reveal
- **Responsive** — Fully adaptive from mobile to desktop

## Future Improvements

- Add more blockchain simulations (Merkle trees, consensus algorithms)
- Implement wallet connection with MetaMask
- Add gas fee calculator
- Include historical price charts
- Add dark mode toggle
- Expand to more cryptocurrencies
- Add unit and integration tests
- Implement PWA capabilities
