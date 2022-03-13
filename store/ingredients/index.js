// import axios from "axios";

export const state = () => ({
  ingredients: [],
  ingredient: null,
  frames:[],
  glass_type:[],
  products:[]
})

export const mutations = {

  setIngredients(state, ingredients) {
    state.ingredients = ingredients
  },
  setIngredient(state, ingredient) {
    state.ingredient = ingredient
  },
  setFrames(state, frames) {
    state.frames = frames
  },
  setGlass_type(state, glass_type) {
    state.glass_type = glass_type
  },
  setProducts(state, products) {
    state.products = products
  },
}

export const actions = {

  getIngredients(context) {
    return this.$axios.get("/components")
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setIngredients', res.data.data)
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getIngredient(context , id) {
    return this.$axios.get(`/components/${id}`)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setIngredient', res.data.data)
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getFrames(context) {
    return this.$axios.get("/frames")
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setFrames', res.data.data)
          console.log(res.data, 'setFrames')
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getGlass_type(context) {
    return this.$axios.get("/glasstypes")
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setGlass_type', res.data)
          console.log(res.data, 'glass_type')
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getProducts(context) {
    return this.$axios.get("/orders")
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setProducts', res.data)
          console.log(res.data, 'setProducts')
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  createComponent(context , data) {
    return this.$axios.post('/components' , data)
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
  createframe(context , data) {
    return this.$axios.post('/frames' , data)
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

  getIngredients(state) {
    return state.ingredients
  },
  getIngredient(state) {
    return state.ingredient
  },
  getFrames(state) {
    return state.frames
  },
  getGlass_type(state) {
    return state.glass_type
  },
  getProducts(state) {
    return state.products
  },
}
