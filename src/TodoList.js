import React, {useEffect, useState} from 'react';
import {Creators} from './store/ducks/todos';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TextInput, Button} from 'react-native';

function TodoList() {
  const todos = useSelector((state) => state.todos_red.data);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({id: null, txt: ''});

  function insert() {
    if (!todo.id) {
      dispatch(Creators.addTodo(todo.txt));
    } else {
      dispatch(Creators.editTodo(todo.id, todo.txt));
    }
  }

  function remove(id) {
    dispatch(Creators.removeTodo(id));
  }

  function edit(item) {
    setTodo({id: item.id, txt: item.todo});
  }

  return (
    <View>
      <TextInput
        value={todo.txt}
        onChangeText={(text) => setTodo({...todo, txt: text})}
      />
      <Button title={!todo.id ? 'Inserir' : 'editar'} onPress={insert} />

      {todos.map((item) => (
        <>
          <Text key={item.id}>{item.txt}</Text>
          <Button title={'remover'} onPress={() => remove(item.id)} />
          <Button title={'editar'} onPress={() => edit(item)} />
        </>
      ))}
    </View>
  );
}

export default TodoList;
