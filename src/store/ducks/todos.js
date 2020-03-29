import {createReducer, createActions} from 'reduxsauce';

export const {Types, Creators} = createActions({
  addTodo: ['txt'],
  removeTodo: ['id'],
  editTodo: ['id', 'txt'],
});

const INITIAL_STATE = {
  data: [{id: 1, txt: 'teste'}],
};

const addTodo = (state, action) => ({
  ...state,
  data: [...state.data, {id: Math.random(), txt: action.txt}],
});

const removeTodo = (state, action) => ({
  ...state,
  data: state.data.filter((todo) => todo.id !== action.id),
});

const editTodo = (state, action) => ({
  ...state,
  data: state.data.map((todo) =>
    todo.id === action.id ? {...todo, txt: action.txt} : todo,
  ),
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.REMOVE_TODO]: removeTodo,
  [Types.EDIT_TODO]: editTodo,
});
