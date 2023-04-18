import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CreateInputComponent } from "../CreateInputsComoinent";

describe("CreateInputComponent", () => {
  it("dispatches ADD_SUBFOLDER action when folder name is submitted", () => {
    const folderId = "folder-id";
    const mockDispatch = jest.fn();
    const { getByPlaceholderText } = render(
      <CreateInputComponent dispatch={mockDispatch} folderId={folderId} />
    );
    const input = getByPlaceholderText("New Folder");
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_SUBFOLDER",
      payload: { folderId, name: "" },
    });
  });

  it("dispatches ADD_FILE action when file name is submitted", () => {
    const folderId = "folder-id";
    const mockDispatch = jest.fn();
    const { getByPlaceholderText } = render(
      <CreateInputComponent dispatch={mockDispatch} folderId={folderId} />
    );
    const input = getByPlaceholderText("New File");
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_FILE",
      payload: { folderId, fileName: "" },
    });
  });
});
