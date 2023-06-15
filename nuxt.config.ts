// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   css: ["@/assets/styles/main.scss"],
//   vite: {
//     css: {
//       preprocessorOptions: {
//         scss: {
//           additionalData: `@import "@/assets/styles/_variables.scss";`,
//         },
//       },
//     },
//   },
//   app: {
//     head: {
//       title: "Akinori'sPortfolio",
//       meta: [{ name: "description", content: "Portfolio" }],
//       link: [{ rel: "icon", href: "~/assets/images/favicon.ico }],
//     },
//   },
// });
// import { defineNuxtConfig } from "nuxt3";

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
      link: [{ rel: "icon", href: "/favicon.png" }],
    },
  },
});
