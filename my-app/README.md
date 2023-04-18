

# I FOCUSED on
### Requirements

- set up a React repository
- user should be able to see their folders and files in a column view (see video above)
- users should be able to create folders
- users should be able to delete folders
- add files (optional)

# MY CONCERNS:
1) using useReducer allows to manage the state of the folders and files in a structured way, while also making it easy to add, update, or delete folders and files.
The state of the application remains consistent and predictable, which makes it easier to reason about and test. Reducer allows to avoid the common pitfalls of manually managing state, such as race conditions or inconsistent state updates.
2) I used nested tree view for folders because it is an intuitive way to display hierarchical data, such as a file system directory structure. The nested tree view allows to represent the parent-child relationship between folders and their contents, making it easier to visualize and navigate the directory structure. If I would have more time to improve the solution I would focus on showing only specific folder path by parent-child relationship between folders.

# RESULTS:
1) readable components
2) plain clean file structure
3) test check
4) requirements implemented


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
