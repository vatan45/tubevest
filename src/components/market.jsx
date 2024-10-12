import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Zap, Clock, Tag, ChevronDown, Tv, Menu, X } from 'lucide-react'
import nft from "./nft.webp"
import CollectionCard from './collection'
import { Link } from 'react-router-dom'

const NFTCard = ({ channel, price, image, likes, views }) => (
    <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative cursor-pointer"
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDYwIDYwWk02MCAwTDAgNjBaIiBzdHJva2U9IiNGMEYwRjAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>
        <div className="relative">
            <img src={image} alt={channel} className="w-full h-48 object-cover" />
            <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                {price} ETH
            </div>
        </div>
        <div className="p-4 relative">
            <h3 className="text-lg font-bold mb-2 text-gray-800">{channel}</h3>
            <div className="flex justify-between text-xs text-gray-600">
                <span className="flex items-center"><Zap className="w-3 h-3 mr-1" /> {likes}k</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {views}k views</span>
            </div>
        </div>
    </motion.div>
)

const FilterButton = ({ active, onClick, children }) => (
    <motion.button
        className={`px-4 py-2 rounded-full text-sm font-medium border ${active ? 'bg-blue-600 text-white' : 'bg-white text-black border-gray-300'
            }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        {children}
    </motion.button>
)

const NFTDetailsPopup = ({ nft, onClose }) => (
    <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
    >
        <motion.div
            className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-auto relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                onClick={onClose}
            >
                <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img src={nft.image} alt={nft.channel} className="w-full h-80 object-cover rounded-lg shadow-lg mb-4" />
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">NFT Details</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <span className="text-gray-600">Creator:</span>
                            <span className="font-medium">{nft.creator || 'Anonymous'}</span>
                            <span className="text-gray-600">Minted:</span>
                            <span className="font-medium">{nft.mintDate || 'Unknown'}</span>
                            <span className="text-gray-600">Edition:</span>
                            <span className="font-medium">{nft.edition || '1 of 1'}</span>
                            <span className="text-gray-600">Blockchain:</span>
                            <span className="font-medium">{nft.blockchain || 'Ethereum'}</span>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-2">{nft.channel}</h2>
                    <p className="text-gray-600 mb-4">
                        {nft.description || 'This unique NFT represents ownership of the YouTube channel opinion. By owning this NFT, you gain exclusive rights and benefits associated with the channel.'}
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4 mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xl font-semibold text-gray-700">Current Price:</span>
                            <div>
                                <span className="text-2xl font-bold text-blue-600">{nft.price} ETH</span>
                                <span className="text-sm text-gray-500 ml-2">≈ ${(nft.price * 1800).toLocaleString()} USD</span>
                            </div>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Previous Sale:</span>
                            <span className="font-medium">{nft.previousPrice || 'N/A'} ETH</span>
                        </div>
                        <div className="flex justify-between text-sm mt-2">
                            <span className="text-gray-600">Highest Bid:</span>
                            <span className="font-medium">{nft.highestBid || 'N/A'} ETH</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex space-x-4">
                            <span className="flex items-center"><Zap className="w-4 h-4 mr-1 text-yellow-500" /> {nft.likes}k</span>
                            <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-green-500" /> {nft.views}k views</span>
                        </div>
                    </div>
                    <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                        onClick={() => alert('NFT purchase functionality to be implemented')}
                    >
                        <Tag className="w-5 h-5 mr-2" />
                        Buy Now
                    </button>
                    <p className="text-center text-sm text-gray-500 mt-4">
                        By purchasing this NFT, you agree to our terms
                    </p>
                </div>
            </div>
        </motion.div>
    </motion.div>
)

export default function Market() {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('popular')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [selectedNFT, setSelectedNFT] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const collections = [
        { id: 1, creator: 'CryptoInsights', image: nft, nftCount: 5, totalLikes: 75 },
        { id: 2, creator: 'Web3Wonders', image: nft, nftCount: 3, totalLikes: 66 },
        { id: 3, creator: 'BlockchainBeats', image: nft, nftCount: 2, totalLikes: 16 },
        { id: 4, creator: 'NFTNarrations', image: nft, nftCount: 4, totalLikes: 180 },
        { id: 5, creator: 'MetaverseMavericks', image: nft, nftCount: 3, totalLikes: 99 },
        { id: 6, creator: 'DeFiDreams', image: nft, nftCount: 2, totalLikes: 38 },
    ]

    const filteredCollections = collections.filter(collection =>
        collection.creator.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const sortedCollections = [...filteredCollections].sort((a, b) => {
        if (sortBy === 'popular') return b.totalLikes - a.totalLikes
        if (sortBy === 'recent') return b.id - a.id
        return b.nftCount - a.nftCount
    })

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-900 relative overflow-hidden">
            {/* Background gradient clouds */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white z-10"></div>
                <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-1/2 left-1/4 w-full h-full bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <header className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 mt-4 ${scrolled
                ? 'bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-full'
                : ''
                }`} style={{ width: '90%', maxWidth: '1400px' }}>
                <div className="w-full px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Tv className="w-8 h-8 text-blue-600" />
                        <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-blue-600'}`}>YTOpinion Market</span>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {['Home', 'Marketplace', 'Create', 'About'].map((item) => (
                                <li key={item}>
                                    <a href="#" className={`text-sm uppercase tracking-wider hover:text-blue-600 transition duration-300 ${scrolled ? 'text-gray-900' : 'text-blue-600'
                                        }`}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className={`md:hidden p-2 rounded-full ${scrolled
                            ? 'bg-gray-100 bg-opacity-50 text-gray-900'
                            : 'bg-blue-100 text-blue-600'
                            } hover:bg-blue-600 hover:text-white transition duration-300`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden bg-white shadow-lg rounded-2xl mt-2 mx-4"
                        >
                            <ul className="py-4">
                                {['Home', 'Marketplace', 'Create', 'About'].map((item) => (
                                    <li key={item} className="px-4 py-2">
                                        <a href="#" className="block text-sm uppercase tracking-wider hover:text-blue-600 transition duration-300 text-gray-700">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <div className="container mx-auto px-4 py-24 relative z-20">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
                        YT Opinion Market
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover and invest in the future of content creation
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search for YouTube channels"
                            className="w-full pl-10 pr-4 py-3 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className="flex space-x-2">
                        <FilterButton active={sortBy === 'popular'} onClick={() => setSortBy('popular')}>
                            Popular
                        </FilterButton>
                        <FilterButton active={sortBy === 'recent'} onClick={() => setSortBy('recent')}>
                            Recent
                        </FilterButton>
                        <FilterButton active={sortBy === 'price'} onClick={() => setSortBy('price')}>
                            Highest Price
                        </FilterButton>
                    </div>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                >
                    <AnimatePresence>
                        {sortedCollections.map(collection => (
                            <Link to={`/collection/${collection.id}`} key={collection.id}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <CollectionCard {...collection} />
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {sortedCollections.length === 0 && (
                    <motion.p
                        className="text-center text-gray-600 mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        No collections found matching your criteria. Try adjusting your search.
                    </motion.p>
                )}
            </div>
        </div>
    )
}