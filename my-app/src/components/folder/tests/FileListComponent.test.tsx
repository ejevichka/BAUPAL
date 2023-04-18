import { render, screen, fireEvent } from '@testing-library/react'
import { FileListComponent } from '../FileListComponent'
import { Folder } from '../types'

const currentFolder: Folder = {
  id: '1',
  name: 'Folder 1',
  folders: [],
  files: [
    { name: 'File 1' },
    { name: 'File 2' },
  ]
}

test('renders file list', () => {
  const dispatch = jest.fn()
  render(<FileListComponent currentFolder={currentFolder} currentFolderIndex="1" dispatch={dispatch} />)
  
  const file1 = screen.getByText('File 1')
  const file2 = screen.getByText('File 2')
  expect(file1).toBeInTheDocument()
  expect(file2).toBeInTheDocument()
})

test('dispatches DELETE_FILE on clicking delete icon', () => {
  const dispatch = jest.fn()
  render(<FileListComponent currentFolder={currentFolder} currentFolderIndex="1" dispatch={dispatch} />)
  
  const deleteIcon1 = screen.getAllByTestId('delete-icon')[0]
  fireEvent.click(deleteIcon1)
  expect(dispatch).toHaveBeenCalledWith({ type: 'DELETE_FILE', payload: { folderId: '1', fileName: 'File 1' } })
  
  const deleteIcon2 = screen.getAllByTestId('delete-icon')[1]
  fireEvent.click(deleteIcon2)
  expect(dispatch).toHaveBeenCalledWith({ type: 'DELETE_FILE', payload: { folderId: '1', fileName: 'File 2' } })
})
