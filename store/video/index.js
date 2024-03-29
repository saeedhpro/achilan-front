// import axios from "axios";

export const state = () => ({
  videos: [],
  portfolios:[]


})

export const mutations = {

  setVideos(state, videos) {
    state.videos = videos
  },
  setPortfolios(state, portfolios) {
    state.portfolios = portfolios
  },
}

export const actions = {

  getVideos(context) {
    return this.$axios.get('/videos')
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setVideos', res.data.data)
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getPortfolios(context) {
    return this.$axios.get('/portfolios')
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setPortfolios', res.data.data)
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },

  createVideo(context , data) {
    return this.$axios.post('/videos' , data)
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
  createPortfolios(context , data) {
    return this.$axios.post('/portfolios' , data)
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

  getVideos(state) {
    return state.videos
  },
  getPortfolios(state) {
    return state.portfolios
  },
}
