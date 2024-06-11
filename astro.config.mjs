import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://4cil.nyao.me",
  integrations: [tailwind(), icon(), react(), sitemap({
    filter: (page) => page !== "https://4cil.nyao.me/404",
  })]
});
