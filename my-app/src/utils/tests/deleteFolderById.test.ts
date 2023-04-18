import { Folder as FolderType } from "../../components/folder/types";
import { deleteFolderById } from "../deleteFolderById";

describe("deleteFolderById", () => {
  const folders: FolderType[] = [
    {
      id: "1",
      name: "Folder 1",
      folders: [
        {
          id: "2",
          name: "Folder 2",
          folders: [],
          files: []
        }
      ],
      files: []
    }
  ];

  it("should delete a folder by its ID", () => {
    const result = deleteFolderById(folders, "2");
    expect(result).toEqual([
      {
        id: "1",
        name: "Folder 1",
        folders: [],
        files: []
      }
    ]);
  });

  it("should delete a folder by its ID and update its parent's folders", () => {
    const result = deleteFolderById(folders, "2", "1");
    expect(result).toEqual([
      {
        id: "1",
        name: "Folder 1",
        folders: [],
        files: []
      }
    ]);
  });

  it("should return the original array if the target ID is not found", () => {
    const result = deleteFolderById(folders, "3");
    expect(result).toEqual(folders);
  });
});
