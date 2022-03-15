// import {setToken, get, post, put} from '../plugins/axios'

// require('whatwg-fetch')

export const state = () =>({
  token:null,
  user:null,
  email:null,
  notification:[],
  settings:null,
  states:[],
  auth:null,
})

export const mutations ={
  setToken (state, token) {
    state.token = token
  },
  setSettings (state, settings) {
    state.settings = settings
  },
  setUser (state, user) {
    state.user = user
  },
  setEmail(state , email){
    state.email = email
  },
  setNotification(state ,notification){
    state.notification =notification
  },
  setStates(state, states){
    state.states = states
  },
  setAuth(state, user) {
    state.auth = user;
  },
};

export const actions = {
  setUser({commit}, user) {
    commit('setUser', user);
  },
  setToken({commit}, token) {
    this.$cookies.set('token', token);
    commit('setToken', token);
  },
  setSettings(context, settings) {
    setToken(this.$cookies.get('token'));
    return put('/settings', settings)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setSettings', settings);
          return Promise.resolve(res.data)
        }
      })
  },
 register(context, registerData) {
   setToken(this.$cookies.get('token'))
   return post('/register', registerData)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          // commit('setUser', res.user)
          // commit('setToken', res.token)
          context.commit('setEmail', registerData.email)
          // this.$cookies.set('token', res.token);
          return Promise.resolve()
        }
      })
  },
  login(context, loginData) {
    // setToken(this.$cookies.get('token'))
    // return post('/login', loginData)
    //   .then((res) => {
    //     if (res.status === 401) {
    //       throw new Error('Bad credentials')
    //     } else {
    //       context.commit('setUser', res.user);
    //       context.commit('setToken', res.token);
    //       this.$cookies.set('token', res.token);
    //       return Promise.resolve(res.user)
    //     }
    //   })


    return new Promise((resolve, reject) => {
      this.$axios.$post(
        `/order/${auth.phone_number}`,
        {
          otp: auth.otp,
        }
      )
        .then((res) => {
          this.$axios.defaults.headers.common.Authorization = `Bearer ${res.access_token}`;
          this.$cookies.set('token', res.access_token)
          this.$cookies.set('refresh_token', res.refresh_token)
          context.dispatch("checkToken")
            .then((res) => {
              resolve(res)
            });

        })
        .catch(error => {
          context.commit(SET_IS_AUTHENTICATED, false);
          reject(error);
        });
    });

  },

  sendEmail(context, loginData) {
    setToken(this.$cookies.get('token'))
    return post('/password/email', loginData)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')

        } else {
          return Promise.resolve(res)
        }
      })
      .catch(err=>{
        return Promise.reject(err)
      })
  },
  checkToken(context, loginData) {
    setToken(this.$cookies.get('token'))
    return post('/password/check', loginData)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')

        } else {
          return Promise.resolve(res)
        }
      })
      .catch(err=>{
        return Promise.reject(err)
      })
  },
  requestChangePassword(context, loginData) {
    setToken(this.$cookies.get('token'))
    return post('/password/change', loginData)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')

        } else {
          return Promise.resolve(res)
        }
      })
      .catch(err=>{
        return Promise.reject(err)
      })
  },
  ChangePassword(context, registerData) {
    setToken(this.$cookies.get('token'))
    return put('/user/password/change', registerData)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return Promise.resolve(res.data)
        }
      })
      .catch(err=>{

      })
  },
  exit(context){
    context.commit('setToken' ,null)
    context.commit('setUser' , null)
    this.$cookies.set('token', null);
  },
  getStatesList(context) {
    return get('/states')
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setStates', res.data)
          return Promise.resolve(res.data)
        }
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  },


}
export const getters ={
  token(state){
    return state.token
  },
  user(state){
    return state.user
  },
  getEmail(state){
    return state.email
  },
  login(state){
    return state.user
  },
  getNotifications(status) {
    return status.notification
  },
  getBalance(state){
    return state.user?.balance || 0
  },
  getSettings(state){
    return state.settings
  },
  states(state) {
    return state.states
  },
};
