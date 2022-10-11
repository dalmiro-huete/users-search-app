# users-search-app
Application in charge to search users according with entries and displaying the results in a basic table with sort support.

## Setup Instructions

1. Clone or download the project.
2. `cd` in the project directory.
3. `env` file was added in the repository just for demo purposes.
4. Run `yarn install` or `npm install` to install all dependencies.

## Commands

- `yarn start`: to start a local development server.
- `yarn test`: to run the entire unit test suite using `jest`.
- `yarn test: coverage`: to run the entire unit test suite using `jest` with coverage.
- `yarn upgrade --latest`: To upgrade all packages to their latest versions (could include breaking changes).

## Code Structure

All source code is located in the `src/` directory:

1. `src/modules` are the main pages, parent components, or main modules of the application. They are composed of other components to provide all the functionality.
2. `src/components` are stateful components usually or submodules that integrate the main modules. i.e the module could be the home page but the component could be the introduction section that is on this module.
3. `src/shared` includes the components, hooks, images, queries, styles, types, and utils that are shared through the solution.

## DEMO
Open your browser and go to http://react-assesment.s3-website-us-east-1.amazonaws.com/
