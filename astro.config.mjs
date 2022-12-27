import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import react from "@astrojs/react";

export default defineConfig({
    site: "https://theodorekakagis.neocities.org",
    integrations: [sitemap(), react(), compress()],
});
