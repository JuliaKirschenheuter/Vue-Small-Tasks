<template>
  <article class="card">
    <div class="card__col">
      <div class="card__cover" :style="imageUrl && { '--bg-url': `url('${imageUrl}')` }">
        <slot name="coverTitle"></slot>
      </div>
    </div>
    <div class="card__col">
      <div class="card__content">
        <slot></slot>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: "UiCard",

  props: {
    imageUrl: {
      type: String,
      required: true
    }
  },

}
</script>

<style scoped>

</style>
