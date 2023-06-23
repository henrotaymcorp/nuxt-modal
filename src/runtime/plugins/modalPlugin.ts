import { modalPlugin } from "@henrotaymcorp/vue-modal";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(modalPlugin);
});
