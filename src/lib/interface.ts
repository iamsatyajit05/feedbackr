export interface Project {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
}

export interface FeedbackRequest {
  content: string;
  projectId: string;
  category: 'suggestion' | 'issue' | 'other';
  userId?: string;
  origin?: string;
}

export interface ValidationError {
  content?: string;
  projectId?: string;
  category?: string;
}

export interface MenuLink {
  title: string;
  link: string;
}