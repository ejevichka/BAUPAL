import { Box, HStack, VStack } from "@chakra-ui/react";
import { Folder as FolderType } from "./types";
import { FolderItemComponent } from "./FolderItemComponent"
import { FileListComponent } from "./FileListComponent"
import { CreateInputComponent } from './CreateInputsComoinent'

export function renderFolderRecursion(folder: FolderType, parentId: string = "", selectedFolderId: string, dispatch: any, handleFolderClick: (id: string)=>void) {

    const isSelected = folder.id === selectedFolderId;
    return (
        <HStack
            key={folder.id}
            bg={isSelected ? "gray.200" : "transparent"}
            border="1px solid #CBD5E0"
            borderRadius="md"
            p={2}
            w="100%"
        >
            <VStack>
                <FolderItemComponent
                    name={folder.name}
                    dispatch={dispatch}
                    parentId={parentId}
                    currentFolderIndex={folder.id}
                    setCurrentFolderIndex={handleFolderClick}
                />
                <FileListComponent
                    dispatch={dispatch}
                    currentFolderIndex={folder.id}
                    currentFolder={folder}
                />
                <CreateInputComponent
                    dispatch={dispatch}
                    folderId={folder.id}
                />
            </VStack>
            {folder.folders && (
                <Box pl={4} w="100%">
                    {folder.folders.map((child) =>
                        renderFolderRecursion(child, folder.id, selectedFolderId, dispatch, handleFolderClick)
                    )}
                </Box>
            )}
        </HStack>
    );
}
