import * as fromCheckAuth from './check-auth.actions';

describe('loadCheckAuths', () => {
  it('should return an action', () => {
    expect(fromCheckAuth.loadCheckAuths().type).toBe('[CheckAuth] Load CheckAuths');
  });
});
