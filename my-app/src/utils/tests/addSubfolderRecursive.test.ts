import { addSubfolderRecursive } from "../addSubfolderRecursive";
import { Folder } from "../../components/folder/types";

describe("addSubfolderRecursive", () => {
  const testFolders: Folder[] = [
    {
      name: "Folder A",
      id: "1",
      folders: [
        {
          name: "Folder B",
          id: "2",
          folders: [],
          files: [],
        },
      ],
      files: [],
    },
    {
      name: "Folder C",
      id: "3",
      folders: [],
      files: [],
    },
  ];

  it("adds a subfolder to the correct parent folder", () => {
    const result = addSubfolderRecursive(testFolders, "2", "New Folder");
    expect(result).toMatchObject([
      {
        name: "Folder A",
        id: "1",
        folders: [
          {
            name: "Folder B",
            id: "2",
            folders: [
              {
                name: "New Folder",
                id: expect.any(String),
                folders: [],
                files: [],
              },
            ],
            files: [],
          },
        ],
        files: [],
      },
      {
        name: "Folder C",
        id: "3",
        folders: [],
        files: [],
      },
    ]);
  });

  it("does not modify the original array", () => {
    const originalFolders = [...testFolders];
    addSubfolderRecursive(testFolders, "2", "New Folder");
    expect(testFolders).toEqual(originalFolders);
  });

  it("returns the same array when given an empty array", () => {
    const result = addSubfolderRecursive([], "2", "New Folder");
    expect(result).toEqual([]);
  });

  it("returns the same array when given a folder ID that doesn't exist", () => {
    const result = addSubfolderRecursive(testFolders, "4", "New Folder");
    expect(result).toEqual(testFolders);
  });
});
