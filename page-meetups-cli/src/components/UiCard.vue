<template>
  <article class="meetup-card card">
    <div class="card__col">
      <slot name="card-cover"></slot>
    </div>
    <div class="card__col">
      <div class="card__content">
        <slot name="ui-badge"></slot>
        <slot name="card-info"></slot>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: "UiCard",

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

}
</script>

<style scoped>

</style>
