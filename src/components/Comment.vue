<template>
  <div class="reply">
      <div class="avatar" v-bind:style ="comment.cover"></div>
      <div class="entity">
        <p class="username" :data-uid="comment.uid">{{comment.username}}</p>
        <p class="time">{{comment.time}}</p>
        <p class="text">{{comment.message}}</p>
        <div v-show="!comment.lasted" class="divider"></div>
      </div>
      <div class="like">
        <div class="like-count">
          {{comment.likeCount}}
          <img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_like_grey@3x.d2a2a2a8.png" alt="点赞">
        </div>
        <div v-show="comment.hot" class="like-count-hot">- Hot -</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: Object,
  },
};
</script>
