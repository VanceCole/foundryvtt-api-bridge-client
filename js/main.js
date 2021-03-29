import { config } from './config.js';
import Bridge from './classes/Bridge.js';
import { log } from './helpers.js';

CONFIG.debug.bridge = true;
log('Init');

Hooks.once('init', () => {
  // Register settings
  config.forEach((cfg) => {
    game.settings.register('api-bridge', cfg.name, cfg.data);
  });
  game.bridge = new Bridge();
  game.bridge.registerListener('handshake', handshakeCallback);
});

Hooks.once('ready', () => {
  if (game.settings.get('api-bridge', 'auto')) game.bridge.connect();
});

function handshakeCallback() {
  log(`Received handshake`);
}
