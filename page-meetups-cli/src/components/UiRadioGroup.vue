<template>
  <div class="radio-group">
    <ui-radio-button :checked="option.value === selected" :value="option.value" :text="option.text"
      @change="$emit('change', $event)" class="radio-group__button"
      v-for="option in options" :key="option.value">
      <label :for="option.value" class="radio-group__label">{{option.text}}</label>
    </ui-radio-button>
  </div>
</template>

<script>

import UiRadioButton from "./UiRadioButton";

export default {
  name: "UiRadioGroup",
  components: {UiRadioButton},

  props: {
    options: {
      type: Array,
      required: true
    },
    selected: String
  },

  model: {
    event: 'change',
    prop: 'selected'
  }
}
</script>

<style scoped>

</style>
