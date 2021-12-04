<template>
  <div class="radio-group">
    <ui-radio-button :selected="selected" :option="option"
      @change="$emit('updateUiRadioGroup', $event)" class="radio-group__button"
      v-for="option in options" :key="option.value">
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
    event: 'updateUiRadioGroup',
    prop: 'selected'
  }
}
</script>

<style scoped>

</style>
