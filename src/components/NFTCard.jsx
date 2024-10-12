import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, Tag, X } from 'lucide-react';

const NFTDetailsPopup = ({ nft, onClose }) => (
    <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
    >
        <motion.div
            className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl w-full mx-auto relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-10"
                onClick={onClose}
            >
                <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-1/2">
                    <img src={nft.image} alt={nft.channel} className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-lg mb-4" />
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
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">{nft.channel}</h2>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        {nft.description || 'This unique NFT represents ownership of the YouTube channel opinion. By owning this NFT, you gain exclusive rights and benefits associated with the channel.'}
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4 mb-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                            <span className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-0">Current Price:</span>
                            <div>
                                <span className="text-xl sm:text-2xl font-bold text-blue-600">{nft.price} ETH</span>
                                <span className="text-xs sm:text-sm text-gray-500 block sm:inline sm:ml-2">≈ ${(nft.price * 1800).toLocaleString()} USD</span>
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
                    <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
                        By purchasing this NFT, you agree to our terms and conditions.
                    </p>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const NFTCard = ({ channel, price, image, likes, views, creator, description, mintDate, edition, blockchain, previousPrice, highestBid }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const nft = { channel, price, image, likes, views, creator, description, mintDate, edition, blockchain, previousPrice, highestBid };

    return (
        <>
            <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative cursor-pointer"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                onClick={() => setIsPopupOpen(true)}
            >
                <div className="relative">
                    <img src={image} alt={channel} className="w-full h-40 sm:h-48 object-cover" />
                    <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                        {price} ETH
                    </div>
                </div>
                <div className="p-3 sm:p-4 relative">
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-800 truncate">{channel}</h3>
                    <div className="flex justify-between text-xs text-gray-600">
                        <span className="flex items-center"><Zap className="w-3 h-3 mr-1" /> {likes}k</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {views}k views</span>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence>
                {isPopupOpen && <NFTDetailsPopup nft={nft} onClose={() => setIsPopupOpen(false)} />}
            </AnimatePresence>
        </>
    );
};

export default NFTCard;