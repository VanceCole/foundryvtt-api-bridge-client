/**
 * Prints formatted console msg if string, otherwise dumps object
 * @param data {String | Object} Output to be dumped
 * @param force {Boolean}        Log output even if CONFIG.debug.bridge
 */
 export function log(data, force = false) {
  if (CONFIG.debug.bridge || force) {
    // eslint-disable-next-line no-console
    if (typeof data === 'string') console.log(`API Bridge | ${data}`);
    // eslint-disable-next-line no-console
    else console.log(data);
  }
}
