import { log } from '../helpers.js';

export default class Bridge {
  constructor() {
    this.listeners = {};
    this.hooks = {};
  }
  
  connect() {
    const server = game.settings.get('api-bridge', 'server');
    log(`Connecting to ${server}...`);
    this.ws = new WebSocket(server);
    this.ws.addEventListener('open', () => { log('Connected') })
    this.ws.addEventListener('message', (msg) => {
      this.onMessage(msg, this.listeners)
    });
  };

  send(message) {
    log(`Sending message`);
    const msg = JSON.stringify(message);
    console.log(msg);
    this.ws.send(msg);
  };

  onMessage(message, listeners) {
    log(`Receiving message`);
    const msg = JSON.parse(message.data);
    if (msg.type && listeners[msg.type]) listeners[msg.type](msg);
    else log(`Received message but could not find a valid listener for it`);
  };

  registerListener(id, callback) {
    log(`Registered listener: ${id}`);
    this.listeners[id] = callback;
  };
}
