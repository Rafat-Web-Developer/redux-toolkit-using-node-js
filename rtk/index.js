const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

store.dispatch(dynamicCounterActions.increment(5));
store.dispatch(dynamicCounterActions.increment(5));
store.dispatch(dynamicCounterActions.decrement(5));
