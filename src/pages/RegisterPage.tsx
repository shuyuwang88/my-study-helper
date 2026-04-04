import { ArrowRight, BookOpen, Lock, Mail, Shield, User, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password = 'At least 8 characters, including letters and numbers';
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validate()) {
        console.log('Form submitted', form);
        // call backend
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // delete error message when inputing new contents
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7fa] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="mb-6 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <BookOpen className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold text-indigo-600">MyStudyHelper</span>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Start Your Learning
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            An AI-powered learning assistant that helps users explore topics, understand complex concepts, and organize knowledge through explanations, translation, and smart flashcard generation.
          </p>
        </div>

        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <div className="relative">
                <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Alexander Hamilton"
                  className={`h-12 w-full rounded-xl border bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-4
                    ${errors.fullName ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'}`}
                />
              </div>
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="scholar@university.edu"
                  className={`h-12 w-full rounded-xl border bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-4
                    ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'}`}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                Secure Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••••"
                  className={`h-12 w-full rounded-xl border bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-4
                    ${errors.password ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'}`}
                />
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••••"
                  className={`h-12 w-full rounded-xl border bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-4
                    ${errors.confirmPassword ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'}`}
                />
              </div>
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              Create Account
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 rounded-2xl bg-violet-50 px-4 py-3 text-xs leading-5 text-slate-500">
            <p className="flex items-start gap-2">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
              <span>
                By proceeding, you agree to MyStudyHelper's usage terms. Your notes, questions, and learning data are securely processed to provide personalized AI assistance.
              </span>
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Already using MyStudyHelper?{' '}
          <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Log In
          </Link>
        </p>

        <div className="mt-10 grid grid-cols-3 gap-8 text-center text-[11px] uppercase tracking-[0.18em] text-slate-400">
          <div className="flex flex-col items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            <span>AI Learning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Secure & Private</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <span>Smart Study</span>
          </div>
        </div>
      </div>
    </div>
  );
}