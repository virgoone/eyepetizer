import createDebug from 'debug';

const debug = createDebug('koya:debug');
const info = createDebug('koya:info');
const err = createDebug('koya:error');
const log = createDebug('koya:log');
if (window.localStorage){
  if (!window.localStorage.getItem(debug) && (process.env.NODE_ENV !== 'production')) {
    window.localStorage.debug = 'koya:*';
  }
}
export default debug;
export {
  info,
  err,
  log,
};
