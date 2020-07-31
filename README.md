[![Netlify Status](https://api.netlify.com/api/v1/badges/49b0bb10-0b04-4b36-b604-aeab8620b4d8/deploy-status)](https://app.netlify.com/sites/litebrite-game-of-life/deploys)

# Conway's Game of Life

## LiteBrite Style

https://litebrite-game-of-life.netlify.app/

This project is one of my implementations of Conway's Game of Life.

## What is the Game of Life?

It is a 'cellular automaton' invented by Cambridge mathematician John Conway in 1970.

The board contains of cells which will live, die or multiply, depending on the rules.

Depending on the initial layout of the grid, the cells may form various patterns as the game advances.

In this version, the colors of the cells change, according to how long they have been alive.

## What problem does it solve?

My project, specifically, can repeatedly update each cell in the grid, displaying the next generations of cells
that result from the rules for the game.

### The Rules

#### If a cell is alive:

- If it has only 0-1 alive neighbors, it dies, representing underpopulation.
- If it has 2-3 alive neighbors, it lives on to the next generation.
- If it has more than 3 alive neighbors, it dies, representing overpopulation.

#### If a cell is dead:

- If it has exactly 3 alive neighbors, it becomes a live cell, representing reproduction.
- Otherwise, it remains dead.

In a more general scope, cellular automata are used to solve problems involving biological and chemical simulatons. They are also used in certain computer processors and other numeric techniques.

---

## How to run this app locally:

1. Fork and clone this repository.
2. In terminal, run `npm i`.
3. In terminal, run `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Other Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
