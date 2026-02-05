import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-lg w-full transform transition-all hover:scale-105 duration-300">
        <h2 className="text-8xl font-black text-indigo-500 mb-6">404</h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h3>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
        >
          <Home size={20} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
