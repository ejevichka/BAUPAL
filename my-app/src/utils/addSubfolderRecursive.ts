import { Folder as FolderType } from "../components/folder/types";
import { v4 as uuidv4 } from 'uuid';

export function addSubfolderRecursive(folders:FolderType[], folderId:string, name:string):FolderType[] {
    return folders.map(folder => {
      if (folder.id === folderId) {
        const newSubfolder = { name, id: uuidv4(), folders: [], files: [] };
        return {
          ...folder,
          folders: [...folder.folders as any, newSubfolder]
        };
      } else if (folder.folders) {
        return {
          ...folder,
          folders: addSubfolderRecursive(folder.folders, folderId, name)
        };
      } else {
        return folder;
      }
    });
  }