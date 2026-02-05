import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  BookOpen, 
  Cpu, 
  Church, 
  Scale, 
  ArrowLeft,
  Info
} from 'lucide-react';
import { AUTHORS, UNIVERSES, THEME_CLASSES } from '@/lib/constants';

// Icons Map
const Icons: Record<string, React.FC<any>> = {
  Baby: BookOpen,
  Cpu: Cpu,
  Church: Church,
  Scale: Scale,
};

export default function AuthorDashboard({ authorId }: { authorId: string }) {
  const author = AUTHORS.find((a) => a.id === authorId);

  if (!author) {
    notFound();
  }

  const linkedUniverses = UNIVERSES.filter(u => author.linkedUniverses.includes(u.id as any));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <div></div>

          <Link 
            href="/"
            className="flex items-center space-x-1 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Info size={16} />
            <span>About us</span>
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${author.avatarColor} text-white flex items-center justify-center shadow-xl shrink-0 text-5xl font-bold`}>
            {author.name.charAt(0)}
          </div>
          <div className="text-center md:text-left space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{author.name}</h1>
              <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold">
                {author.role}
              </div>
            </div>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              {author.bio}
            </p>
          </div>
        </div>

        {/* Universe Grid */}
        <div>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">
            My Blog Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkedUniverses.map(u => {
              const Icon = Icons[u.iconName] || BookOpen;
              const theme = THEME_CLASSES[u.themeColor] || THEME_CLASSES.slate;
              
              return (
                <Link
                    key={u.id}
                    href={`/${author.id}/${u.id}`}
                    className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all text-left flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${theme.lightBg} ${theme.text} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <ArrowLeft size={16} className="rotate-180 text-gray-300 group-hover:text-gray-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {u.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {u.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
