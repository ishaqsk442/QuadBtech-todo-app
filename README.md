# My To-Do App

This is a simple To-Do application built with React and Redux.

Netlify Link : https://ishaq-shaik-quadb-tech-todo.netlify.app/

## Setup

1. Clone the repository:
```bash```


git clone https://github.com/yourusername/my-todo-app.git

cd my-todo-app


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



Features:
===========

Add tasks

View tasks in an ordered list

Edit tasks with a popup

Delete tasks

Mark tasks as completed

Responsive design for different devices




### Explanation
1. **CSS (`App.css`)**: Defines styles for the application, making it visually appealing and responsive.

2. **Actions (`actions.js`)**: Contains action creators to manage task-related actions.

3. **Reducer (`reducers.js`)**: Manages the state changes in response to actions dispatched.

4. **TaskInput Component**: Provides an input field to add new tasks. It dispatches the `addTask` action 
when a task is added.

5. **TaskList Component**: Retrieves the list of tasks from the Redux store and renders them using the 
`TaskItem` component.

6. **TaskItem Component**: Represents a single task with options to edit, delete, and mark as complete. It dispatches actions accordingly.

7. **App Component**: Main component that renders the `TaskInput` and `TaskList` components.

8. **Index (`index.js`)**: Entry point of the application that sets up the Redux provider and renders the `App` component.


These comments and explanations provide a clear understanding of the logic and approach used in developing the To-Do application.


