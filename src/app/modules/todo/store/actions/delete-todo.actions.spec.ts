import * as fromDeleteTodo from './delete-todo.actions';

describe('loadDeleteTodos', () => {
  it('should return an action', () => {
    expect(fromDeleteTodo.loadDeleteTodos().type).toBe('[DeleteTodo] Load DeleteTodos');
  });
});
