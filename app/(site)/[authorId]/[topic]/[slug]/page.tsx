import { reader } from '@/lib/keystatic';
import { notFound } from 'next/navigation';
import CustomMDX from '@/components/custom-mdx';
import { UNIVERSES, THEME_CLASSES, AUTHORS } from '@/lib/constants';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

export default async function PostPage({ params }: { params: Promise<{ authorId: string; topic: string; slug: string }> }) {
  const { authorId, topic, slug } = await params;
  
   // Validate ownership
  const author = AUTHORS.find(a => a.id === authorId);
  if (!author || !author.linkedUniverses.includes(topic as any)) {
      notFound();
  }

  const universe = UNIVERSES.find(u => u.id === topic);
  if (!universe) notFound();

  const theme = THEME_CLASSES[universe.themeColor] || THEME_CLASSES.slate;

  let post;
  try {
    // @ts-ignore
    post = await reader.collections[topic].read(slug);
  } catch (e) {
    notFound();
  }

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Header / Nav */}
      <div className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-20">
         <div className="max-w-3xl mx-auto px-6 py-4 flex items-center space-x-4">
            <Link 
              href={`/${authorId}/${topic}`}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <span className={`font-bold ${theme.text} uppercase tracking-wider text-xs`}>
               {universe.name}
            </span>
         </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-12">
        <header className="mb-12">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
             <Calendar size={16} />
             <time>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric'})}</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          {post.description && (
             <p className="text-xl text-gray-500 leading-relaxed font-light">
               {post.description}
             </p>
          )}
        </header>
        
        <div className="prose prose-lg md:prose-xl max-w-none text-gray-800">
           <CustomMDX source={await post.content()} topic={topic} />
        </div>
      </div>
    </article>
  );
}
