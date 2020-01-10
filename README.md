# React Redux

## State Management can be complex
![state-management-can-be-complex](images/state-management-can-be-complex.jpg)


## Redux
![redux](images/redux.png)
<p>Redux is used mostly for application state management. To summarize it, Redux maintains the state of an entire application in a single immutable state tree (object), which can't be changed directly. When something changes, a new object is created (using actions and reducers).</p>

### Redux 
- Store
- Action
- Reducer
- Subscription


#### Store
![redux-store](images/redux-store.jpg)
<p>
Store holds your data, You can read or update the data in your store.
</p>

### Action
<p>
Actions are payloads of information that send data from your application to your store
</p>


### Reducer
<p>
Reducer is reduce a collection of actions to perform these actions on the data in the store
</p>

![action-reducer-redux](images/action-reducer-redux.png)


### Subscription
<p>
Subscriptions are called  when the data in the store changes.
</p>

### How redux work
![redux-architecture](images/redux-architecture.jpg)