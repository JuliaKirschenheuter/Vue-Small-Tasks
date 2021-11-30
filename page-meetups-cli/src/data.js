export const API_URL = process.env.VUE_APP_API_URL;

export async function fetchMeetups() {
    return fetch(`${API_URL}/meetups`).then(res => res.json());
}

export function getMeetupCoverLink(meetup) {
    return `https://course-vue.javascript.ru${API_URL}/images/${meetup.imageId}`;
}
