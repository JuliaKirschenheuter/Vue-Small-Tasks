<template>
  <div>
    <ul class="meetups-list">
      <li v-for="meetup in meetups" :key="meetup.id" class="meetups-list__item">
        <a :href="`/meetups/${meetup.id}`" class="meetups-list__item-link" tabindex="0">
          <meetup-card :meetup="meetup"></meetup-card>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

import MeetupCard from "@/components/MeetupCard";
export default {
  name: "MeetupsList",
  props: {
    meetups: {
      type: Array,
      required: true
    }
  },
  components: {
    MeetupCard
  },
}
</script>

<style scoped>

</style>
