import React, { useReducer } from 'react';
import { todoReducer } from './reducers/todo';
import './App.css';

const initialState = {
  newItem: '',
  list: [
    
  ],
};

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <div>
        <h2>Todo List</h2>
        <ul>
          {state.list.map((item) => (
            <li key={item}>{item} <button className="btn-delete" onClick={() => dispatch({type: 'DELETE', item})}>X</button></li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Add Todo</h2>
        <input type="text" 
          placeholder="Todo"
          value={state.newItem}
          onChange={(e) => dispatch({ type: 'TYPE_VALUE', value: e.target.value })} />
        <button onClick={() => dispatch({ type: 'ADD', newItem: state.newItem })}>Submit</button>
      </div>
    </div>
  );
}

export default App;
