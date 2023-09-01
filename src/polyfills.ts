// zone используется angular
import 'zone.js/dist/zone';
(window as any).process = {
    env: { DEBUG: undefined },
  };
(window as any).global = window;