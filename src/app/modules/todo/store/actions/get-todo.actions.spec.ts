import * as fromGetTodo from './get-todo.actions';

describe('loadGetTodos', () => {
  it('should return an action', () => {
    expect(fromGetTodo.loadGetTodos().type).toBe('[GetTodo] Load GetTodos');
  });
});
