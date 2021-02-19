import * as fromAddTodo from './add-todo.actions';

describe('loadAddTodos', () => {
  it('should return an action', () => {
    expect(fromAddTodo.loadAddTodos().type).toBe('[AddTodo] Load AddTodos');
  });
});
