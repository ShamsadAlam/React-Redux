# Redux Counter App

This is a simple counter application built with React and Redux to demonstrate the fundamental concepts of Redux for state management.

## Description

This application features a basic counter that allows users to increment and decrement a numerical value. It utilizes Redux to manage the counter's state in a centralized and predictable way.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* **Node.js** (version 16 or higher recommended): [https://nodejs.org/](https://nodejs.org/)
* **npm** (usually comes with Node.js) or **Yarn**: [https://yarnpkg.com/](https://yarnpkg.com/)

### Installation

1.  **Clone the repository (if you have it):**
    ```bash
    git clone https://github.com/ShamsadAlam/React-Redux
    cd counter-app
    ```

    **(If you followed the previous instructions, you should already be in the `counter-app` directory.)**

2.  **Install the dependencies using npm:**
    ```bash
    npm install
    ```

    **Or using Yarn:**
    ```bash
    yarn install
    ```

### Running the Application

1.  **Start the development server using npm:**
    ```bash
    npm start
    ```

    **Or using Yarn:**
    ```bash
    yarn start
    ```

2.  Open your web browser and navigate to `http://localhost:3000` to view the application.

## Key Concepts Demonstrated

This project demonstrates the following core Redux concepts:

* **Store:** The single source of truth for the application's state (`src/redux/store.js`).
* **State:** The `count` variable managed within the Redux store.
* **Actions:** Plain JavaScript objects (`{ type: 'INCREMENT' }`, `{ type: 'DECREMENT' }`) dispatched to the store (`src/redux/actions/counterActions.js`).
* **Action Creators:** Functions that return action objects (`incrementCounter`, `decrementCounter` in `src/redux/actions/counterActions.js`).
* **Reducers:** Pure functions (`counterReducer` in `src/redux/reducers/counterReducer.js`) that specify how the state changes in response to actions.
* **Dispatch:** The `dispatch` function (provided by Redux) used in the `App` component to send actions to the store.
* **`Provider`:** A component from `react-redux` used in `src/index.js` to make the Redux store available to all connected components.
* **`connect()`:** A higher-order component from `react-redux` used in `src/App.js` to connect the React component to the Redux store, allowing it to access state and dispatch actions.
* **`mapStateToProps`:** A function used with `connect` to map parts of the Redux state to the component's props.
* **`mapDispatchToProps`:** A function used with `connect` to map Redux dispatch functions to the component's props.

## Further Learning

To learn more about Redux, consider exploring the official documentation and other resources:

* **Redux Official Documentation:** [https://redux.js.org/](https://redux.js.org/)
* **React Redux Documentation:** [https://react-redux.js.org/](https://react-redux.js.org/)
* **Egghead.io Redux Course:** [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)

Feel free to modify and experiment with this project to deepen your understanding of Redux!
