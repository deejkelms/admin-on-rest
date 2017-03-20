import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest'

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username } = params
    localStorage.setItem('username', username)
    return Promise.resolve()
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username')
    return Promise.resolve()
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('username') ? Promise.resolve() : Promise.reject()
  }
  return Promise.reject('Unknown method')
}
