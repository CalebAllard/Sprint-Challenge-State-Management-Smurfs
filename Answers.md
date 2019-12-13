1. What problem does the context API help solve?
    Helps to pass down data through components
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions, as an "action" or even that the usesr does though the UI, witch is sent to a Reducer, which takes the action and changes the store "state" depnding on the action. The store is a universal state where all data for the aplication is stored.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state is stores in the store, componenet state is a useState which ony the compoenent will use or see.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux thunk allow async calls, and functions inside an action. if dispacthes actions depending ont he function inside of the action.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux! at first it is more complex, but in the end if you understand it useing redux is not only more organized but easyer to add new feachers to an application with.
