# React useState Hook Unexpected Behavior with Synchronous Updates

This repository demonstrates an uncommon issue with React's `useState` hook related to synchronous updates. When multiple state updates are triggered in quick succession, the final result might not reflect the intended sequence of changes.

The `bug.js` file showcases the problem where attempting to increment the counter twice within a single click only results in a single increment.

The `bugSolution.js` file provides a solution using the functional update form of `setCount` to ensure that each update is applied based on the previous state value. This guarantees the correct final state and prevents unexpected behavior.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

## Additional Notes

This bug highlights a subtle aspect of React's state management.  Understanding how React batches updates and the importance of using functional updates in certain scenarios is crucial for avoiding unexpected behavior in more complex applications.