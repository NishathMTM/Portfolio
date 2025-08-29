import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#Education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full bg-gray-900 bg-opacity-90 z-50 py-4"
        >
            <div className="container mx-auto px-5 flex justify-between items-center">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="font-bold text-2xl text-white"
                    href="#home"
                >
                    Nishath
                </motion.a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8 text-white">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                <a
                                    href={item.href}
                                    className="hover:text-blue-400 transition-colors duration-300"
                                >
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="md:hidden block text-white"
                >
                    {toggleMenu ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {toggleMenu && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-800"
                    >
                        <ul className="flex flex-col text-white">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border-b border-gray-700"
                                >
                                    <a
                                        href={item.href}
                                        className="block py-3 px-5 hover:bg-gray-700"
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}