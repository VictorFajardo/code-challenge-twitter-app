<h2 align="center">Coding Challenge: Twitter App</h2>

- [🚀 Demo](#-demo)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### 🚀 Demo
You can access the demo for the fullpage navigation here:\
[https://coding-challenge-twitter-app.netlify.app/](https://coding-challenge-twitter-app.netlify.app/)
### ✨ Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### 📁 File Structure

```
📁App                                     
│── package.json
│── README.md
│── tsconfig.json
├── 📁build
├── 📁public
└── 📁src
    ├── index.css                     // style for index.tsx
    ├── index.tsx                     // initialize the app, invokes App.tsx
    ├── 📁app
    │   ├── 📁components
    │   │   ├── Filter.tsx            // section component, renders hastags to be iltered
    │   │   ├── Hashtag.tsx           // element component: hashtag
    │   │   ├── Header.tsx            // section component, renders title
    │   │   ├── List.tsx              // section component, renders tweets
    │   │   └── Search.tsx            // section component, contains the input  ield
    │   ├── App.css                   // App css styles
    │   ├── App.test.tsx              // App test cases
    │   └── App.tsx                   // App component, includes all the components
    ├── 📁common
    │   └── hooks.ts                  // custom hooks: useAppDispatch(), useAppSelector()
    ├── 📁data
    │   ├── api.ts                    // api server information
    │   └── site.ts                   // all the app texts to be rendered information
    ├── 📁features
    │   ├── 📁filter
    │   │   └── filterSlice.ts        // actions and reducer for state.filter
    │   ├── 📁hashtags
    │   │   └── hashtagsSlice.ts      // actions and reducer for state.hashtags
    │   ├── 📁meta
    │   │   └── metaSlice.ts          // actions and reducer for state.meta
    │   ├── 📁query
    │   │   └── querySlice.ts        // actions and reducer for state.query
    │   └── 📁tweets
    │       ├── tweetsSlice.ts        // actions and reducer for state.query
    │       └── tweetsApi.ts          // async request for data
    ├── 📁img
    │   └── magnifying-glass.svg      // icon for the Search component
    └── 📁store
        └── index.ts                  // app store file
```

### ⚛️ Redux Toolkit

This app uses **Redux Toolkit** as source of state managment, for more information visit:

- [Redux Toolkit - Tutorials Overview](https://redux-toolkit.js.org/tutorials/overview).

### 📑 More Documentation

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React documentation](https://reactjs.org/).
- [Reac Redux Documentation](https://react-redux.js.org/introduction/getting-started).
