<template>
  <label class="container">
    <div for="item" class="option__item" @click="$emit('selectClick', item)">
      <input type="checkbox" />
      <span class="checkmark"></span>
      {{ item.name }} <slot></slot></div
  ></label>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.option__item {
  padding: 8px 0px;
  background-color: #fff;
  transition: background-color 0.2s ease-in;
  font-size: 16px;
    margin-left: 20px;
}
.option__item:hover {
  background-color: #ccc;
}
.input[type="checkbox"] {
  width: 16px !important;
  height: 16px !important;
}
.checkmark {
  position: absolute;
  top: 25%;
  left: 20px;
  height: 16px;
  width: 16px;
  background-color: #eee;

}
input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.container:hover input ~ .checkmark {
  background-color: #ccc;
}
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  left: 5px;
  top: 0px;
  width: 4px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 5px;
  cursor: pointer;
  align-items: center;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
