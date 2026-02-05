import Link from 'next/link';
import { reader } from '@/lib/keystatic';
import { notFound } from 'next/navigation';
import { Clock, BookOpen, ArrowLeft } from 'lucide-react';
import { UNIVERSES, THEME_CLASSES, AUTHORS } from '@/lib/constants';

// We now receive both authorId and topic from params
export default async function TopicPage({ params }: { params: Promise<{ authorId: string; topic: string }> }) {
  const { authorId, topic } = await params;
  
  const author = AUTHORS.find(a => a.id === authorId);
  if (!author) notFound();

  // Validate topic ownership
  if (!author.linkedUniverses.includes(topic as any)) {
      notFound();
  }
  
  const universe = UNIVERSES.find(u => u.id === topic);
  if (!universe) notFound();

  const theme = THEME_CLASSES[universe.themeColor] || THEME_CLASSES.slate;

  let posts;
  try {
     // @ts-ignore
    posts = await reader.collections[topic].all();
  } catch (e) {
    notFound();
  }

  // Sort by date desc
  posts.sort((a: any, b: any) => {
    return new Date(b.entry.publishedDate).getTime() - new Date(a.entry.publishedDate).getTime();
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white border-b border-gray-200">
        {/* Top Navigation Bar */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link 
              href={`/${authorId}`} 
              className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors font-medium hover:bg-gray-100 px-3 py-2 rounded-lg -ml-3"
            >
              <ArrowLeft size={18} />
              <span>{author.name}&apos;s Space</span>
            </Link>
        </div>

        {/* Title Section */}
        <div className="max-w-6xl mx-auto px-6 pb-8 md:pb-12 pt-4">
             <div>
               <div className="flex items-center gap-3 mb-2">
                 <span className={`w-3 h-3 rounded-full ${theme.bg}`}></span>
                 <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                   {universe.name}
                 </h1>
               </div>
               <p className="text-lg text-gray-500 max-w-2xl">
                 {universe.description}
               </p>
             </div>
        </div>
      </header>

      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => {
            return (
              <Link 
                key={post.slug}
                href={`/${authorId}/${topic}/${post.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-200 transition-all cursor-pointer flex flex-col h-72 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${theme.bg} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${theme.lightBg} ${theme.text}`}>
                      Article
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700">
                    {post.entry.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                    {post.entry.description || "No description"}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                     {/* Placeholder for Author */}
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock size={14} className="mr-1" />
                    {new Date(post.entry.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              </Link>
            );
          })}
          
          {posts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <p>No posts yet. Start writing via Keystatic!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
