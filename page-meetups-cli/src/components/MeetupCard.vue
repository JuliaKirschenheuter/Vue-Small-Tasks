<template>
  <ui-card class="meetup-card" :imageUrl="meetup.image">
    <template v-slot:coverTitle>
      <header>{{ meetup.title }}</header>
    </template>
    <template>
      <ul class="meetup-info">
        <li class="meetup-info__item">
          <ui-icon name="icon-user" alt="user" class="meetup-info__icon"></ui-icon>
          {{ meetup.organizer }}
        </li>
        <li class="meetup-info__item">
          <ui-icon name="icon-map" alt="map" class="meetup-info__icon"></ui-icon>
          {{ meetup.place }}
        </li>
        <li class="meetup-info__item">
          <ui-icon name="icon-cal-lg" alt="icon-cal-lg" class="meetup-info__icon"></ui-icon>
          <time>{{meetup.localeDate}}</time>
        </li>
      </ul>

      <ui-badge v-if="meetup.organizing" badgeStyle="success" class="meetup-card__badge">
        Участвую
      </ui-badge>

      <ui-badge v-else-if="meetup.attending" badgeStyle="primary" class="meetup-card__badge">
        Организую
      </ui-badge>
    </template>
  </ui-card>
</template>

<script>

import UiCard from "@/components/UiCard";
import UiIcon from "@/components/UiIcon";
import UiBadge from "@/components/UiBadge";

export default {
  name: "MeetupCard",

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  components: {
    UiCard,
    UiIcon,
    UiBadge
  }

}
</script>

<style scoped>

</style>
