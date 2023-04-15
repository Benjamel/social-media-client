import { logout } from './logout';
import { mockLocalStorage } from '../../storage/mockStorage';

global.localStorage = new mockLocalStorage();

describe('logout', () => {
  it('removes token and profile from storage', () => {
    global.localStorage.setItem('token', 'test_token');
    global.localStorage.setItem(
      'profile',
      JSON.stringify({ name: 'benjatesting' })
    );

    logout();

    expect(global.localStorage.getItem('token')).toBeNull();
    expect(global.localStorage.getItem('profile')).toBeNull();
  });
});
