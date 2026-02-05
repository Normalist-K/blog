import { Universe, BlogPost, Author } from '@/lib/types';

export const AUTHORS: Author[] = [
  {
    id: 'youngin-kim',
    name: '김영인',
    role: 'CTO @ Fluent',
    bio: 'Technologist exploring the intersection of AI, Faith, and Parenting.',
    avatarColor: 'bg-indigo-500',
    linkedUniverses: ['tech', 'education', 'faith']
  },
  {
    id: 'eunhye-jee',
    name: '지은혜',
    role: 'Lawyer',
    bio: 'Legal expert specializing in Social Security and dedicated mother.',
    avatarColor: 'bg-rose-500',
    linkedUniverses: ['law']
  }
];

export const UNIVERSES: Universe[] = [
  {
    id: 'education',
    name: '자녀 교육',
    description: '아이들의 성장과 배움에 대한 이야기',
    iconName: 'Baby',
    themeColor: 'amber',
    promptContext: 'You are an expert in child development and education. Write with a warm, encouraging, and insightful tone suitable for parents.',
  },
  {
    id: 'tech',
    name: 'Vibe Coding & AI',
    description: 'Fluent CTO의 AI 기술과 개발 인사이트',
    iconName: 'Cpu',
    themeColor: 'indigo',
    promptContext: 'You are a CTO of a tech startup specializing in AI. You practice "Vibe Coding" - intuitive, AI-assisted development. Write in a technical yet accessible, visionary, and modern tone.',
  },
  {
    id: 'faith',
    name: '대안적 교회',
    description: '새로운 신앙 공동체와 영성에 대한 고민',
    iconName: 'Church',
    themeColor: 'emerald',
    promptContext: 'You are a thoughtful theologian exploring alternative church movements. Write with a reflective, peaceful, and open-minded tone.',
  },
  {
    id: 'law',
    name: '사회보장법',
    description: '전문 변호사의 알기 쉬운 법률 가이드',
    iconName: 'Scale',
    themeColor: 'slate',
    promptContext: 'You are a professional lawyer specializing in Social Security Law. Write in a clear, authoritative, yet accessible manner, explaining complex legal concepts simply.',
  },
];

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    universeId: 'tech',
    authorId: 'youngin-kim',
    title: 'The Era of Vibe Coding',
    excerpt: 'How AI is shifting us from syntax memorization to intuitive logic construction.',
    content: '# The Era of Vibe Coding\n\nCoding is no longer about memorizing the standard library. It is about the **vibe**—the flow of logic and architecture. With tools like Gemini, we orchestrate systems rather than write boilerplate.',
    createdAt: new Date().toISOString(),
    tags: ['AI', 'Development', 'Future'],
    status: 'published',
  },
  {
    id: '2',
    universeId: 'education',
    authorId: 'youngin-kim',
    title: '창의성은 심심함에서 나온다',
    excerpt: '아이들에게 끊임없는 자극을 주는 것이 과연 좋을까요?',
    content: '# 창의성은 심심함에서 나온다\n\n우리는 아이들이 잠시라도 심심해하는 것을 견디지 못합니다. 하지만 뇌과학적으로 창의성은 뇌가 휴식하며 멍때리는 그 순간, 디폴트 모드 네트워크가 활성화될 때 나옵니다.',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    tags: ['Parenting', 'Creativity', 'Brain Science'],
    status: 'published',
  },
  {
    id: '3',
    universeId: 'law',
    authorId: 'eunhye-jee',
    title: '국민연금, 언제 받는 게 유리할까?',
    excerpt: '조기노령연금 vs 연기연금, 당신의 선택은?',
    content: '# 국민연금 수령 전략\n\n많은 분들이 국민연금을 일찍 당겨 받는 손해를 감수할지, 아니면 늦게 받아 더 많이 받을지 고민합니다. 이는 기대여명과 소득 활동 유무에 따라 달라집니다.',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    tags: ['Social Security', 'Pension', 'Law'],
    status: 'draft',
  },
  {
    id: '4',
    universeId: 'education',
    authorId: 'eunhye-jee',
    title: '엄마표 영어, 완벽할 필요는 없다',
    excerpt: '매일 조금씩 노출하는 것만으로도 충분합니다.',
    content: '# 엄마표 영어의 핵심\n\n많은 엄마들이 자신의 발음을 걱정합니다. 하지만 중요한 것은 완벽한 발음이 아니라, 영어라는 언어가 우리 생활 속에 자연스럽게 스며드는 환경입니다.',
    createdAt: new Date(Date.now() - 200000000).toISOString(),
    tags: ['Parenting', 'English', 'Home School'],
    status: 'published',
  }
];

export const THEME_CLASSES: Record<string, { bg: string, text: string, border: string, ring: string, lightBg: string }> = {
  amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-200', ring: 'focus:ring-amber-500', lightBg: 'bg-amber-50' },
  indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-200', ring: 'focus:ring-indigo-500', lightBg: 'bg-indigo-50' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-200', ring: 'focus:ring-emerald-500', lightBg: 'bg-emerald-50' },
  slate: { bg: 'bg-slate-700', text: 'text-slate-700', border: 'border-slate-200', ring: 'focus:ring-slate-500', lightBg: 'bg-slate-50' },
  rose: { bg: 'bg-rose-600', text: 'text-rose-600', border: 'border-rose-200', ring: 'focus:ring-rose-500', lightBg: 'bg-rose-50' },
};