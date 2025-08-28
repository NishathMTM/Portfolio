import HeroImg from '../assets/my12.png';
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { motion } from 'framer-motion';

export default function Hero() {
    const config = {
        subtitle: 'I\'m a Full-Stack Developer',
        social: {
            github: 'https://github.com/NishathMTM',
            linkedin: 'https://www.linkedin.com/in/mohamed-nishath-a8b799242'
        }
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
                </motion.div>
            </div>
        </section>
    );
}