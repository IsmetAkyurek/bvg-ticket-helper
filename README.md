# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Production URL : https://bvg-ticket-helper.vercel.app/
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Guidelines
I have decided to stick with a simple layout which has the content in a centered box. No UI Libraries/modules since the app is small and it would only bring unnecessary weight to the project.
`react-redux` is used to keep the data across the application. Alternatively `React Context` could also be used but I decided to stick with `react-redux`.
`react-router-dom` is added just in case if any more pages wanted to be added to the application.

## Assumptions
The tree has 7 questions at total (plus name question). After getting the answers, appropriate ticket(s) are found based on these responses.