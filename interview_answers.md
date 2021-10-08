# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API: allows data to pass between intermediate components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: packets of information that describe events in the UI, objects that are dispatched to reducers, tell reducers how to update state tree

Reducers: update state tree, take state tree & an action as arguments, use switch case to create updated state tree

Store: sets state, stores data in single state object ('single source of truth')


3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux-thunk: allows asynchronous functions, makes action creators return a function instead of an action

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer Redux because of the separation of concerns and that it is the industry standard.