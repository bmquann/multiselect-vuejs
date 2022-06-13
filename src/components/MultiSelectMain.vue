<template>
  <div class="mutilSelect">
    <MultiSelectSelect :selected="selected">
      <MultiSelectOption
        slot="option"
        v-for="(item, index) in data"
        :key="index"
        :item="item"
        @selectClick="handleSelected"
      ></MultiSelectOption>
    </MultiSelectSelect>
  </div>
</template>

<script>
import MultiSelectSelect from "./MultiSelectSelect.vue";
import MultiSelectOption from "./MultiSelectOption.vue";
import { mapState } from "vuex";
export default {
  components: {
    MultiSelectSelect,
    MultiSelectOption,
  },
  data() {
    return {
      selected: [],
    };
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
      // selected : (state) => state.selected
    }),
  },
  created() {
    this.$store.dispatch("getData");
  },

  watch: {},
  methods: {
    handleSelected(value) {
      console.log(value.name);
      // this.$store.commit('UPDATE_SELECTED_DATA',value.name)
                 var index =  this.selected.indexOf(value.name)
            if (index === -1) {
                this.selected.push(value.name)
            }else{
                this.selected = this.selected.filter(item => item != value.name)
            }
      console.log(this.selected);
    },
  },
};
</script>

<style scoped>
.mutilSelect {
  margin: auto;
  width: 480px;
  height: 550px;
}
</style>
