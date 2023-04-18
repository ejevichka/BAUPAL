import { Folder as FolderType } from "../components/folder/types";

export function replaceFolderById(folders: FolderType[], id: string, newFolder: FolderType): FolderType[] {
    return folders.map((folder) => {
      if (folder.id === id) {
        return newFolder;
      } else if (folder.folders) {
        return {
          ...folder,
          folders: replaceFolderById(folder.folders, id, newFolder),
        };
      } else {
        return folder;
      }
    });
  }