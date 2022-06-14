<template>
  <div class="mutilSelect">
    <MultiSelectSelect :selected="selected">
      <MultiSelectOption
        slot="option"
        v-for="(item, index) in data"
        :key="index"
        :item="item"
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
    };
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
      selected : (state) => state.selected
    }),
  },
  created() {
    this.$store.dispatch("getData");
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
