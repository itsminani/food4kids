import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import VueFormulate from '@braid/vue-formulate'
import "@/styles/vueFormulate.css"
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.productionTip = false;

Vue.use(VueFormulate)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
