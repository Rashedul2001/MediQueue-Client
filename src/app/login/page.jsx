'use client'
import React, { useState } from 'react';
import { motion } from 'motion/react'
import { FiAlertCircle, FiArrowRight, FiEye, FiLoader, FiLock, FiMail } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import { BsEyeSlash } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const [submitting, setSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        setSubmitting(true);
    }


    return (
        <div className="flex justify-center items-center bg-linear-to-br from-background to-background-secondary px-4 py-12 min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
            >
                <div className="bg-card shadow-2xl p-8 border border-border rounded-2xl">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
                        <h1 className="mb-2 font-bold text-3xl gradient-text">Welcome Back</h1>
                        <p className="text-text-secondary">Sign in to your MediQueue account</p>
                    </motion.div>

                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

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
                                    {...register("email", { required: { value: true, message: "Email is required" }, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" } })}
                                    placeholder="you@example.com"
                                    className={`bg-background py-3 pr-4 pl-12 border-2 ${errors.email ? 'border-error' : 'border-border'} focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full transition-all`}
                                />
                            </div>
                            {errors.email && (
                                <div className="flex items-center gap-2 mt-2 text-error text-sm">
                                    <FiAlertCircle size={16} />
                                    {errors.email.message}
                                </div>
                            )}
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
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: { value: true, message: "Password is required" }, minLength: { value: 6, message: "Password must be at least 6 characters long" }, pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                            message: "Password must contain at least one uppercase and one lowercase letter"
                                        }
                                    })}
                                    placeholder="••••••••"
                                    className={`bg-background py-3 pr-12 pl-12 border-2 ${errors.password ? 'border-error' : 'border-border'} focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full transition-all`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="top-1/2 right-4 absolute text-text-secondary hover:text-foreground transition-colors -translate-y-1/2"
                                >
                                    {showPassword ? <BsEyeSlash size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                            {errors.password && (
                                <div className="flex items-center gap-2 mt-2 text-error text-sm">
                                    <FiAlertCircle size={16} />
                                    {errors.password.message}
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-between items-center text-sm"
                        >
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded w-4 h-4" />
                                <span className="text-text-secondary">Remember me</span>
                            </label>
                            <a href="#" className="font-semibold text-primary hover:text-primary-dark transition-colors">
                                Forgot password?
                            </a>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="group flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark py-3 rounded-lg w-full font-bold text-white transition-all"
                        >
                            {submitting ? (
                                <FiLoader className="animate-spin" size={24} />
                            ) : (
                                <>
                                    Sign In
                                    <FiArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3 my-6"
                    >
                        <div className="flex-1 border-border border-t" />
                        <span className="text-text-secondary text-sm">Or continue with</span>
                        <div className="flex-1 border-border border-t" />
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="group flex justify-center items-center gap-3 hover:bg-muted py-3 border-2 border-border hover:border-primary rounded-lg w-full font-semibold text-foreground transition-all"
                    >
                        <FaGoogle className="group-hover:text-primary transition-colors" size={20} />
                        Continue with Google
                    </motion.button>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-6 text-text-secondary text-center"
                    >
                        Don&apos;t have an account?{' '}
                        <Link href="/register" className="font-bold text-primary hover:text-primary-dark transition-colors">
                            Create one
                        </Link>
                    </motion.p>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 text-text-secondary text-sm text-center"
                >
                    Secured with industry-standard encryption
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LoginPage;