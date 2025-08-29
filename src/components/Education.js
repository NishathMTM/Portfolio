import { motion } from 'framer-motion';
import MyCV from '../assets/Mohamed Nishath-CV.pdf'

export default function Education() {

    const experiences = [
        {
            role: "Web Developer Intern",
            description: "Assisted in developing and maintaining web applications. Collaborated with senior developers on project tasks."
        }
    ];

    const education = [
        {
            degree: "Higher National Diploma in Information Technology",
            institution: "SLIATE",
            period: "2022 - 2025",
            description: "Focus on software development, database management, and web technologies."
        }
    ];

    return (
        <section id="resume" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-5">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto"
                >
                    {/*<div className="flex justify-center mb-8">*/}
                    {/*    <motion.a*/}
                    {/*        href={config.link}*/}
                    {/*        download*/}
                    {/*        whileHover={{ scale: 1.05 }}*/}
                    {/*        whileTap={{ scale: 0.95 }}*/}
                    {/*        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center"*/}
                    {/*    >*/}
                    {/*        Download CV*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">*/}
                    {/*            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />*/}
                    {/*        </svg>*/}
                    {/*    </motion.a>*/}
                    {/*</div>*/}

                    {/* Experience */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Experience</h3>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-800 p-6 rounded-lg"
                                >
                                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                                    <p className="text-blue-300 mb-2">{exp.company}  {exp.period}</p>
                                    <p className="text-gray-300">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Education</h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-800 p-6 rounded-lg"
                                >
                                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                                    <p className="text-blue-300 mb-2">{edu.institution} | {edu.period}</p>
                                    <p className="text-gray-300">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Certifications</h3>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Web Design - Studyz Accadamy</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}