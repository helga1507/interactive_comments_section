import { UserType } from '../user';

export interface CommentType {
    id: number | string;
    content: string;
    createdAt: string;
    replyingTo: string;
    score: number;
    parentId: number | string | null;
    user: UserType;
}

export type ListComments = CommentType[];
