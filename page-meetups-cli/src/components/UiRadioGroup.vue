<template>
  <div class="radio-group">
    <div class="radio-group__button" v-for="option in options" :key="option.value">
      <input
          id="radio-buttons_date_all"
          class="radio-group__input"
          type="radio"
          :checked="selected === option.value"
          :name="option.value"
          :value="option.value"
          @change="$emit('update:selected', option.value)"
      />
      <label :for="option.value" class="radio-group__label">{{option.text}}</label>
    </div>
  </div>

</template>

<script>

export default {
  name: "UiRadioGroup",
  data() {
    return {
      radioGroupName: Math.random()
    }
  },

  props: {
    options: {
      type: Array,
      required: true
    },
    selected: String
  }
}
</script>

<style scoped>

</style>
