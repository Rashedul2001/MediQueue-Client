'use client'

import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { motion } from 'motion/react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerSections = [
        {
            title: 'Learning Services',
            links: [
                { label: 'Find Tutors', href: '/tutors' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQs', href: '#faqs' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', href: '#about' },
                { label: 'Blog', href: '#blog' },
                { label: 'Careers', href: '#careers' },
                { label: 'Contact', href: '#contact' },
            ],
        },
        {
            title: 'Support',
            links: [
                { label: 'Help Center', href: '#help' },
                { label: 'Terms of Service', href: '#terms' },
                { label: 'Privacy Policy', href: '#privacy' },
                { label: 'Contact Us', href: '#contact' },
            ],
        },
    ]

    const socialLinks = [
        { icon: FaFacebook, href: '#', label: 'Facebook' },
        { icon: FaTwitter, href: '#', label: 'Twitter (X)' },
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
    ]

    return (
        <footer className="bg-background border-border border-t">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
                {/* Main Footer Content */}
                <div className="gap-8 grid grid-cols-1 md:grid-cols-4 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h3 className="font-bold text-xl gradient-text">MediQueue</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Connect with qualified tutors and enhance your learning journey.
                        </p>
                        <div className="flex gap-3 pt-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-muted hover:bg-primary p-2 rounded-lg text-foreground hover:text-white transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Footer Links */}
                    {footerSections.map((section, idx) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-4"
                        >
                            <h4 className="font-bold text-foreground">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-text-secondary hover:text-primary text-sm transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-8 pt-8 border-border border-t"
                >
                    <h3 className="mb-4 font-bold text-foreground">Contact Information</h3>
                    <div className="gap-6 grid grid-cols-1 sm:grid-cols-3">
                        <div className="flex items-center gap-3">
                            <FiMail className="text-primary" size={20} />
                            <div>
                                <p className="text-text-secondary text-sm">Email</p>
                                <a href="mailto:support@mediqueue.com" className="text-foreground hover:text-primary transition-colors">
                                    support@mediqueue.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiPhone className="text-primary" size={20} />
                            <div>
                                <p className="text-text-secondary text-sm">Phone</p>
                                <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiMapPin className="text-primary" size={20} />
                            <div>
                                <p className="text-text-secondary text-sm">Address</p>
                                <p className="text-foreground">123 Learning St, City, Country</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex sm:flex-row flex-col justify-between items-center gap-4 pt-8 border-border border-t"
                >
                    <p className="text-text-secondary text-sm">
                        &copy; {currentYear} MediQueue. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="text-border">|</span>
                        <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <span className="text-border">|</span>
                        <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
