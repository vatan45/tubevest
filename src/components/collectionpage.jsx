import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Search, Globe, MoreHorizontal } from 'lucide-react';
import NFTCard from './NFTCard';  // Add this import

const Navbar = () => (
    <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
                <Link to="/" className="text-2xl font-bold text-white">YTOpinion</Link>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-white hover:text-blue-200 transition-colors">Home</Link>
                    <Link to="/market" className="text-white hover:text-blue-200 transition-colors">Marketplace</Link>
                    <Link to="#" className="text-white hover:text-blue-200 transition-colors">About</Link>
                    <Link to="#" className="text-white hover:text-blue-200 transition-colors">Contact</Link>
                </div>
                <button className="md:hidden">
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </div>
    </motion.nav>
);

const CollectionPage = ({ collections, nfts }) => {
    const { id } = useParams();
    const collection = collections.find(c => c.id === parseInt(id));
    const collectionNFTs = nfts.filter(nft => nft.creator === collection.creator);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar isScrolled={isScrolled} />

            {/* Banner */}
            <div className="w-full h-64 bg-gradient-to-r from-purple-400 to-blue-500 relative">
                <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
                    <img
                        src={collection.bannerImage || 'https://via.placeholder.com/1200x300'}
                        alt={collection.creator}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="relative z-20 flex items-center">
                        <img
                            src={collection.creatorImage || 'https://via.placeholder.com/150'}
                            alt={collection.creator}
                            className="w-24 h-24 rounded-full border-4 border-white mr-6"
                        />
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2">{collection.creator}</h1>
                            <p className="text-white text-opacity-80">Created by {collection.creator}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Collection Info */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <p className="text-gray-600">{collection.description || 'No description available.'}</p>
                    <div className="flex space-x-4">
                        <button className="text-gray-600 hover:text-blue-600"><Globe size={20} /></button>
                        <button className="text-gray-600 hover:text-blue-600"><MoreHorizontal size={20} /></button>
                    </div>
                </div>

                {/* Collection Stats */}
                <div className="grid grid-cols-5 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-2xl font-bold">{collection.totalVolume || '2,456'} ETH</p>
                        <p className="text-sm text-gray-600">Total volume</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-2xl font-bold">{collection.floorPrice || '1.6399'} ETH</p>
                        <p className="text-sm text-gray-600">Floor price</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-2xl font-bold">{collection.bestOffer || '1.5513'} WETH</p>
                        <p className="text-sm text-gray-600">Best offer</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-2xl font-bold">{collection.listed || '0.5'}%</p>
                        <p className="text-sm text-gray-600">Listed</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-2xl font-bold">{collection.owners || '1,515'} (22%)</p>
                        <p className="text-sm text-gray-600">Owners (Unique)</p>
                    </div>
                </div>

                {/* NFT Collection */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold">Items</h3>
                        <div className="flex items-center">
                            <span className="mr-4">6,990 results</span>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search by name or trait"
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-full"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {collectionNFTs.map((nft) => (
                            <NFTCard
                                key={nft.id}
                                channel={nft.channel}
                                price={nft.price}
                                image={nft.image}
                                likes={nft.likes}
                                views={nft.views}
                                creator={nft.creator}
                                description={nft.description}
                                mintDate={nft.mintDate}
                                edition={nft.edition}
                                blockchain={nft.blockchain}
                                previousPrice={nft.previousPrice}
                                highestBid={nft.highestBid}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;
