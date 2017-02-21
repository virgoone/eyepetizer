import axios from 'axios';
import querystring from 'querystring';

const BASE_URL = 'http://baobab.wandoujia.com';
const HOME_PAGE_URL = `${BASE_URL}/api/v1/feed`;
const VIDEO_DETAIL_URL = `${BASE_URL}/api/v1/video`;
const RELATE_VIDEO_LIST_URL = `${BASE_URL}/api/v1/video/related`;
const REPLIES_VIDEO_LIST_URL = `${BASE_URL}/api/v1/replies/video`;

export default {
  /*
  * 获取首页列表信息
  * */
  getHomePageList: (params) => {
    /* eslint-disable no-param-reassign */
    params = querystring.stringify(params);
    const $promise = axios.get(`${HOME_PAGE_URL}?${params}`);
    return $promise;
  },
  /*
  * 获取视频详情信息
  **/
  getVideoDetail: (VID) => {
    const $promise = axios.get(`${VIDEO_DETAIL_URL}/${VID}`);
    return $promise;
  },
  /*
  * 获取视频relate
  **/
  getRelateVideoList: (VID, params) => {
    params = querystring.stringify(params);
    const $promise = axios.get(`${RELATE_VIDEO_LIST_URL}/${VID}?${params}`);
    return $promise;
  },
  /*
  * 获取视频评论
  **/
  getRepliesVideoList: (params) => {
    params = querystring.stringify(params);
    const $promise = axios.get(`${REPLIES_VIDEO_LIST_URL}?${params}`);
    return $promise;
  },
};
