import TodoItem from './TodoItem';

const TodoCollection = ({
  onClickChecked,
  onClickDeleted,
  todos,
  onChangeMode,
  onSave,
}) => {
  return (
    <div>
      TodoCollection
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClickChecked={(id) => onClickChecked(id)}
            onChangeMode={({id, isEdit}) => onChangeMode({id, isEdit})}
            onSave={(id, title) => onSave(id, title)}
            onClickDeleted={(id) => onClickDeleted(id)}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
