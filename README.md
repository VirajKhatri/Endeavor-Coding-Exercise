# Things in this exercise

There are two components in this project. One is Home and other is Magazine component.

In home component, user is allowed to choose a display type i.e. Grid, Featured or Grid+Featured, and the other option is to select a screen resolution. Available options for resolution are [640 * 360, 800	* 600, 1024 * 768, 1280 * 720, 1280 * 800, 1280 * 1024, 1360 * 768, 1366 * 768, 1440 * 900, 1536 * 864, 1600 * 900, 1680 * 1050, 1920 * 1080, 1920 * 1200, 2048 * 1152, 2560 * 1080, 2560 * 1440, 3440 * 1440, 3840 * 2160]

Depending upon the selected display and resolution, magazine component will show the output.

# Assests

public/Assest/Images - In here, I have stored all the images i.e. front pages of all the issues

public/Assest/Data - In here, there is a issues.json file which has data about all the issues. 
    Data Structure: 
    {
    "issues": [
        {
            "FrontPage": "",
            "PublishedDate": ""
        },
        ...
    ]
    
# Things that can be Improved

Rigorous responsiveness and adaptiveness can be achieved by adding media queries.

Instead of hard coding issues, we can move the applicaiton logic acccording to the display type to the server side i.e. back end. By that we can create different APIs according to our requirement.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
