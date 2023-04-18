import { Box, Text } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import folderReducer from "../../reducer/FolderReducer"
import { renderFolderRecursion } from "./FolderRenderRecursion"
import { mockFolders } from './mockData'

const FolderView = () => {
  const [selectedFolderId, setSelectedFolderId] = useState<string>('1');
  const [folders, dispatch] = useReducer(folderReducer, mockFolders);
  function handleFolderClick(id: string) {
    setSelectedFolderId(id);
  }


  function renderFolderView() {
    if (!folders || folders.folders.length === 0) {
      return <Text>No folders to show</Text>;
    }
    return (
      <Box display="flex" w="100%">
        <Box flexGrow={1}>
          {folders.folders.map((item) => renderFolderRecursion(item, item.id, selectedFolderId, dispatch, handleFolderClick))}
        </Box>
      </Box>
    );
  }

  return renderFolderView()
};

export default FolderView;
