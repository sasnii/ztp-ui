import * as actions from './../actions/user.actions';
import { User } from 'src/app/models/user';
import { initialState, userReducer } from './user.reducer';


fdescribe('User reducer', () => {

  it('should return initial state when state is undefined', () => {
    const state = userReducer(undefined, { type: '' });
    expect(state).toEqual(initialState);
  });

  describe('loginSuccess action', () => {
    it('should set isLoading to true when loadContactList action is dispatched', () => {
      const expetedItems = {
        loggedIn: true,
        token: '1234',
        role: 1,
        users: null
      };
      const state = userReducer(initialState, actions.loginSuccess({
        token: '1234',
        role: 1
      }));
      expect(state).toEqual(expetedItems);
    });
  });

  describe('logout action', () => {
    it('should clear token and role', () => {
      const expetedItems = {
        loggedIn: false,
        token: null,
        role: null,
        users: null
      };
      const state = userReducer({
        loggedIn: true,
        token: '1234',
        role: 1,
        users: []
      }, actions.logout());
      expect(state).toEqual(expetedItems);
    });
  });

  describe('loadUserListSuccess action', () => {
    it('should set isLoading to true when loadContactList action is dispatched', () => {
      const expetedItems = [{
        id: 9,
        username: 'worker',
        first_name: 'sadsd',
        last_name: 'Last Name',
        role: 1,
        email: 'test@test.com'
      }];
      const state = userReducer(initialState, actions.loadUserListSuccess(
        {users: [{
          id: 9,
          username: 'worker',
          first_name: 'sadsd',
          last_name: 'Last Name',
          role: 1,
          email: 'test@test.com'
        }]}
      ));
      expect(state.users).toEqual(expetedItems);
    });
  });

});
