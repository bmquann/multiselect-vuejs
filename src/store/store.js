
import axios from 'axios';

import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

const BASE_API_URL = 'https://provinces.open-api.vn/api/'

export default new Vuex.Store({
    state: {
        data: [1]
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data
        }
    },
    actions: {
        getData({ commit }) {
            axios.get(BASE_API_URL + '?depth=2')
                .then(response => {
                    commit('SET_DATA', response.data)
                })
        }
    },
    getters: {
        cities: (state) => state.data.name,
        // city_id: (state) => state.posts.needed_data.data_req_1,
    }
});