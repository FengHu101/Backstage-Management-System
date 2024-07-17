import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/less/index.less";
import router from "./router";
// Import Element-Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// Import Icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";
import "@/api/mock.js";
const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus);
app.use(pinia);
app.use(router).mount("#app");

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
