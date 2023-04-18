import { Folder as FolderType } from "../../components/folder/types";
import { replaceFolderById } from "../replaceFolderById";

describe("replaceFolderById", () => {
  const folders: FolderType[] = [
    {
      id: "folder-1",
      name: "Folder 1",
      folders: [],
      files: [],
    },
    {
      id: "folder-2",
      name: "Folder 2",
      folders: [],
      files: [],
    },
  ];

  it("should replace a folder with a new folder", () => {
    const newFolder: FolderType = {
      id: "folder-3",
      name: "Folder 3",
      folders: [],
      files: [],
    };

    const updatedFolders = replaceFolderById(folders, "folder-1", newFolder);

    expect(updatedFolders).toEqual([
      {
        id: "folder-3",
        name: "Folder 3",
        folders: [],
        files: [],
      },
      {
        id: "folder-2",
        name: "Folder 2",
        folders: [],
        files: [],
      },
    ]);
  });

  it("should replace a subfolder with a new folder", () => {
    const subFolder: FolderType = {
      id: "sub-folder-1",
      name: "Sub Folder 1",
      folders: [],
      files: [],
    };

    const folderWithSubfolder: FolderType = {
      id: "folder-1",
      name: "Folder 1",
      folders: [subFolder],
      files: [],
    };

    const newFolder: FolderType = {
      id: "sub-folder-2",
      name: "Sub Folder 2",
      folders: [],
      files: [],
    };

    const updatedFolders = replaceFolderById(
      [folderWithSubfolder],
      "sub-folder-1",
      newFolder
    );

    expect(updatedFolders).toEqual([
      {
        id: "folder-1",
        name: "Folder 1",
        folders: [
          {
            id: "sub-folder-2",
            name: "Sub Folder 2",
            folders: [],
            files: [],
          },
        ],
        files: [],
      },
    ]);
  });

  it("should not update folders if the folder with the specified id is not found", () => {
    const newFolder: FolderType = {
      id: "folder-3",
      name: "Folder 3",
      folders: [],
      files: [],
    };

    const updatedFolders = replaceFolderById(folders, "folder-3", newFolder);

    expect(updatedFolders).toEqual(folders);
  });
});
