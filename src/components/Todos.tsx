import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

// FC: function components意味
// bind() 실행할 함수를 미리 설정할수 있음.
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
