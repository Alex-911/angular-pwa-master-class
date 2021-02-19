import * as fromSignInWithGoogle from './sign-in-with-google.actions';

describe('loadSignInWithGoogles', () => {
  it('should return an action', () => {
    expect(fromSignInWithGoogle.loadSignInWithGoogles().type).toBe('[SignInWithGoogle] Load SignInWithGoogles');
  });
});
