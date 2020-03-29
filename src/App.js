import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import TodoList from './TodoList';
import {View} from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <TodoList />
      </View>
    </Provider>
  );
}
