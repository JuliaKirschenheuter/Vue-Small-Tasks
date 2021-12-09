<template>
  <div>
    <input
        :id="buttonId"
        class="radio-group__input"
        type="radio"
        :checked="checked"
        :name="value"
        :value="value"
        @change="$emit('change', value)"
    />
    <label :for="buttonId" class="radio-group__label">{{text}}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiRadioButton",
  data() {
    return {
      buttonId: Math.random().toFixed()
    }
  },
  props: {
    checked: {
      type: Boolean,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>

</style>
