"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
    FiUser,
    FiMail,
    FiLock,
    FiEye,
    FiArrowRight,
    FiImage,
} from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
    return (
        <div className="flex justify-center items-center bg-linear-to-br from-background to-background-secondary px-4 py-12 min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
            >
                <div className="bg-card shadow-2xl p-8 border border-border rounded-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 text-center"
                    >
                        <h1 className="mb-2 font-bold text-3xl gradient-text">
                            Join MediQueue
                        </h1>
                        <p className="text-text-secondary">
                            Create your account to get started
                        </p>
                    </motion.div>

                    <form className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <label className="block mb-2 font-semibold text-foreground text-sm">
                                Full Name
                            </label>
                            <div className="relative">
                                <FiUser
                                    className="top-1/2 left-4 absolute text-text-secondary -translate-y-1/2"
                                    size={18}
                                />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="bg-background py-3 pr-4 pl-12 border-2 border-border focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full transition-all"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                        >
                            <label className="block mb-2 font-semibold text-foreground text-sm">
                                Email Address
                            </label>
                            <div className="relative">
                                <FiMail
                                    className="top-1/2 left-4 absolute text-text-secondary -translate-y-1/2"
                                    size={18}
                                />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="bg-background py-3 pr-4 pl-12 border-2 border-border focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full transition-all"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <label className="block mb-2 font-semibold text-foreground text-sm">
                                Photo URL
                            </label>
                            <div className="relative">
                                <FiImage
                                    className="top-1/2 left-4 absolute text-text-secondary -translate-y-1/2"
                                    size={18}
                                />
                                <input
                                    type="url"
                                    placeholder="https://example.com/photo.jpg"
                                    className="bg-background py-3 pr-4 pl-12 border-2 border-border focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full text-sm transition-all"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 }}
                        >
                            <label className="block mb-2 font-semibold text-foreground text-sm">
                                Password
                            </label>
                            <div className="relative">
                                <FiLock
                                    className="top-1/2 left-4 absolute text-text-secondary -translate-y-1/2"
                                    size={18}
                                />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-background py-3 pr-12 pl-12 border-2 border-border focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full transition-all"
                                />
                                <button
                                    type="button"
                                    className="top-1/2 right-4 absolute text-text-secondary hover:text-foreground transition-colors -translate-y-1/2"
                                >
                                    <FiEye size={18} />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label className="block mb-2 font-semibold text-foreground text-sm">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <FiLock
                                    className="top-1/2 left-4 absolute text-text-secondary -translate-y-1/2"
                                    size={18}
                                />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-background py-3 pr-12 pl-12 border-2 border-border focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full transition-all"
                                />
                                <button
                                    type="button"
                                    className="top-1/2 right-4 absolute text-text-secondary hover:text-foreground transition-colors -translate-y-1/2"
                                >
                                    <FiEye size={18} />
                                </button>
                            </div>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="group flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark mt-2 py-3 rounded-lg w-full font-bold text-white transition-all"
                        >
                            Create Account
                            <FiArrowRight
                                className="transition-transform group-hover:translate-x-1"
                                size={18}
                            />
                        </motion.button>
                    </form>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-3 my-6"
                    >
                        <div className="flex-1 border-border border-t" />
                        <span className="text-text-secondary text-sm">Or sign up with</span>
                        <div className="flex-1 border-border border-t" />
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="group flex justify-center items-center gap-3 hover:bg-muted py-3 border-2 border-border hover:border-primary rounded-lg w-full font-semibold text-foreground transition-all"
                    >
                        <FaGoogle
                            className="group-hover:text-primary transition-colors"
                            size={20}
                        />
                        Sign up with Google
                    </motion.button>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-text-secondary text-center"
                    >
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-bold text-primary hover:text-primary-dark transition-colors"
                        >
                            Sign in
                        </Link>
                    </motion.p>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="mt-6 text-text-secondary text-sm text-center"
                >
                    By registering, you agree to our Terms of Service and Privacy Policy
                </motion.p>
            </motion.div>
        </div>
    );
}
export default RegisterPage;