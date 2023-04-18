export const mockFolders = {
    folders: [
      {
        name: "Folder1",
        id: '0',
        type: 'root',
        folders: [
          {
            name: "Subfolder1",
            id: '1',
            folders: [
              {
                name: "Subfolder5",
                id: '6',
                folders: [],
                files: [{ name: "file5-1" }, { name: "file5-2" }],
              }],
            files: [{ name: "file1-1" }, { name: "file1-2" }],
          },
          {
            name: "Subfolder2",
            folders: [],
            id: '2',
            files: [{ name: "file2-1" }, { name: "file2-2" }],
          },
        ],
        files: [{ name: "file1-1" }, { name: "file1-2" }],
      },
      {
        name: "Folder2",
        id: '3',
        type: 'root',
        folders: [
          {
            name: "Subfolder3",
            folders: [],
            id: '4',
            files: [{ name: "file3-1" }, { name: "file3-2" }],
          },
          {
            name: "Subfolder4",
            folders: [],
            id: '5',
            files: [{ name: "file4-1" }, { name: "file4-2" }],
          },
        ],
        files: [],
      },
    ]
  };
  