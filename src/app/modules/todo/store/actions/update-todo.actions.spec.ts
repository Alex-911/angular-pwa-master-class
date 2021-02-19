import * as fromUpdateTodo from './update-todo.actions';

describe('loadUpdateTodos', () => {
  it('should return an action', () => {
    expect(fromUpdateTodo.loadUpdateTodos().type).toBe('[UpdateTodo] Load UpdateTodos');
  });
});
