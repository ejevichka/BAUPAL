import { Folder as FolderType } from "../components/folder/types";
export function deleteFolderById(folders: FolderType[], targetId: string, parentId?: string): FolderType[] {
    return folders.map((folder) => {
      if (folder.id === targetId) {
        return null;
      } else if (folder.folders) {
        const newFolders = deleteFolderById(folder.folders, targetId, folder.id);
        if (newFolders.length !== folder.folders.length) {
          return { ...folder, folders: newFolders };
        }
      }
      return folder;
    }).filter((folder) => folder !== null) as FolderType[];
  }