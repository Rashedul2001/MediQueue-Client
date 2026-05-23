'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AnimatePresence, motion } from "motion/react"
import { useSession } from '@/lib/auth-client';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';
import { useAuthActions } from '@/hooks/authActions';
import { usePathname } from 'next/navigation';
import { ProfileDropdown } from './ui/ProfileDropdown';

const menuItems = [
    { label: "Home", href: "/" },
    { label: "Tutors", href: "/tutors" },
    { label: "Add Tutor", href: "/add-tutor", private: true },
    { label: "My Tutors", href: "/my-tutors", private: true },
    { label: "My Booked Sessions", href: "/booked-sessions", private: true }
];

const Navbar = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const { logoutAndRedirect } = useAuthActions();
    const pathname = usePathname();


    return (
        <nav className='top-0 z-50 sticky bg-background shadow-sm'>
            <div className="mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="flex justify-between items-center h-16">
                    <Link href='/' className='flex items-center gap-2'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-8 h-8 shrink-0"
                        >
                            <Image src="/icon.png" alt="MediQueue Logo" width={32} height={32} loading="eager" />

                        </motion.button>
                        <span className='font-bold text-xl gradient-text'>MediQueue</span>
                    </Link>

                    <div className={`hidden ${session ? "lg:flex" : "md:flex"} items-center gap-4`}>
                        {menuItems.map((item, index) => (
                            (!item?.private || session) && (
                                <Link key={index} href={item.href}
                                    className={`p-2 font-medium text-foreground hover:text-primary transition-colors ${pathname === item.href && "active-desk"} `}
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </div>

                    <div className='flex items-center gap-4'>

                        {
                            session ?
                                <div className='flex items-center gap-4'>
                                    <ProfileDropdown />

                                    <motion.button
                                        onClick={() => logoutAndRedirect("/")}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-2 bg-destructive hover:bg-red-700 px-4 py-2 rounded-lg text-white transition-colors"
                                    >
                                        <MdLogout size={20} />
                                        <span className="hidden sm:inline">Logout</span>
                                    </motion.button>
                                </div>
                                :
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
                        }
                        {
                            <button onClick={() => setIsOpen((prev) => !prev)}
                                className={` ${session ? "lg:hidden" : "md:hidden"} hover:bg-muted p-2 rounded-lg`}
                            >
                                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}

                            </button>
                        }
                    </div>

                </div>

                {/* mobile menu section */}
                <AnimatePresence>
                    {
                        isOpen && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                exit={{ opacity: 0, height: 0 }}
                                className={`absolute right-0  z-10 ${session ? "lg:hidden " : 'md:hidden'} bg-background border-t border-border backdrop-blur-md`}

                            >
                                <div className='flex flex-col gap-2 p-4'>
                                    {menuItems.map((item, index) => (
                                        (!item?.private || session) && (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                className={`hover:bg-muted px-4 py-2 rounded-lg font-semibold text-foreground  transition-colors ${pathname === item.href && "active-mob"}`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                    ))}

                                    {
                                        session ?
                                            <motion.button
                                                onClick={() => logoutAndRedirect("/")}
                                                whileHover={{ scale: 1.05 }}
                                                className="bg-destructive hover:bg-red-700 px-4 py-2 rounded-lg text-white text-center transition-colors"
                                            >
                                                <span >Logout</span>
                                            </motion.button>
                                            :
                                            <div className='flex flex-col gap-2 text-center'>
                                                <Link
                                                    onClick={() => setIsOpen(false)}
                                                    href="/login"
                                                    className="hover:bg-muted px-4 py-2 rounded-lg font-semibold text-primary transition-colors"
                                                >
                                                    Login
                                                </Link>
                                                <Link
                                                    onClick={() => setIsOpen(false)}
                                                    href="/register"
                                                    className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg font-semibold text-white transition-colors"
                                                >
                                                    Register
                                                </Link>
                                            </div>
                                    }
                                </div>


                            </motion.div>
                        )
                    }
                </AnimatePresence>

            </div>

        </nav >

    );
};

export default Navbar;