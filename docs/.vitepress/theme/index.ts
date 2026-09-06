// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import DemoPhone from "../../vue-components/demo-phone.vue";
import NotFound from "../../vue-components/not-found.vue";
import { onRouteChanged, setupTypeFields } from "./type-fields-client";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'not-found': ()=>h(NotFound)
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router }) {
    app.component("DemoPhone", DemoPhone);
    if (typeof window !== "undefined") {
      setupTypeFields();
      const prev = router.onAfterRouteChanged;
      router.onAfterRouteChanged = (to) => {
        prev?.(to);
        onRouteChanged();
      };
    }
  },
} satisfies Theme;
