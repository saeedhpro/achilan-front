// import axios from "axios";

export const state = () => ({
  slide: [],


})

export const mutations = {

  setSlides(state, slide) {
    // console.log(slide)
    state.slide = slide
  },
}

export const actions = {

  getSlides(context) {
    return this.$axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        const slide = response.data;
        context.commit('setSlides', slide)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },

}

export const getters = {

  getSlides(state) {
    return state.slide
  },
}
