
import axios from 'axios';

import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

const BASE_API_URL = 'https://provinces.open-api.vn/api/'

export default new Vuex.Store({
    state: {
        data: [ ],
        selected: []
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data
        },
        UPDATE_SELECTED_DATA(state, selected){
            var index =  state.selected.indexOf(selected)
            if (index === -1)
                state.selected.push(selected);
            else {
                state.selected = state.selected.filter(item => item != selected)
            }
        },
        RESET_SELECTED(state){
            state.selected = []
        }
    },
    actions: {
        getData({ commit }) {
            axios.get(BASE_API_URL + '?depth=2')
                .then(response => {
                    commit('SET_DATA', response.data)
                })
        },
    },
    getters: {
        selected: (state) => state.selected
    }
});