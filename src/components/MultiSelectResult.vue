<template >
  <div class="province-result" v-if="selected.length > 0">
    <div class="item-result" v-for="(data, index) in selected" :key="index">
      <span class="province-name">{{ data}}</span>
      <img src="../assets/close.png" class="close-button"
        @click="$store.commit('UPDATE_SELECTED_DATA', data)" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["selected"]),
  },
};
</script>

<style scoped>
.province-result {
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 16px;
}

.item-result {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  background: #f8f8f8;
  border-radius: 32px;
  margin:4px
}

.province-name {
  color: #333333;
  padding: 0 20px;
}

.close-button {
  margin-right: 10px;
  cursor: pointer;
  height: 12px;
  width: 12px;
}
</style>