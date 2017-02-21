import api from 'lib/api';
import moment from 'moment';
import * as types from '../mutations';

const formatTime = (milliseconds) => {
  const durationObj = moment.duration(milliseconds);
  const minutes = durationObj.minutes();
  const seconds = durationObj.seconds();

  let formatString = '';
  if (minutes && minutes > 0) {
    formatString += (minutes > 10) ? `${minutes}'` : `0${minutes}'`;
    formatString += ' ';
  }
  formatString += (seconds > 10) ? `${seconds}"` : `0${seconds}"`;

  return formatString;
};
const state = {
  video: {},
  relateVideo: {},
  repliesVideo: {},
};
/* eslint-disable */
const getters = {
  videoInfo: state => state.video,
  relateList: state => state.relateVideo,
  repliesList: state => state.repliesVideo,
};

const actions = {
    /*
    * 获取视频信息
    * */
  getVideoInfo({ commit }, { VID }) {
    // commit(types.GET_VIDEO_INFO_LOADING, true);
    api.getVideoDetail(VID).then((res) => {
      commit(types.GET_VIDEO_INFO_SUCCESS, { res });
    });
  },
  /*
  * 获取视频relate信息
  * */
  getRelateVideoList({ commit }, { VID }) {
    // commit(types.GET_VIDEO_INFO_LOADING, true);
    api.getRelateVideoList(VID,{num:10}).then((res) => {
      commit(types.GET_VIDEO_LIST_SUCCESS, { res });
    });
  },
  /*
  * 获取视频comment信息
  * */
  getRepliesVideoList({ commit }, { VID }) {
    // commit(types.GET_VIDEO_INFO_LOADING, true);
    api.getRepliesVideoList({num:5,id:VID}).then((res) => {
      commit(types.GET_VIDEO_REPLIES_LIST_SUCCESS, { res });
    });
  },
};
/* eslint-disable */
const mutations = {
  [types.GET_VIDEO_INFO_SUCCESS](state, { res }) {
    res.data.time = formatTime(res.data.duration * 1000);
    state.video = res.data;
  },
  [types.GET_VIDEO_LIST_SUCCESS](state, { res }) {
    const data = res.data;
    data.videoList.map((video) => {
      video.time = formatTime(video.duration * 1000);
      video.cover = {
        backgroundImage: `url(${video.coverForDetail})`,
      };
    });
    state.relateVideo = data;
  },
  [types.GET_VIDEO_REPLIES_LIST_SUCCESS](state, { res }) {
    const data = res.data;
    data.replyList.map((reply,index) => {
      reply.time = moment(reply.createTime).format('YYYY-MM-DD HH:m');
      reply.cover = {
        backgroundImage: `url(${reply.user.avatar})`,
      };
      reply.uid = reply.user.uid;
      reply.username = reply.user.nickname;
      if (index === data.replyList.length-1){
        reply.lasted = true;
      }
    });
    state.repliesVideo = data;
  },
};


export default{
  state,
  getters,
  actions,
  mutations,
};
