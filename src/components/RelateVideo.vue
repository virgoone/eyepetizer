<template>
  <router-link :to="{ name: 'Detail', params: {vid: video.id} }">
    <div class="relate-video" :data-vid='video.id'>
      <div class="relate-cover" v-bind:style = "video.cover">
      </div>
      <div class="meta">
        <div class="title">{{video.title}}</div>
        <div class="category">#{{video.category}} / {{video.time}}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'RelateVideo',
  props: {
    video: Object,
  },
};
</script>
