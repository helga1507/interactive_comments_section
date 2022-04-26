export type ListType = number[];

export interface UserType {
    username: string;
    image: {
        png: string;
    };
}

export interface ItemType {
    id: number;
    content: string;
    createdAt: string;
    replyingTo: string;
    score: number;
    nextId: number | null;
    prevId: number | null;
    parentId: number | null;
    replies: number[];
    user: UserType
}

export interface DataType {
    [key: number]: Item;
}

export interface CommentsState {
    data: DataType;
    list: ListType;
}