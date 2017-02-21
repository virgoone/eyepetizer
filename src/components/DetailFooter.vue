<template>
  <footer class="vue-footer">
    <router-link :to="'/'">
      <div class="bottom-logo"></div>
    </router-link>
    <img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.9c58110c.png" class="qrcode">
    <div class="qr-tips">长按二维码关注「开眼 Eyepetizer」微信公众号</div>
  </footer>
</template>

<script>
export default {
  name: 'DetailFooter',
};
</script>
