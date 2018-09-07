import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';

Vue.config.productionTip = false;

export async function createApp({
  // eslint-disable-next-line no-unused-vars
  context,
  beforeApp = () => {},
  afterApp = () => {},
} = {}) {
  const router = createRouter();
  const store = createStore();

  await beforeApp({
    router,
    store,
  });

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  const result = {
    app,
    router,
    store,
  };

  await afterApp(result);

  return result;
}
