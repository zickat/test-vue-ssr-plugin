import { loadAsyncComponents } from '@akryum/vue-cli-plugin-ssr/client';
import './registerServiceWorker';

import { createApp } from './main';

createApp({
  async beforeApp({ router }) {
    await loadAsyncComponents({ router });
  },

  // eslint-disable-next-line no-unused-vars
  afterApp({ app, router, store }) {
    store.replaceState(window.__INITIAL_STATE__);
    app.$mount('#app');
  },
});
