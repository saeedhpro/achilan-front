// import axios from "axios";

export const state = () => ({
  messages: [],


})

export const mutations = {

  setMessages(state, messages) {
    state.messages = messages
  },
}

export const actions = {

  getMessages(context) {
    return this.$axios
      .get("/contacts")
      .then(function (response) {
        const slide = response.data;
        context.commit('messages', data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },

  sendMessage(context , data) {
    return this.$axios.post('/contacts' , data)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },


}

export const getters = {

  getMessages(state) {
    return state.messages
  },
}
