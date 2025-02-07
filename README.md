Documentation:
1. TaskList Component:
Purpose: This component receives a list of tasks and a function (onTaskAdded) as props. It renders the list of tasks as an unordered list (<ul>).
Props:
tasks: An array of task objects where each task has an id and text property.
onTaskAdded: A function passed from the parent component to handle adding new tasks.
2. App Component:
State Management:

useState is used to manage the list of tasks. The state is initialized with two default tasks.
The setTasks function updates the state by adding new tasks.
Task Addition Logic:

The onTaskAdded function uses the useCallback hook to ensure that it doesn’t get recreated on every render. It takes a newTask object and adds it to the tasks state array.
useCallback ensures the function doesn't change unless its dependencies (in this case, the empty array) change. This optimizes performance by preventing unnecessary re-renders of the components that depend on this function.
Button to Add Tasks: A button is rendered that, when clicked, triggers the onTaskAdded function to add a new task (Take out the trash).

3. Best Practices:
State Update: The setTasks function is used in a way that ensures you are always appending the new task to the existing tasks rather than overwriting the state.
useCallback: This hook is used to optimize performance by memoizing the onTaskAdded function, which is important when passing functions to child components that depend on these functions (like TaskList).
This setup keeps the task management system simple and easy to understand, while also maintaining performance efficiency.

Let me know if you would like to further expand on this or add more features to the app!
