import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const config = {
        email: 'mnishath21@gmail.com',
        phone: '+94 758757781',
        social: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            // wa.me format: https://wa.me/<countrycode+number> (no plus sign)
            whatsapp: 'https://wa.me/94758757781'
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const isValidEmail = (value) => {
        // Simple email validation
        return /[^@\s]+@[^@\s]+\.[^@\s]+/.test(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!formData.name.trim()) {
            setError('Please enter your name.');
            return;
        }
        if (!isValidEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!formData.message.trim()) {
            setError('Please enter your message.');
            return;
        }

        try {
            setSubmitting(true);

            // Compose a mailto link that opens the user's email client with all details pre-filled
            const subject = encodeURIComponent(`New message from ${formData.name}`);
            const bodyLines = [
                `You received a new message from your portfolio contact form:`,
                ``,
                `Name: ${formData.name}`,
                `Email: ${formData.email}`,
                ``,
                `Message:`,
                `${formData.message}`
            ];
            const body = encodeURIComponent(bodyLines.join('\n'));
            const mailtoHref = `mailto:${config.email}?subject=${subject}&body=${body}`;

            // Trigger the user's default email client
            window.location.href = mailtoHref;

            // Reset form after triggering
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
            setError('Something went wrong while preparing your message. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const whatsappMessage = encodeURIComponent(
        `Hello! My name is ${formData.name || '(your name)'} and my email is ${formData.email || '(your email)'}.%0A${formData.message || 'I would like to get in touch.'}`
    );

    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-5">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Contact Me
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Get In Touch</h3>
                        <p className="text-gray-300 mb-8">
                            If you want to connect, feel free to reach out to me. You can contact me via email, phone,
                            or connect with me on social media. I'm prompt in my responses and look forward to hearing from you!
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>{config.email}</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>{config.phone}</span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <motion.a
                                href={config.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="bg-gray-700 p-3 rounded-full"
                            >
                                <BsGithub size={24} />
                            </motion.a>
                            <motion.a
                                href={config.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="bg-gray-700 p-3 rounded-full"
                            >
                                <AiOutlineLinkedin size={24} />
                            </motion.a>
                            <motion.a
                                href={`${config.social.whatsapp}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="bg-gray-700 p-3 rounded-full"
                            >
                                <FaSquareWhatsapp size={30} />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            {error && (
                                <div className="text-red-400 text-sm">{error}</div>
                            )}

                            <motion.button
                                type="submit"
                                whileHover={{ scale: submitting ? 1 : 1.05 }}
                                whileTap={{ scale: submitting ? 1 : 0.95 }}
                                disabled={submitting}
                                className={`w-full text-white font-bold py-3 px-4 rounded-lg ${submitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                            >
                                {submitting ? 'Sending…' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}