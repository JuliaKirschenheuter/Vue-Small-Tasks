<template>
  <ui-input :value="searchItem" @change="$emit('changeMeetupSearch', $event)" >
      <div class="input-group__icon">
        <ui-icon name="icon-search" alt="icon-search" class="meetup-info__icon" style="position: relative"></ui-icon>
      </div>
  </ui-input>
</template>

<script>
import UiInput from "@/components/UiInput";
import UiIcon from "@/components/UiIcon";

export default {
  name: "MeetupSearch",
  props: {
    searchItem: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      changedSearchItem: ''
    }
  },

  components: {
    UiInput,
    UiIcon
  },

  model: {
    prop: 'searchItem',
    event: 'changeMeetupSearch'
  }
}
</script>

<style scoped>

</style>
