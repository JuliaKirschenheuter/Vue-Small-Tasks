<template>
  <div class="input-group input-group_icon input-group_icon-left">
    <input
        class="form-control form-control_rounded form-control_sm"
        placeholder="Поиск"
        type="search"
        :value="valueForInput"
        @input="$emit('change', $event.target.value)"
    />
    <slot name="ui-left-icon"></slot>
  </div>
</template>

<script>

export default {
  name: "UiInput",
  props: {
    valueForInput: {
      type: String,
      required: true
    }
  },

}
</script>

<style scoped>

</style>
