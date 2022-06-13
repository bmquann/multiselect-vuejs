
import axios from 'axios';

import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

const BASE_API_URL = 'https://provinces.open-api.vn/api/'

export default new Vuex.Store({
    state: {
        data: [ ],
        selected: ['Tỉnh Hà Giang']
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data
        },
        UPDATE_SELECTED_DATA(state, selected){
            var index =  state.selected.indexOf(selected)
            console.log(index)
            if (index === -1) {
                state.selected.push(selected)
            }else{
                state.selected = state.selected.filter(item => item != selected)
            }
        },
    },
    actions: {
        getData({ commit }) {
            axios.get(BASE_API_URL + '?depth=2')
                .then(response => {
                    commit('SET_DATA', response.data)
                })
        },
        // updateSelected(commit,data){
            
        // }
    },
    getters: {
        cities: (state) => state.data.name,
        // city_id: (state) => state.posts.needed_data.data_req_1,
    }
});