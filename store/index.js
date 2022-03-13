

export const actions = {
  async nuxtServerInit(context) {
    const token = this.$cookies.get('token') || ''
    this.$axios.setHeader('Content-Type', `application/json`)
    this.$axios.setHeader('Accept', `application/json`)
    this.$axios.setHeader('Authorization', `Bearer ${token}`)
    this.$axios.get('/admin/auth/info')
      .then(res => {
        if (res.status === 401) {
          context.commit('login/setUser', null);
          context.commit('login/setToken', null);
          this.$cookies.remove('token')
        } else {
          context.commit('login/setUser', res.data);
          context.commit('login/setToken', token);
        }
      })
      .catch(err => {
        context.commit('login/setUser', null);
        context.commit('login/setToken', null);
        this.$cookies.remove('token')
      })
  },
}
