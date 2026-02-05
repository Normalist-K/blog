import { notFound } from 'next/navigation';
import { AUTHORS } from '@/lib/constants';
import AuthorDashboard from '@/components/author-dashboard';

export async function generateStaticParams() {
  return AUTHORS.map((author) => ({
    authorId: author.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ authorId: string }> }) {
  const { authorId } = await params;
  if (!AUTHORS.find(a => a.id === authorId)) {
    notFound();
  }
  return <AuthorDashboard authorId={authorId} />;
}
