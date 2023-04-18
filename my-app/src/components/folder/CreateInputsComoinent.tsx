import { Dispatch } from 'react';
import {
    Box,
    Input
} from "@chakra-ui/react";

interface Props {
    dispatch: Dispatch<{ type: string, payload: any }>;
    folderId: string;
}

export const CreateInputComponent = ({
    dispatch,
    folderId
}: Props) => {

    const handleCreateFile = (fileName: string) => {
        dispatch({
            type: "ADD_FILE",
            payload: { folderId, fileName },
        });
    };

    const handleCreateFolder = (folderName: string) => {
        dispatch({ type: "ADD_SUBFOLDER", payload: {folderId: folderId, name: folderName} })
    };
    return (
        <Box p="4">
            <Box mb="4">
                <Input
                    type="text"
                    placeholder="New Folder"
                    onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
                        if (event.key === "Enter") {
                            handleCreateFolder(event.currentTarget.value);
                            event.currentTarget.value = "";
                        }
                    }}
                />
            </Box>
            <Box mb="4">
                <Input
                    type="text"
                    placeholder="New File"
                    onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
                        if (event.key === "Enter") {
                            handleCreateFile(event.currentTarget.value);
                            event.currentTarget.value = "";
                        }
                    }}
                />
            </Box>
        </Box>
    )
}