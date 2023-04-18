import { Folder as FolderType } from "../components/folder/types";
export function findFolderById(id: string, folders: FolderType[]): FolderType | null {
    for (const folder of folders) {
      if (folder.id === id) {
        return folder;
      }
      if (folder.folders) {
        const subfolder = findFolderById(id, folder.folders);
        if (subfolder) {
          return subfolder;
        }
      }
    }
    return null;
  }