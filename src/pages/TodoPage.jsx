import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');

  const [todos, setTodos] = useState(dummyTodos);
  const itemsCount = todos.length;
  function handleTodoInput(value) {
    setInputValue(value);
  }

  function handleAddClick() {
    if (inputValue.length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      const currentIndex = prevTodos.length;
      return [
        ...prevTodos,
        {
          id: currentIndex + 1,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    setInputValue('');
  }

  function handleClickChecked(id) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    });
  }

  function handleChangeMode({ id, isEdit }) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit,
          };
        }
        return { ...todo, isEdit: false };
      });
    });
  }

  function handleSave({ id, title }) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            isEdit: false,
          };
        }
        return todo;
      });
    });
  }

  function handleClickDeleted(id) {
    console.log(id);
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        handleTodoInput={handleTodoInput}
        handleAddClick={handleAddClick}
      />
      <TodoCollection
        todos={todos}
        onClickChecked={handleClickChecked}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onClickDeleted={handleClickDeleted}
      />
      <Footer itemsCount={itemsCount} />
    </div>
  );
};

export default TodoPage;
