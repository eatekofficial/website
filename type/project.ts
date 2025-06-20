export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    category: string;
    status: 'completed' | 'in-progress' | 'planned';
    githubUrl?: string;
    liveUrl?: string;
}