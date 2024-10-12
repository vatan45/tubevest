// App.jsx or App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Your Home component
import Marketplace from './components/market'; // Your Marketplace component

import LandingPage from './components/Landing';
import CollectionPage from './components/collectionpage'; // Make sure to import this
import nft from "./components/nft.webp"; // Adjust the path if needed

function App() {
  // Define collections and nfts here
  const collections = [
    { id: 1, creator: 'CryptoInsights', image: nft, nftCount: 5, totalLikes: 75 },
    { id: 2, creator: 'Web3Wonders', image: nft, nftCount: 3, totalLikes: 66 },
    { id: 3, creator: 'BlockchainBeats', image: nft, nftCount: 2, totalLikes: 16 },
    { id: 4, creator: 'NFTNarrations', image: nft, nftCount: 4, totalLikes: 180 },
    { id: 5, creator: 'MetaverseMavericks', image: nft, nftCount: 3, totalLikes: 99 },
    { id: 6, creator: 'DeFiDreams', image: nft, nftCount: 2, totalLikes: 38 },
  ];

  const nfts = [
    { id: 1, channel: 'CryptoInsights', price: 0.5, image: nft, likes: 15, views: 50, creator: 'CryptoInsights' },
    { id: 2, channel: 'Web3Wonders', price: 0.7, image: nft, likes: 22, views: 78, creator: 'Web3Wonders' },
    { id: 3, channel: 'BlockchainBeats', price: 0.3, image: nft, likes: 8, views: 30, creator: 'BlockchainBeats' },
    { id: 4, channel: 'NFTNarrations', price: 1.2, image: nft, likes: 45, views: 120, creator: 'NFTNarrations' },
    { id: 5, channel: 'MetaverseMavericks', price: 0.9, image: nft, likes: 33, views: 95, creator: 'MetaverseMavericks' },
    { id: 6, channel: 'DeFiDreams', price: 0.6, image: nft, likes: 19, views: 62, creator: 'DeFiDreams' },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/market" element={<Marketplace collections={collections} />} />
        <Route path="/collection/:id" element={<CollectionPage collections={collections} nfts={nfts} />} />
      </Routes>
    </Router>
  );
}

export default App;
