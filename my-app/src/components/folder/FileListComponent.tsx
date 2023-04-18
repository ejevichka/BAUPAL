import { DeleteIcon } from '@chakra-ui/icons'
import { AiFillFile } from 'react-icons/ai'

import { Dispatch } from 'react';
import {
  Box,
  Text,
  HStack
} from "@chakra-ui/react";
import { Folder as FolderType } from "./types";

interface Props {
  currentFolder?: FolderType | null;
  currentFolderIndex: string;
  dispatch: Dispatch<{ type: string, payload: any }>;
}

export const FileListComponent = ({ currentFolder, currentFolderIndex, dispatch }: Props) => {
  return (
    <Box p="4">
      {currentFolder && currentFolder.files && currentFolder.files.map((file, fileIndex) => (
        <HStack key={fileIndex} color={"gray.600"}>
          <AiFillFile color={"#1ba2f6"} /><Text>{file.name}</Text>
          <DeleteIcon data-testid="delete-icon" cursor="pointer" onClick={() => dispatch({ type: "DELETE_FILE", payload: { folderId: currentFolderIndex, fileName: file.name } })} />
        </HStack>
      ))}
    </Box>)
}
