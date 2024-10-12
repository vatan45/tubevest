import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Coins, Zap, Play, ChevronRight, Users, Sparkles, BarChart, Shield, Globe, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-900 relative overflow-hidden">
      {/* Background gradient clouds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white z-10"></div>
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/2 left-1/4 w-full h-full bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Tv className="w-8 h-8 text-blue-600" />
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-blue-600'}`}>YTOpinion Market</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'Marketplace', 'Create', 'About'].map((item) => (
                <li key={item}>
                  <a href="#" className={`text-sm uppercase tracking-wider hover:text-blue-600 transition duration-300 ${scrolled ? 'text-gray-700' : 'text-gray-900'}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className={`md:hidden p-2 rounded-md ${scrolled ? 'bg-gray-100 text-gray-700' : 'bg-blue-100 text-blue-600'} hover:bg-blue-600 hover:text-white transition duration-300`}
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
              className="md:hidden bg-white shadow-lg"
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

      <main className="relative z-20">
        <section className="hero min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Tokenize Your <span className="text-blue-600">YouTube</span> Influence
              </motion.h1>
              <motion.p
                className="text-xl mb-8 text-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Create, buy, and sell NFTs based on YouTube channel opinions. Join the revolution of digital content monetization.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition duration-300 shadow-lg">
                  Learn More
                </button>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative flex justify-end">
              <motion.div
                className="w-64 h-64 lg:w-96 lg:h-96 bg-blue-100 rounded-full absolute top-0 right-0 filter blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="relative z-10"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Play className="w-32 h-32 lg:w-48 lg:h-48 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="features py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">Revolutionizing Content Monetization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Tv />, title: "Tokenize Your Channel", description: "Convert your YouTube influence into tradable digital assets." },
                { icon: <Coins />, title: "Dynamic Marketplace", description: "Buy, sell, and trade tokens in a vibrant ecosystem." },
                { icon: <Zap />, title: "Grow Your Value", description: "As your channel grows, so does the value of your tokens." },
                { icon: <Users />, title: "Community Engagement", description: "Foster a dedicated community of supporters and investors." },
                { icon: <Sparkles />, title: "Exclusive Perks", description: "Offer unique benefits to your token holders." },
                { icon: <ChevronRight />, title: "Future-Proof Content", description: "Secure your content's value in the digital age." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {React.cloneElement(item.icon, { size: 32 })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="how-it-works py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Connect Your Channel", description: "Link your YouTube account and verify your identity." },
                { step: "2", title: "Create Your Token", description: "Set the initial value and supply of your channel's token." },
                { step: "3", title: "Engage Your Audience", description: "Promote your token and offer exclusive perks to holders." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute -left-6 -top-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold transform rotate-12">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-8">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">Benefits of YTOpinion Market</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { icon: <BarChart />, title: "Data-Driven Insights", description: "Gain valuable analytics on your token's performance and audience engagement." },
                { icon: <Shield />, title: "Secure Transactions", description: "Benefit from blockchain technology for safe and transparent token exchanges." },
                { icon: <Globe />, title: "Global Reach", description: "Connect with a worldwide audience of potential investors and supporters." },
                { icon: <Coins />, title: "Multiple Revenue Streams", description: "Diversify your income through token sales, trading fees, and exclusive content." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    {React.cloneElement(item.icon, { size: 32 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Alex Johnson", channel: "TechReviews", quote: "YTOpinion Market has transformed how I monetize my channel. It's a game-changer!" },
                { name: "Sarah Lee", channel: "CookingWithSarah", quote: "The engagement from my token holders is incredible. They feel like true partners in my content journey." },
                { name: "Mike Brown", channel: "FitnessForAll", quote: "I've seen a significant increase in my revenue since joining. Highly recommended for all content creators!" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-lg mb-6 italic">"{item.quote}"</p>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.channel}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta py-24 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Tokenize Your Influence?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">Join the future of content monetization and unlock the true value of your YouTube channel.</p>
            <button className="px-12 py-6 bg-white text-blue-600 rounded-full text-xl font-bold hover:bg-gray-100 transition duration-300 shadow-lg">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">YTOpinion Market</h3>
              <p className="text-gray-400">Revolutionizing content monetization through NFTs and blockchain technology.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Marketplace', 'Create', 'About'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                {['FAQ', 'Documentation', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                {['Twitter', 'Discord', 'Telegram'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} YTOpinion Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}