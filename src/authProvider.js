import api from "./services/api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    return api.post("/session/login", {
      email: username,
      password,
      type: 'admin'
    }).then((response) => {
      console.log(response)
      localStorage.setItem('token', response.data.token);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    })
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    const token = localStorage.getItem('token')
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return Promise.resolve()
    }
    return Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};