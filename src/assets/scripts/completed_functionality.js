import Todo, { todos } from './todo.js';
import loadTodo from './todo_loader.js';

const buttonClear = document.querySelector('.clear_btn');

const updateIndex = () => {
  todos.forEach((todo, index) => { todo.id = index; });
  return Todo.saveTolocalStorage();
};

const completedTodo = (target) => {
  const { id } = target.parentElement.parentElement;
  todos.forEach((todo) => {
    if (todo.id === +id) todo.completed = !todo.completed;
  });
  Todo.saveTolocalStorage();
  return loadTodo();
};

const clearAllTodo = () => {
  const newTodos = todos.filter((todo) => todo.completed !== true);
  Todo.setTolocalStorage(newTodos);
  Todo.saveTolocalStorage();
  updateIndex();
  return loadTodo();
};

buttonClear.addEventListener('click', () => clearAllTodo());

export { completedTodo, clearAllTodo, updateIndex };
