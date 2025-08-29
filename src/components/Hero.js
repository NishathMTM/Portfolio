import HeroImg from '../assets/my12.png';
import MyCV from '../assets/Mohamed Nishath-CV.pdf';
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";

import { motion } from 'framer-motion';

export default function Hero() {
    let config = {
        subtitle: 'I\'m a Full-Stack Developer',
        social: {
            github: 'https://github.com/NishathMTM',
            linkedin: 'https://www.linkedin.com/in/mohamed-nishath-a8b799242',
            whatsapp: 'https://wa.me/+940758757781'
        },
        link: MyCV
    };


    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 pt-20">
            <div className="container mx-auto px-28 py-32 flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="md:w-1/2 text-white text-center md:text-left"
                >
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-5xl md:text-6xl font-bold mb-4"
                    >
                        Hi, <br />
                        I'm <span className="text-yellow-400">Nishath</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-xl md:text-2xl mb-8"
                    >
                        {config.subtitle}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="flex justify-center md:justify-start space-x-6 py-6"
                    >

                        <motion.a
                            href={config.social.github}
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="hover:text-white transition-colors"
                        >
                            <BsGithub size={30} />
                        </motion.a>
                        <motion.a
                            href={config.social.linkedin}
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="hover:text-blue-400 transition-colors"
                        >
                            <AiOutlineLinkedin size={30} />
                        </motion.a>
                        <motion.a
                            href={config.social.whatsapp}
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="hover:text-blue-400 transition-colors"
                        >
                            <FaSquareWhatsapp size={30} />

                        </motion.a>

                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="md:w-1/3 mt-10 md:mt-0"
                >
                    <div>
                        <img
                            src={HeroImg}
                            alt='Nisath'
                            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-white shadow-lg"
                        />
                    </div>
                    <div className='container mx-auto'>
                        <div className="flex justify-center mb-8 py-8">
                            <motion.a
                                href={config.link}
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center"
                            >
                                Download CV
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}