<template>
  <ui-card :meetup="meetup">
    <template v-slot:cardCover>
      <div class="card__cover" :style="meetup.image && { '--bg-url': `url('${meetup.image}')` }">
        <header>{{ meetup.title }}</header>
      </div>
    </template>
    <template v-slot:cardInfo>
      <ul class="meetup-info">
        <li class="meetup-info__item">
          <ui-icon iconName="icon-user" alt="user" class="meetup-info__icon"></ui-icon>
          {{ meetup.organizer }}
        </li>
        <li class="meetup-info__item">
          <ui-icon iconName="icon-map" alt="map" class="meetup-info__icon"></ui-icon>
          {{ meetup.place }}
        </li>
        <li class="meetup-info__item">
          <ui-icon iconName="icon-cal-lg" alt="icon-cal-lg" class="meetup-info__icon"></ui-icon>
          <time>{{meetup.localeDate}}</time>
        </li>
      </ul>
    </template>
    <template v-slot:uiBadge>
      <template v-if="meetup.organizing">
        <ui-badge badgeText="Участвую">
          <template v-slot:badgeSuccess>
          </template>
        </ui-badge>
      </template>
      <template v-if="meetup.attending">
        <ui-badge badgeText="Организую">
          <template v-slot:badgePrimary>
          </template>
        </ui-badge>
      </template>
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
