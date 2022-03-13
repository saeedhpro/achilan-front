export const state = () => ({
    categories: [],
    glasses: [],
    usages: [],
    frames: [],
    operators: [],
    states: [],
})

export const mutations = {
    setCategories(state, categories) {
        state.categories = categories
    },
    setGlasses(state, glasses) {
        state.glasses = glasses
    },
    setUsages(state, usages) {
        state.usages = usages
    },
    setFrames(state, frames) {
        state.frames = frames
    },
    setOperators(state, operators) {
        state.operators = operators
    },
    setStates(state, states) {
        state.states = states
    },
}
export const actions = {
    getCategories(context, type) {
        return this.$axios.get(`/categories?type=${type}`)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    context.commit('setCategories', res.data.data)
                    return Promise.resolve(res.data.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    getGlasses(context) {
        return this.$axios.get(`/glasses`)
            .then((res) => {
                console.log(res.data.data)
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    context.commit('setGlasses', res.data.data)
                    return Promise.resolve(res.data.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    getUsages(context) {
        return this.$axios.get(`/usages`)
            .then((res) => {
                console.log(res.data.data)
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    context.commit('setUsages', res.data.data)
                    return Promise.resolve(res.data.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    getFrames(context) {
        return this.$axios.get(`/frames`)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    context.commit('setFrames', res.data.data)
                    return Promise.resolve(res.data.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    getOperators(context) {
        return this.$axios.get(`/operators`)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    context.commit('setOperators', res.data.data)
                    return Promise.resolve(res.data.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    getStates(context) {
        return this.$axios.get(`/states`)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {

                    console.log('State List:')
                    console.log(res.data.data)

                    context.commit('setStates', res.data.data)
                    return Promise.resolve(res.data.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    getCard(context) {
        return this.$axios.get(`/orders/last`)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    return Promise.resolve(res.data.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    sendCode(context, data) {
        return this.$axios.post(`/orders`, data)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    return Promise.resolve(res)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    verifyOtp(context, data) {
        return this.$axios.post(`/orders/verify`, data)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    return Promise.resolve(res)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    addItem(context, data) {
        return this.$axios.post(`/orders/add`, data)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    return Promise.resolve(res)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
}


export const getters = {
    getCategories(state) {
        return state.categories
    },
    getGlasses(state) {
        return state.glasses
    },
    getUsages(state) {
        return state.usages
    },
    getFrames(state) {
        return state.frames
    },
    getStates(state) {
        return state.states
    },
    getOperators(state) {
        return state.operators
    },
}
