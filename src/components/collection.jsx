import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users } from 'lucide-react';

const CollectionCard = ({ creator, image, nftCount, totalLikes }) => (
    <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative cursor-pointer"
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
        <div className="relative">
            <img src={image} alt={creator} className="w-full h-48 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-xl font-bold text-white">{creator}</h3>
            </div>
        </div>
        <div className="p-4 relative">
            <div className="flex justify-between text-sm text-gray-600">
                <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {nftCount} NFTs</span>
                <span className="flex items-center"><Zap className="w-4 h-4 mr-1" /> {totalLikes}k likes</span>
            </div>
        </div>
    </motion.div>
);

export default CollectionCard;

