

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-5 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    © Nishath {new Date().getFullYear()}
                </motion.p>
            </div>
        </footer>
    );
}