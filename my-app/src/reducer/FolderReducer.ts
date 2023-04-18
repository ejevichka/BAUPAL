import { Folder } from "../components/folder/types";
import { v4 as uuidv4 } from 'uuid';
import {findFolderById} from '../utils/findFolderById'
import {replaceFolderById} from '../utils/replaceFolderById'
import {addSubfolderRecursive} from '../utils/addSubfolderRecursive'

type Action =
  | { type: 'ADD_FOLDER'; payload: string }
  | { type: 'DELETE_FOLDER'; payload: string }
  | { type: 'ADD_FILE'; payload: { folderId: string; fileName: string } }
  | { type: 'DELETE_FILE'; payload: { folderId: string; fileName: string } }
  | { type: 'ADD_SUBFOLDER'; payload: { folderId: string; name: string } }
  | { type: 'DELETE_SUBFOLDER'; payload: { folderId: string; subfolderId: string } }
  | { type: 'SELECT_FOLDER'; payload: string };

interface State {
  folders: Folder[]
}


const folderReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_FOLDER': {
      const folder = { name:action.payload, id: uuidv4() };
      return { ...state, folders: [...state.folders, folder] };
    }
    case 'DELETE_FOLDER': {
      const newFolders = state.folders.filter((folder) => folder.id !== action.payload);
      return { ...state, folders: newFolders };
    }
    case "ADD_FILE": {
      const { folderId, fileName } = action.payload;
      const folder = findFolderById(folderId, state.folders);
    
      if (!folder) return state;
    
      const newFiles = [
        ...folder.files as Record<"name", string>[],
        { name: fileName }
      ];
    
      const newFolder = {
        ...folder,
        files: newFiles
      };
    
      const newFolders = replaceFolderById(state.folders, folderId, newFolder);
    
      return {
        ...state,
        folders: newFolders
      };
    }
    
    case "DELETE_FILE": {
      const { folderId, fileName } = action.payload;
      const folder = findFolderById(folderId, state.folders);
    
      if (!folder) return state;
    
      const newFiles = (folder.files as Record<"name", string>[]).filter(file => file.name !== fileName);
    
      const newFolder = {
        ...folder,
        files: newFiles
      };
    
      const newFolders = replaceFolderById(state.folders, folderId, newFolder);
    
      return {
        ...state,
        folders: newFolders
      };
    }
    case 'ADD_SUBFOLDER': {
      const { folderId, name } = action.payload;
      console.log("ADD_SUBFOLDER", folderId, name);
      const newFolders = addSubfolderRecursive(state.folders, folderId, name);
      return { ...state, folders: newFolders };
    }
    case 'DELETE_SUBFOLDER': {
      const { folderId, subfolderId } = action.payload;
      const folder = findFolderById(folderId, state.folders);
      
      if (!folder || !folder.folders) return state;
      
      const newFolders = folder.folders.filter(subfolder => subfolder.id !== subfolderId);
      
      const newFolder = {
        ...folder,
        folders: newFolders
      };
      
      const newFoldersWithDeletedSubfolder = replaceFolderById(state.folders, folderId, newFolder);
      
      return {
        ...state,
        folders: newFoldersWithDeletedSubfolder
      };
    }
    default:
      return state;
  }
};

export default folderReducer;







