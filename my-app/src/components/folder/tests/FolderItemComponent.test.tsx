import { render, fireEvent } from '@testing-library/react'
import { FolderItemComponent } from '../FolderItemComponent'

test('renders folder item component', () => {
  const name = 'My Folder'
  const currentFolderIndex = 'folder1'
  const parentId = 'parentFolder'
  const setCurrentFolderIndex = jest.fn()
  const dispatch = jest.fn()
  const { getByText, getByTestId } = render(<FolderItemComponent
    name={name}
    currentFolderIndex={currentFolderIndex}
    parentId={parentId}
    dispatch={dispatch}
    setCurrentFolderIndex={setCurrentFolderIndex}
  />)

  const folderButton = getByText(name)
  fireEvent.click(folderButton)
  expect(setCurrentFolderIndex).toHaveBeenCalledWith(currentFolderIndex)

  const deleteButton = getByTestId('delete-icon')
  fireEvent.click(deleteButton)
  expect(dispatch).toHaveBeenCalledWith({
    type: 'DELETE_SUBFOLDER',
    payload: { folderId: parentId, subfolderId: currentFolderIndex }
  })
})
