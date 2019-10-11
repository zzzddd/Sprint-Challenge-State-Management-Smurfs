1. What problem does the context API help solve?

 The Context API is a component structure provided by the React framework, 
 which enables us to share specific forms of data across all levels of the application. 
 It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store it is globalized state
action it is what we went to do
reducers it modify store states based on action

single source of truth, it means that the only way to change your data in UI is to dispatch redux action 
which will change state within redux reducer

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is state that is local to a single component and cannot be seen outside of this component.

Application state is the "global" state that all components in the component tree can access, through cursors. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that allows us to write action creators that return a function instead of an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API wrap your App inside and all has access no complicates jus call and use it whenever needed..
