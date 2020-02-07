# Pursuit-Core-Web-Redux-Lab-Two

## App
![ReduxToDos](./readme/ReduxToDos.gif)


### Specification
Build a todo app using Redux. This app does not require a Back-end to persist the data the redux store is enough for now. 

A user should be able to:

1. Create a ToDo
2. Toggle a ToDo between completed and uncompleted
    - Clicking a non-completed ToDo should mark it as completed. Display the ToDo crossed out when completed.
    - Clicking a completed ToDo should mark the todo as active(not completed). Remove the crossing out.
3. [BONUS] Filter by active(non-completed), completed, or all ToDos.

Address this in order. Set up your store, reducer an action for creating a todo first and verify it works then move to point 2 and 3.

## Todo
A todo object should have the following properties.
```js
{
  id: 1,
  text: "Buy groceries",
  completed: true // or false
}
```

## State
Your state to store this information would look like:
```js
{
  nextTodoId: 1,
  todos: [],
  visibilityFilter: "all" // One of "all", "completed" or "active"
}
```

* `nexTodoId` is just a counter you will use to assign a simple `id` to your todos. Each time a new todo is added use the current value of `nextTodoId` to give your todo that `id` and increment `nextTodoId` there after for next time.
* `todos` keeps todo objects. 
* When the user click's the button Completed you will set the `visibilityFilter` and filter `todos` for only todos that are completed and display those completed todos.
* When the user click's the button Active you will filter `todos` for only todos that are **not** completed and display those non-completed todos to the user.

## Actions
Here are some suggestions for your actions and action types. You can, of course, come up with your own:
* `ADD_TODO`

```js
{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'  
  }
}
```

* `TOGGLE_TODO`
* `SET_VISIBILITY_FILTER` 


## Resources
* Follow this [React-Redux Basic Tutorial](https://react-redux.js.org/introduction/basic-tutorial). 
* [Redux Basics Tutorial](https://redux.js.org/basics/basic-tutorial)
>These literally solve the lab.
