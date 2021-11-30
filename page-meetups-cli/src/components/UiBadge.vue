<template>
  <div>
    <slot name="badge-success">
      <span class="meetup-card__badge badge badge_success">{{badgeText}}</span>
    </slot>
    <slot name="badge-primary">
      <span class="meetup-card__badge badge badge_success">{{badgeText}}</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: "UiBadge",
  props: {
    badgeText: String,
  }
}
</script>

<style scoped>

</style>
