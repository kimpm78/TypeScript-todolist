import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // current?를 넣은 이유는 레퍼런스에 아직 값이 설정되지 않았을 수도 있기 때문.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
