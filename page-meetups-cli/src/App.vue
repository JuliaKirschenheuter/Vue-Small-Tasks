<template>
  <div id="app">
    <page-meetups :meetups="meetups"></page-meetups>
  </div>
</template>

<script>

import PageMeetups from "@/components/PageMeetups";
import {fetchMeetups} from "./data";

export default {
  name: "App",
  components: {PageMeetups},

  data() {
    return {
      meetups: []
    }
  },

  async created() {
    this.meetups = await fetchMeetups();
  }
}
</script>

<style scoped>

</style>
