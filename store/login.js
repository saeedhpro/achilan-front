export const state = () => ({
  token: null,
  user: null,
})
export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setToken(state, token) {
    state.token = token
  },
}
export const actions = {
  setUser({commit}, user) {
    commit('setUser', user);
  },
  setToken({commit}, token) {
    commit('setToken', token);
  },
  login(context, loginData) {

    return this.$axios.post('/admin/auth/login', loginData)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          const user = res.data.data;
          context.commit('setUser', user);
          context.commit('setToken', user.token);
          this.$axios.setHeader('Authorization', `Bearer ${user.token}`)
          this.$cookies.set('token', user.token)
          return Promise.resolve(user)
        }
      })
      .catch(err => {
        return Promise.reject(err);
      })
  },

  check(context, loginData) {

    return this.$axios.get('/admin/auth/user', loginData)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setUser', res.data.data);
          context.commit('setToken', res.data.data.token);
          this.$axios.setHeader('Authorization', `Bearer ${res.data.data.token}`)
          return Promise.resolve(res.data.data)
        }
      })
      .catch(err => {
        return Promise.reject(err);
      })
  },
}
export const getters = {
  getUser(state) {
    return state.user
  },
}
