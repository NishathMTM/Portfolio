import aboutImg from '../assets/my2.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const config = {
    line1: 'Hi, My name is Nishath. I am a Full stack web developer. I build modern websites with React.js and Tailwind CSS.',
    line2: 'I\'m an Information Technology undergraduate passionate about full-stack development. I\'ve built projects like Tutor Connect (Nuxt.js, Adonis.js), led a Hospital Management System (Java), developed Battitour.lk (WordPress), and created my personal portfolio with React.js and Tailwind CSS. I enjoy solving problems and turning ideas into impactful digital solutions.',
};

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = {
        frontend: ['TypeScript', 'React', 'Nuxt.js (v3)', 'Tailwind CSS', 'HTML5', 'CSS3'],
        backend: ['JAVA', 'AdonisJS', 'REST API Development'],
        database: ['MySQL', 'Lucid ORM'],
        tools: ['Docker', 'Postman', 'HeidiSQL', 'Git & GitHub', 'WebStorm'],
        soft: ['Communication', 'Collaboration', 'Leadership', 'Problem Solving', 'Adaptability', 'Fast Learner', 'Continuous Improvement']
    };

    const SkillCategory = ({ title, skills, delay }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4"
        >
            <h3 className="text-lg font-semibold mb-2 text-blue-400">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section id="about" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-5">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    About Me
                </motion.h2>

                <div ref={ref} className="flex flex-col md:flex-row">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="md:w-1/2 mb-10 md:mb-0 flex justify-center"
                    >
                        <img
                            src={aboutImg}
                            alt="About Nishath"
                            className="rounded-lg shadow-lg w-full h-1/3 max-w-md"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="md:w-1/2 md:pl-12"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Who I Am</h3>
                        <p className="mb-4">{config.line1}</p>
                        <p className="mb-8">{config.line2}</p>

                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Skills</h3>
                        <div className="space-y-4">
                            <SkillCategory title="Frontend" skills={skills.frontend} delay={0.3} />
                            <SkillCategory title="Backend" skills={skills.backend} delay={0.4} />
                            <SkillCategory title="Database" skills={skills.database} delay={0.5} />
                            <SkillCategory title="Tools & Platforms" skills={skills.tools} delay={0.6} />
                            <SkillCategory title="Soft Skills" skills={skills.soft} delay={0.7} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}