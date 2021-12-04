<template>
  <div class="container">
    <div class="filters-panel">
      <div class="filters-panel__col">
        <ui-radio-group v-model="filter.date" :options="$options.filterDataOptions" ></ui-radio-group>
      </div>

      <div class="filters-panel__col">
        <div class="form-group form-group_inline">
          <meetups-search v-model="filter.search"  ></meetups-search>
        </div>
        <div class="form-group form-group_inline">
          <ui-button-group :selected.sync="view"></ui-button-group>
        </div>
      </div>
    </div>

    <template v-if="meetups">
      <template v-if="filteredMeetups.length">
        <meetups-list v-if="view === 'list'" :meetups="filteredMeetups"></meetups-list>
        <div v-else-if="view === 'calendar'" class="meetups-calendar"><meetups-calendar></meetups-calendar></div>
      </template>

      <div v-else class="alert"><meetups-not-found></meetups-not-found></div>
    </template>

    <div v-else class="alert">Загрузка...</div>
  </div>
</template>

<script>

import MeetupsCalendar from "@/components/MeetupsCalendar";
import MeetupsList from "@/components/MeetupsList";
import MeetupsNotFound from "@/components/MeetupsNotFound";
import UiButtonGroup from "@/components/UiButtonGroup";
import UiRadioGroup from "@/components/UiRadioGroup";
import MeetupsSearch from "@/components/MeetupsSearch";

import {getMeetupCoverLink} from "../data";

const filterDataOptions = [
  { text: 'Все', value: 'all' },
  { text: 'Прошедшие', value: 'past' },
  { text: 'Ожидаемые', value: 'future' },
];

export default {
  name: "PageMeetups",

  props: {
    meetups: {
      required: true,
      type: Array
    }
  },

  components: {
    MeetupsSearch,
    UiRadioGroup,
    MeetupsCalendar,
    MeetupsList,
    MeetupsNotFound,
    UiButtonGroup
  },

  filterDataOptions,

  data() {
    return {
      filter: {
        date: 'all',
        participation: 'all',
        search: '',
      },
      view: 'list',
    };
  },

  computed: {
    precessedMeetups() {
      return this.meetups.map(meetup => ({
        ...meetup,
        image: meetup.imageId ? getMeetupCoverLink(meetup) : null,
        localeDate: this.formatAsLocalDate(meetup.date)
      }))
    },
    filteredMeetups() {
      const dateFilter = (meetup) =>
          this.filter.date === 'all' ||
          (this.filter.date === 'past' && new Date(meetup.date) <= new Date()) ||
          (this.filter.date === 'future' && new Date(meetup.date) > new Date());

      const participationFilter = (meetup) =>
          this.filter.participation === 'all' ||
          (this.filter.participation === 'organizing' && meetup.organizing) ||
          (this.filter.participation === 'attending' && meetup.attending);

      const searchFilter = (meetup) =>
          [meetup.title, meetup.description, meetup.place, meetup.organizer]
              .join(' ')
              .toLowerCase()
              .includes(this.filter.search.toLowerCase());

      return this.precessedMeetups.filter((meetup) => dateFilter(meetup) && participationFilter(meetup) && searchFilter(meetup));
    },
  },

  methods: {
    formatAsLocalDate(timestamp) {
      return new Date(timestamp).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },

    formatAsIsoDate(timestamp) {
      return new Date(timestamp).toISOString().split('T')[0];
    },
  }
}
</script>

<style scoped>

</style>
