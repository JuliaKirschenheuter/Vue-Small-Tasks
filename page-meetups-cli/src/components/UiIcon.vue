<template>
  <img class="icon" :src="iconSource" alt="icon" />
</template>
<script>


const IconsMapping = {
  'icon-alert-circle': require('@/assets/icons/icon-alert-circle.svg'),
  'icon-cal-lg': require('@/assets/icons/icon-cal-lg.svg'),
  'icon-cal-sm': require('@/assets/icons/icon-cal-sm.svg'),
  'icon-check': require('@/assets/icons/icon-check.svg'),
  'icon-check-circle': require('@/assets/icons/icon-check-circle.svg'),
  'icon-chevron-down': require('@/assets/icons/icon-chevron-down.svg'),
  'icon-clock': require('@/assets/icons/icon-clock.svg'),
  'icon-coffee': require('@/assets/icons/icon-coffee.svg'),
  'icon-key': require('@/assets/icons/icon-key.svg'),
  'icon-list': require('@/assets/icons/icon-list.svg'),
  'icon-map': require('@/assets/icons/icon-map.svg'),
  'icon-pen-tool': require('@/assets/icons/icon-pen-tool.svg'),
  'icon-pill-active': require('@/assets/icons/icon-pill-active.svg'),
  'icon-search': require('@/assets/icons/icon-search.svg'),
  'icon-trash': require('@/assets/icons/icon-trash.svg'),
  'icon-tv': require('@/assets/icons/icon-tv.svg'),
  'icon-user': require('@/assets/icons/icon-user.svg')
}

export default {
  name: "UiIcon",

  props: {
    name: {
      required: true,
      type: String
    }
  },

  IconsMapping,

  computed: {
    iconSource() {
      return this.$options.IconsMapping[this.name]
    }
  }
}
</script>

<style scoped>

</style>
