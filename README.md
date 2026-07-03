<div align="center">

# ⛓️ BLOCK ATLAS

### **Your Interactive Guide to Blockchain, Ethereum & Web3**

<p align="center">
<img src="https://cdn.corenexis.com/f/6hCavLRiYqV.png" alt="BLOCK ATLAS Banner"/>
</p>

*A premium educational platform for learning Blockchain through interactive visualizations, live cryptocurrency data, and hands-on mining simulations.*

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript)
![Web3](https://img.shields.io/badge/Web3-Education-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

<br>

<div align="center">

# 🚀 BLOCK ATLAS

### 🌍 Interactive Guide to Blockchain, Ethereum & Web3

<br>

<a href="https://block-atlas-web3.vercel.app/">
<img src="https://img.shields.io/badge/🚀%20TRY%20LIVE%20DEMO-CLICK%20HERE-success?style=for-the-badge&logo=vercel&logoColor=white">
</a>

⭐ **Best viewed on Desktop**

</div>

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/YOUR_USERNAME/block-atlas)

</div>

---

# 📖 About

**BLOCK ATLAS** is a modern educational platform designed to simplify the concepts of **Blockchain**, **Bitcoin**, **Ethereum**, **Layer 2**, **Arbitrum**, and **Web3**.

Instead of reading lengthy documentation, users learn through interactive visualizations, real-time market data, and a hands-on blockchain simulator.

Whether you're a beginner or a developer exploring Web3, BLOCK ATLAS helps you understand complex topics in an intuitive and engaging way.

---

# ✨ Features

## 🏠 Home

- Interactive Hero Section
- Blockchain Introduction
- Ethereum Explained
- Layer 2 & Arbitrum Overview
- Animated Blockchain Illustration
- Responsive Brutalist Design

---

## 📚 Concepts

Visual comparison panels covering:

- 🌐 Web2 vs Web3
- ₿ Bitcoin vs Ethereum
- 🔐 Public Key vs Private Key
- 🗄 Blockchain vs Traditional Database

Each concept includes:

- Visual comparisons
- Simple explanations
- Real-world examples
- Educational insights

---

## 📈 Live Crypto Prices

Real-time cryptocurrency dashboard powered by CoinGecko.

Supported Coins

- Bitcoin
- Ethereum
- Solana
- Arbitrum
- Polygon

Features

- Live USD Prices
- 24 Hour Price Change
- Refresh Button
- Loading Skeleton
- Error Handling
- Responsive Cards

---

## ⛏️ Block Simulator

Interactive blockchain mining simulator demonstrating

- SHA-256 Hashing
- Proof of Work
- Nonce
- Mining Process
- Chain Validation
- Blockchain Immutability

Modify Block 1 and instantly observe Block 2 become invalid, demonstrating how blockchain integrity works.

---

# 📸 Screenshots

## 🏠 Home

![Home](https://cdn.corenexis.com/f/wFWVedSbsYR.png)

---

## 📚 Concepts

![Concepts](./screenshots/concepts.png)

---

## 📈 Live Prices

![Live Prices](./screenshots/prices.png)

---

## ⛏️ Block Simulator

![Simulator](./screenshots/simulator.png)

---

# 🎥 Demo

> Replace with your GIF later.

```text
demo.gif
```

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Frontend | React 19 |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM |
| Build Tool | Vite |
| Icons | Lucide React |
| Cryptography | Web Crypto API |
| HTTP Client | Fetch API |
| API | CoinGecko |
| Language | JavaScript |

---

# 🏗 Project Architecture

```text
                 User
                   │
                   ▼
          React + React Router
                   │
     ┌─────────────┼─────────────┐
     ▼             ▼             ▼
 Concepts     Live Prices     Simulator
                   │
          CoinGecko API
                   │
             Fetch API
                   │
              React Hooks
                   │
            Reusable Components
```

---

# 📂 Folder Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Block.jsx
│   ├── BlockchainIllustration.jsx
│   ├── Button.jsx
│   ├── ComparisonCard.jsx
│   ├── CryptoCard.jsx
│   ├── FeatureCard.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
│
├── hooks/
│   ├── useCryptoPrices.js
│   └── useScrollReveal.js
│
├── pages/
│   ├── Home.jsx
│   ├── Concepts.jsx
│   ├── LivePrices.jsx
│   └── Simulator.jsx
│
├── utils/
│   ├── crypto.js
│   └── format.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/block-atlas.git
```

Navigate into the project

```bash
cd block-atlas
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Visit

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file.

```env
VITE_COINGECKO_API_KEY=your_api_key_here
```

---

## Local Development

1. Create `.env`
2. Add your CoinGecko API Key
3. Run

```bash
npm run dev
```

---

## Vercel Deployment

Project Settings

↓

Environment Variables

↓

Add

```
VITE_COINGECKO_API_KEY
```

Redeploy.

---

# 🌍 API Used

### CoinGecko API

```http
GET https://api.coingecko.com/api/v3/simple/price
```

Parameters

```
ids=bitcoin,ethereum,solana,arbitrum,polygon-pos

vs_currencies=usd

include_24hr_change=true

x_cg_demo_api_key=YOUR_API_KEY
```

---

# 🎨 Design Language

BLOCK ATLAS follows a **Modern Digital Brutalist** design philosophy.

- Thick Borders
- Flat Colors
- Strong Shadows
- Massive Typography
- Editorial Layout
- Responsive Design
- Smooth Micro-interactions
- Interactive Learning Experience

---

# 📚 What You'll Learn

- Blockchain
- Bitcoin
- Ethereum
- Smart Contracts
- Layer 2
- Arbitrum
- SHA-256
- Proof of Work
- Nonce
- Chain Immutability

---

# 🗺 Roadmap

- [x] Interactive Landing Page
- [x] Blockchain Concepts
- [x] Live Crypto Dashboard
- [x] Mining Simulator
- [ ] Wallet Connection
- [ ] MetaMask Integration
- [ ] Historical Price Charts
- [ ] Gas Fee Calculator
- [ ] More Blockchain Simulations
- [ ] Dark Mode
- [ ] Progressive Web App
- [ ] Unit Testing

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

# ⭐ Support

If you found this project helpful,

please consider giving it a ⭐ on GitHub.

It really helps!

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

## Sufiyan Shaikh

Computer Science Student

Full Stack Developer

Web Enthusiast

📧 Email

sufiyanshaikh1406@gmail.com

🌐 Portfolio

https://portfolio-website-git-main-sufiyanshaikh1406-6639s-projects.vercel.app/

💼 LinkedIn

https://linkedin.com/in/sufiyan-shaikh-59670334b

🐙 GitHub

https://github.com/sufiyan1406

---

<div align="center">

### 🚀 Built with React • Tailwind CSS • Vite • Web3

**Made with ❤️ by Sufiyan Shaikh**

⭐ Don't forget to star the repository if you enjoyed it!

</div>
