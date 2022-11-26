import "@/styles/index.css";

import Maska from "maska";
import { createApp } from "vue";
import VueNumberFormat from "vue-number-format";
import vue3StarRatings from "vue3-star-ratings";

import definePlugins from "@/plugins";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
definePlugins(app);
app.use(router);
app.use(Maska);
app.component("vue3-star-ratings", vue3StarRatings);
app.use(VueNumberFormat, { prefix: "US$ ", decimal: ",", thounsand: "." });
app.mount("#app");
