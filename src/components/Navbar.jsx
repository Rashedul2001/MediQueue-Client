'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from "motion/react"
import { FaMoon } from 'react-icons/fa';

const menuItems = [
    { label: "Home", href: "/" },
    { label: "Tutors", href: "/tutors" },
    { label: "Add Tutor", href: "/add-tutor" },
    { label: "My Tutors", href: "/my-tutors" },
    { label: "My Booked Sessions", href: "/booked-sessions" }
];

const Navbar = () => {


    return (
        <nav className='top-0 z-100 sticky bg-background shadow-sm'>
            <div className='flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-16'>
                <Link href='/' className='flex items-center gap-2'>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src="/icon.png" alt="Logo" width={32} height={32} />

                    </motion.button>
                    <span className='hidden sm:inline font-bold text-xl gradient-text'>MediQueue</span>
                </Link>

                <div className='hidden md:flex items-center gap-8'>
                    {menuItems.map((item, index) => (
                        <Link key={index} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className='flex items-center gap-4'>
                    <motion.button>
                        <FaMoon />
                    </motion.button>

                    <div className='hidden sm:flex gap-2'>
                        <Link
                            href="/login"
                            className="hover:bg-muted px-4 py-2 rounded-lg font-semibold text-primary transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg font-semibold text-white transition-colors"
                        >
                            Register
                        </Link>

                    </div>
                </div>
            </div>

        </nav >

    );
};

export default Navbar;