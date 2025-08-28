import projectgif1 from '../assets/project.gif';
import projectImg2 from '../assets/hospital.jpg';
import projectImg3 from '../assets/tourism.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const config = {
        projects: [
            {
                image: projectgif1,
                title: "Tutor Connect",
                description: "Developed a full-stack e-learning platform enabling tutors to register, upload classes, manage their profiles and students to book, request, manage their profiles, and schedule on tutors",
                technologies: ["Nuxt.js", "Adonis.js", "Tailwind CSS", "MySQL"],
                link: 'https://github.com/NishathMTM'
            },
            {
                image: projectImg2,
                title: "Hospital Management System",
                description: "Led a team to build a Java-based system for managing hospital workflows including patients, staff, appointments",
                technologies: ["Java"],
                link: 'https://github.com/NishathMTM'
            },
            {
                image: projectImg3,
                title: "Battitour.lk",
                description: "Built and customized a tourism website to showcase destinations in Sri Lanka with improved design, booking features, and SEO optimization",
                technologies: ["WordPress", "SEO"],
                link: ''
            }
        ]
    };

    return (
        <section id="projects" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-5">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-5"
                >
                    Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mb-16 max-w-2xl mx-auto"
                >
                    These are some of my best projects. I have built these with React, Nuxt, Adonis, TailwindCSS. Check them out!
                </motion.p>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {config.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-gray-600 px-2 py-1 rounded text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        View Project
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}