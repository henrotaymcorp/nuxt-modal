import {
  defineNuxtModule,
  // createResolver,
  addComponent,
  addImports,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@henrotaymcorp/nuxt-modal",
    configKey: "nuxtModal",
  },
  defaults: {},
  setup(_options, nuxt) {
    // const { resolve } = createResolver(import.meta.url);

    nuxt.options.css.unshift("@henrotaymcorp/vue-modal/dist/style.css");

    addComponent({
      name: "StylelessModal",
      export: "StylelessModal",
      filePath: "@henrotaymcorp/vue-modal",
    });

    addComponent({
      name: "ModalsContainer",
      export: "ModalsContainer",
      filePath: "@henrotaymcorp/vue-modal",
    });

    addComponent({
      name: "RightModal",
      export: "RightModal",
      filePath: "@henrotaymcorp/vue-modal",
    });

    addComponent({
      name: "CenteredModal",
      export: "CenteredModal",
      filePath: "@henrotaymcorp/vue-modal",
    });

    addImports({
      name: "useModal",
      from: "@henrotaymcorp/vue-modal",
    });
  },
});
