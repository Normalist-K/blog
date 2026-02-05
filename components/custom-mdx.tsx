import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeShiki from '@shikijs/rehype';
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Custom components
const components = {
  h1: (props: any) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-semibold mt-6 mb-3" />,
  // Add more as needed
};

export default async function CustomMDX({ source, topic }: { source: string, topic?: string }) {
  
  const options: any = {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkFootnotes],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  };

  // Enable Shiki only for Tech topic or globally? User asked for Tech.
  // But generally good to have everywhere if code is used.
  // However, specifically "Tech: Dark Mode & Monospace".
  // Let's add Shiki.
  
  options.mdxOptions.rehypePlugins.push([
    rehypeShiki,
    {
      // Use a theme that matches dark mode or light mode?
      // Tech is dark mode. Law is light.
      // We can use 'github-dark' for tech and 'github-light' for others?
      // Or dual themes.
      theme: topic === 'tech' ? 'github-dark' : 'github-light',
      inline: false
    }
  ]);

  const { content } = await compileMDX({
    source,
    options,
    components,
  });

  return <div className="mdx-content">{content}</div>;
}
