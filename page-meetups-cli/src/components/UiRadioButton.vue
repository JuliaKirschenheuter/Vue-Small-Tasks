<template>
  <div>
    <input
        id="radio-buttons_date_all"
        class="radio-group__input"
        type="radio"
        :checked="checked"
        :name="value"
        :value="value"
        @change="$emit('change', value)"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiRadioButton",
  props: {
    checked: {
      type: Boolean,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
