export type UniverseId = 'education' | 'tech' | 'faith' | 'law';
export type AuthorId = 'youngin-kim' | 'eunhye-jee';

export interface Universe {
  id: UniverseId;
  name: string;
  description: string;
  iconName: string; 
  themeColor: string;
  promptContext: string;
}

export interface Author {
  id: AuthorId;
  name: string;
  role: string;
  bio: string;
  avatarColor: string; // Tailwind class
  linkedUniverses: UniverseId[];
}

export interface BlogPost {
  id: string;
  universeId: UniverseId;
  authorId: AuthorId; // Added author tracking
  title: string;
  excerpt: string;
  content: string;
  createdAt: string;
  tags: string[];
  status: 'published' | 'draft';
}

export interface AIResponse {
  content: string;
  suggestedTitle?: string;
  tags?: string[];
}