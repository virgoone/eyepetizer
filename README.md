# 开眼视频Vuejs实现

> A Vue.js project with eyepetizer APP

## API
``` bash
# 获取视频详情
http://baobab.wandoujia.com/api/v1/video/14416

# 获取关联视频
http://baobab.wandoujia.com/api/v1/video/related/14416?num=5

# 获取当前视频评论
http://baobab.wandoujia.com/api/v1/replies/video?id=14416&num=5
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
