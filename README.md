<h2 align="center">Coding Challenge: Twitter App</h2>

- [🚀 Demo](#-demo)
- [✨ Development](#-development)
- [📁 File Structure](#-file-structure)
- [⚛️ Redux Toolkit](#%EF%B8%8F-redux-toolkitt)
- [🐦 Tweet Feed: User Interaction](#-tweet-feed-user-interaction)
- [🗄️ Store Structure](#%EF%B8%8F-store-structure)
- [📑 Documentation Links](#-documentation-links)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

---
### 🚀 Demo

You can access the demo for the fullpage navigation here:\
[https://coding-challenge-twitter-app.netlify.app/](https://coding-challenge-twitter-app.netlify.app/)
### ✨ Development

In the project directory, you can run:

**`yarn start`**

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**`yarn test`**

Launches the test runner in the interactive watch mode.<br />

**`yarn build`**

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
### 🐦 Tweet Feed: User Interaction

**Fetching Tweets**\
After a query is typed in the `🔍 Search by keyword` input filed (by a debounce functionality) the `updateQuery(query)` action is dispatched to reduce the input query value into `state.query`.\
After `state.query` is updated, the `cleanTweets()`, `cleanHashtags()`, `cleanFilter()` actions are dispatched to clean any previous search, then the `fetchTweets(state.query, max_id = 0)` action is dispatched, this is an async request that create a Promise, after the Promise is solved the returned data is received and processed by 3 reducers to update `state.meta`, `state.hashtags`, and `state.tweets`.

>List.tsx will renders the updated `stage.tweets`.

>Filter.tsx will renders the upload `stage.hashtags`.

**Loading More Tweets**\
After the `Load more tweets` cta is clicked the `fecthTweets(state.query, max_id = state.max_id)` action is dispatched, this is an async request that create a Promise, after the Promise is solved the returned data is received and processed by 3 reducers to update `state.meta`, `state.hashtags`, and `state.tweets`.

>List.tsx will renders the updated `stage.tweets` filtering the result when a hashtag inside the tweet will be equal to an element of the array `state.filter`.

>Filter.tsx will renders the upload `stage.hashtags` withot affect the current `state.filter`.

**Filter By Hashtag**\
After a cta `Hashtag` is clicked the `addFilter(hashtag)` action is dispatched to reduce the hashtag value adding it into the array `state.filter`, is the cta has been already clicked `active = true` the `removeFilter(hashtag)` action is dispatched to reduce the hashtag value removing it from the array `state.hahtags`.

>List.tsx will renders `stage.tweets` filtering the result when a hashtag inside the tweet will be equal to an element of the array `state.filter`.
### 🗄️ Store Structure

```javascript
  {
    filter: {
      value: Array<string>
    },
    hashtags: {
      value: Array<string>
    },
    meta: {
      completed_in: number,
      count: number,
      max_id: number,
      query: string
    },
    query: {
      value: string
    },
    {
      tweets: {
        status: string,
        value: [
          {
            full_text: string,
            hashtags: Array<string>,
            profile_image_url: string,
            screen_name: string,
            urls: [
              {
                display_url: string,
                url: string,
              }
            ],
            user_mentions: Array<string>
          }
        ]
      }
    }
  }
```
### 📑 Documentation Links

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React documentation](https://reactjs.org/).
- [Reac Redux Documentation](https://react-redux.js.org/introduction/getting-started).
