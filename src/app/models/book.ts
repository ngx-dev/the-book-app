export type Book = {
    id: number;
    title: string;
    releaseDate: string;
    thumbnailUrl: string;
    synopsis: string;
    author: string;
    genres: string[];
    editable: boolean;
    deletable: boolean;
    isComplete: boolean;
}