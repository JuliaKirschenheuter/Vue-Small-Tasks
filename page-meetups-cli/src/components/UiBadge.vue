<template>
    <span :class=" `badge badge_${badgeStyle}` ">
      <slot></slot>
    </span>
</template>

<script>
export default {
  name: "UiBadge",
  props: {
    badgeStyle: String,
  }
}
</script>

<style scoped>

</style>
