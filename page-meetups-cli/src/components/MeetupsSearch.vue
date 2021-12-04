<template>
  <ui-input :valueForInput="searchItem" @change="$emit('changeMeetupSearch', $event)" >
    <template v-slot:uiLeftIcon>
      <div class="input-group__icon">
        <ui-icon iconName="icon-search" alt="icon-search" class="meetup-info__icon" style="position: relative"></ui-icon>
      </div>
    </template>
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
