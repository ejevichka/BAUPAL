import { DeleteIcon } from '@chakra-ui/icons'
import { AiFillFolder } from 'react-icons/ai'

import {
  HStack,
  Button
} from "@chakra-ui/react";
import { Dispatch } from 'react';

interface Props {
  name: string;
  currentFolderIndex: string;
  parentId: string;
  dispatch: Dispatch<{ type: string, payload: any }>;
  setCurrentFolderIndex: (index: string) => void;
}

export const FolderItemComponent = ({ name, currentFolderIndex, parentId, dispatch, setCurrentFolderIndex }: Props) => {

  return (
    <HStack>
      <Button
        key={currentFolderIndex}
        variant="ghost"
        fontWeight="bold"
        justifyContent="flex-start"
        onClick={() => setCurrentFolderIndex(currentFolderIndex)}
        leftIcon={<AiFillFolder color={"#1ba2f6"}/>}
      >
        {name}
      </Button>
      <DeleteIcon data-testid="delete-icon" onClick={() => dispatch({ type: "DELETE_SUBFOLDER", payload: { folderId: parentId, subfolderId: currentFolderIndex } })} />
    </HStack>
  )
}
