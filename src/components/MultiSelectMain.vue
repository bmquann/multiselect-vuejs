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
      selected: null,
    };
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
    }),
  },
  created() {
    this.$store.dispatch("getData");
  },

  watch: {},
  methods: {
    handleSelected(value) {
      this.selected = value.name;
    },
  },
};
</script>

<style  scoped>
.mutilSelect {
  margin: auto;
  width: 480px;
  height: 550px;
}
</style>
