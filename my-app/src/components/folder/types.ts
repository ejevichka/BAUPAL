export interface Folder {
    name: string;
    id: string;
    type?: string;
    files?: Record<"name", string>[];
    folders?: Folder[];
}