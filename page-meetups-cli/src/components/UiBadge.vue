<template>
  <div>
    <slot name="badgeSuccess">
      <span class="meetup-card__badge badge badge_success">{{badgeText}}</span>
    </slot>
    <slot name="badgePrimary">
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
