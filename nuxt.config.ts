export default defineNuxtConfig({
  css: ["@/assets/styles/reset.css", "@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/_variables.scss";`,
        },
      },
    },
  },
  app: {
    head: {
      title: "Akinori's Portfolio",
      meta: [{ name: "description", content: "Portfolio" }],
      link: [{ rel: "icon", href: "/images/favicon.png" }],
    },
  },
});
