import { BookOpen, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import materials_img from '../assets/materials.jpg';
import asking_img from '../assets/asking.jpg';

const cards = [
  {
    title: 'Learn from Materials',
    desc: 'Upload PDFs, notes, or text and get translation, explanation, and summaries.',
    image: materials_img,
  },
  {
    title: 'Learn by Asking',
    desc: 'Ask AI about a topic you want to learn and turn the results into flashcards.',
    image: asking_img,
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col justify-between">
      <div className="flex flex-1 px-10 py-8">
        {/* Left */}
        <div className="w-[45%] flex flex-col justify-center pl-16 pr-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="text-blue-600" size={32} />
            <h1 className="text-4xl font-bold text-blue-600">MyStudyHelper</h1>
          </div>

          {/* Main text */}
          <div className="mb-12">
            <h2 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
              Your Digital
              <br />
              <span className="text-blue-600">Study Assistant.</span>
            </h2>

            <p className="text-1xl text-gray-600 leading-relaxed max-w-xl">
              Understand study materials more easily with translation,
              explanation, summaries, and flashcard generation in one place.
            </p>
          </div>

          {/* Feature cards */}
          <div className="flex gap-6 mt-10">
            {cards.map((card) => (
              <div
                key={card.title}
                className="relative w-56 h-40 rounded-2xl overflow-hidden shadow cursor-pointer transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 p-4">
                  <Sparkles className="mb-2 text-white" size={16} />
                  <h3 className="mb-2 text-sm font-semibold text-white">{card.title}</h3>
                  <p className="text-xs text-gray-200">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 flex justify-center items-start pt-4">
          <div className="w-130 bg-white rounded-3xl shadow-md px-10 py-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Start Learning!
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Sign in to continue your learning workspace.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold tracking-wide text-gray-700 uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-gray-100 px-5 py-4 text-base outline-none border border-transparent focus:border-blue-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold tracking-wide text-gray-700 uppercase">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-gray-100 px-5 py-4 text-base outline-none border border-transparent focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition"
              >
                Log In
              </button>
            </form>

            <div className="flex items-center gap-4 my-8">
              <div className="h-px flex-1 bg-gray-200"></div>
              <span className="text-sm tracking-[0.2em] text-gray-400">OR</span>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            <button className="w-full rounded-xl bg-gray-100 py-4 text-lg font-medium text-gray-800 hover:bg-gray-200 transition">
              Continue with Google
            </button>

            <p className="text-center text-base text-gray-500 mt-8">
              New here?{' '}
              <button 
               onClick={() => navigate('/register')}
               className="text-blue-600 font-medium hover:underline">
                Create an account
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-10 py-4 flex items-center justify-between text-sm text-gray-400">
        <p>© 2026 MyStudyHelper. All rights reserved.</p>
        <div className="flex gap-8">
          <span>Security</span>
          <span>Privacy</span>
          <span>Academic Ethics</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;