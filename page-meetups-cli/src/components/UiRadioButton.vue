<template>
  <div>
    <input
        id="radio-buttons_date_all"
        class="radio-group__input"
        type="radio"
        :checked="selected === option.value"
        :name="option.value"
        :value="option.value"
        @change="$emit('change', option.value)"
    />
    <label :for="option.value" class="radio-group__label">{{option.text}}</label>
  </div>
</template>

<script>
export default {
  name: "UiRadioButton",
  props: {
    selected: {
      type: String,
      required: true
    },
    option: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
