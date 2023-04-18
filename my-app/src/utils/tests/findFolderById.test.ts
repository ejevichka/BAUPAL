import { Folder as FolderType } from "../../components/folder/types";
import { findFolderById } from "../findFolderById";

const testFolders: FolderType[] = [
  {
    id: "1",
    name: "Folder 1",
    folders: [
      {
        id: "2",
        name: "Folder 2",
        folders: [
          {
            id: "3",
            name: "Folder 3",
            folders: [],
            files: [],
          },
        ],
        files: [],
      },
      {
        id: "4",
        name: "Folder 4",
        folders: [],
        files: [],
      },
    ],
    files: [],
  },
];

describe("findFolderById", () => {
  it("returns the folder with the specified ID", () => {
    const folder = findFolderById("3", testFolders);
    expect(folder?.id).toEqual("3");
    expect(folder?.name).toEqual("Folder 3");
  });

  it("returns null when folder is not found", () => {
    const folder = findFolderById("5", testFolders);
    expect(folder).toBeNull();
  });
});
