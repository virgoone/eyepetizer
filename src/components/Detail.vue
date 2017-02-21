<template>
  <div class="vue-container">
    <div class="vue-player">
      <video :controls='state.playing' class="vue-player-video" webkit-playsinline="true" playsinline="true" preload="none" :src="v.url"></video>
      <div v-show='!state.playing' class="cover" v-bind:style = "v.cover"></div>
      <div v-show='!state.playing' class="play-button" @click="play"></div>
    </div>
    <div class="vue-video-info">
      <div class="vue-meta-positioner">
        <div class="video-meta">
          <h1>{{v.title}}</h1>
          <div class="divider divider-short"></div>
          <p>{{v.cat}} / {{v.time}}</p>
          <p class="desciption">
            {{v.desc}}
          </p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="video-cover-blurred"></div>
      <div class="relate-video-list">
        <!-- relate video list repeat start-->
          <RelateVideo
            v-for="video in videoList.videoList"
            :key="video.id"
            :video="video">
          </RelateVideo>
        <!-- relate video list repeat end-->
      </div>
      <div class="divider"></div>
      <div class="reply-list-container">
        <header class='text-center'>热门评论</header>
        <div class="reply-list">
          <!-- reply list repeat start-->
         <Comment
            v-for="reply in replyList.replyList"
            :key="reply.id"
            :comment="reply">
          </Comment>
          <!-- reply list repeat end-->
          
        </div>
      </div>
      <div class="divider"></div>
      <div v-show="v.tags&&v.tags.length>0" class="tag-list-container">
        <header class="text-center">热门标签</header>
        <div class="tag-list">
          <span class="tag" v-for="tag in v.tags">{{tag.name}}</span>
        </div>
        <div class="divider"></div>
      </div>
      
      <DetailFooter></DetailFooter>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RelateVideo from 'components/RelateVideo';
import DetailFooter from 'components/DetailFooter';
import Comment from 'components/Comment';

export default {
  name: 'detail',
  components: { RelateVideo, DetailFooter, Comment },
  data() {
    return {
      $video: null,
      player: {
        $player: null,
      },
      state: {
        playing: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      video: 'videoInfo',
      videoList: 'relateList',
      replyList: 'repliesList',
    }),
    v() {
      /* eslint-disable */
      const _v = this.video;
      return {
        title: _v.title,
        desc: _v.description,
        cat: _v.category,
        tags: _v.tags,
        url: _v.playUrl,
        time: _v.time,
        cover: {
          backgroundImage: `url(${_v.coverForDetail})`,
        },
      };
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  mounted() {
    this.$video = this.$el.getElementsByTagName('video')[0];
    this.init();
  },
  methods: {
    fetchData() {
      this.state.playing = false
      const VID = this.$route.params.vid;
      if (!VID) {
        this.$router.go('/');
      }
      this.$store.dispatch('getVideoInfo', { VID });
      this.$store.dispatch('getRelateVideoList', { VID });
      this.$store.dispatch('getRepliesVideoList', { VID });
    },
    init() {
      this.initPlayer();
    },
    initPlayer() {
      const $player = this.$el.getElementsByClassName('vue-player-video')[0];
      this.player.$player = $player
    },
    play() {
      
      this.state.playing = !this.state.playing;
      
      if (this.$video) {
          if (this.state.playing) {
              this.$video.play()
              this.$video.addEventListener('timeupdate', this.timeline)
              this.$video.addEventListener('ended', (e) => {
                this.state.playing = false
                this.$video.currentTime = 0
              })
          } else {
              this.$video.pause()
          }
      }
    },
  },
};
</script>

<style lang="scss">
  @import "../assets/scss/detail.scss";
</style>
