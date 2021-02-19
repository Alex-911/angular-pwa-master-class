import * as fromSignout from './signout.actions';

describe('loadSignouts', () => {
  it('should return an action', () => {
    expect(fromSignout.loadSignouts().type).toBe('[Signout] Load Signouts');
  });
});
