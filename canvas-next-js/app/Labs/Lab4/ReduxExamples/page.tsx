"use client";
import { Provider } from "react-redux";
import CounterRedux from "./CounterRedux/page";
import HelloRedux from "./HelloRedux/page";
import store from "../../store";
import AddRedux from "./AddRedux/page";
import TodoList from "./todos/TodoList";
export default function ReduxExamples() {
  return (
    <Provider store={store}>
      <div>
        <h2>Redux Examples</h2>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <TodoList />
      </div>
    </Provider>
  );
}
