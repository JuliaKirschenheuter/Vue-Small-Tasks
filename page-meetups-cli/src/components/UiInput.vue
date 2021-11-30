<template>
  <div class="input-group input-group_icon input-group_icon-left">
    <input
        class="form-control form-control_rounded form-control_sm"
        placeholder="Поиск"
        type="search"
        :value="searchItem"
        @input="$emit('update:searchItem', $event.target.value)"
    />
    <slot name="ui-icon"></slot>
  </div>
</template>

<script>

export default {
  name: "UiInput",
  props: {
    searchItem: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
