export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css", "animate.css/animate.min.css"],

    head: {
        title: "David Torossyan Personal Website Software Engineer",
        meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
        script: [{ type: "module", src: "/js/aos.js" }],
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    build: {
        transpile: ["@fortawesome/vue-fontawesome"],
    },

    modules: ["vue3-carousel-nuxt", "@nuxt/image-edge"],

    fontawesome: {
        component: "FontAwesomeIcon",
        suffix: false, // adds 'Fa' prefix to component names to avoid conflicts, set to true if needed
        icons: {
            solid: ["farobot", "fashield-halved", "fadesktop", "faglobe"], // example icons
            brands: ["docker", "falaravel", "fajs", "fapython"], // example brand icons
        },
    },

    nitro: {
        prerender: {
            routes: [
                "/_ipx/w_500/images/me.webp",
                "/_ipx/_/images/school.webp",
                "/_ipx/_/images/work.webp",
                "/_ipx/_/images/online-course.webp",
                "/_ipx/_/icons/linked.webp",
                "/_ipx/_/icons/tg.png",
                "/_ipx/_/icons/twitter.webp"
            ],
        },
    },
});
