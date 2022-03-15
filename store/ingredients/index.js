// import axios from "axios";

export const state = () => ({
  ingredients: [],
  ingredient: null,
  frames:[],
  operators:[],
  glass_type:[],
  products:[],
  glasses:[]
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
  setGlasses(state, glasses) {
    state.glasses = glasses
  },
  setOperators(state,operators ) {
    state.operators = operators
  },
}

export const actions = {

  getIngredients(context) {
    return this.$axios.get('/components')
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setIngredients', res.data.data)
          return Promise.resolve(res.data.data)
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
    return this.$axios.get('/frames')
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
  getOperators(context) {
    return this.$axios.get('/operators')
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setOperators', res.data.data)
          console.log(res.data, 'setOperators')
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getGlasses(context) {
    return this.$axios.get('/glasses')
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setGlasses', res.data.data)
          console.log(res.data, 'setGlasses')
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
  createOperators(context , data) {
    return this.$axios.post('/operators' , data)
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
  createGlasses(context , data) {
    return this.$axios.post('/glasses' , data)
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
  getGlasses(state) {
    return state.glasses
  },
  getOperators(state) {
    return state.operators
  },
}
