'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AUTHORS } from '@/lib/constants';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">OmniVoice Family</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Technology, Law, Faith, and Education — interwoven in our daily lives.
            <br />
            Select a profile to explore our specific worlds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {AUTHORS.map(author => (
            <Link 
              key={author.id} 
              href={`/${author.id}`}
              className="group relative bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 transform hover:-translate-y-1"
            >
               <div className={`w-20 h-20 rounded-2xl ${author.avatarColor} text-white flex items-center justify-center mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                 {author.name.charAt(0)}
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-between">
                 {author.name}
                 <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-indigo-500" />
               </h3>
               <p className="text-sm text-indigo-600 font-bold uppercase tracking-wider mb-4">{author.role}</p>
               <p className="text-gray-600 leading-relaxed">{author.bio}</p>
            </Link>
          ))}
        </div>

        <div className="prose prose-lg mx-auto text-gray-500 text-center max-w-2xl">
          <p>
            This platform is an experiment in "Vibe Coding" — built to unify our diverse interests into a single, seamless reading experience. Whether you are here for legal advice on Social Security, insights into AI development, thoughts on alternative faith, or parenting tips, we hope you find value in our voices.
          </p>
        </div>
      </div>
    </div>
  );
}
