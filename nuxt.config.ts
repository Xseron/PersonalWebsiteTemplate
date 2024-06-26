export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: true },
    css: ["~/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css", "animate.css/animate.min.css", "~/assets/css/swiper-bundle.min.css"],

    plugins: [{ src: "@/plugins/vue-awesome-swiper", mode: "client" }],

    
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    build: {
        transpile: ["@fortawesome/vue-fontawesome"],
    },

    modules: ["@nuxt/image-edge"],

    image: {
        format: ["webp"],
    },

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
                "/_ipx/s_400x400/images/me.webp",
                "/_ipx/s_800x800/images/me.webp",

                "/_ipx/s_100x40/images/logo.png",
                "/_ipx/s_200x80/images/logo.png",

                "/_ipx/w_500/images/me.webp",
                "/_ipx/s_800x800/images/me.webp",
                "/_ipx/s_500x350/images/school.webp",
                "/_ipx/s_1000x700/images/school.webp",
                "/_ipx/s_500x350/images/work.webp",
                "/_ipx/s_1000x700/images/work.webp",
                "/_ipx/s_500x350/images/online-course.webp",
                "/_ipx/s_1000x700/images/online-course.webp",
                "/_ipx/s_64x64/icons/linked.webp",
                "/_ipx/s_128x128/icons/linked.webp",
                "/_ipx/s_64x64/icons/tg.png",
                "/_ipx/s_128x128/icons/tg.png",
                "/_ipx/s_64x64/icons/twitter.webp",
                "/_ipx/s_128x128/icons/twitter.webp",
            ],
        },
    },
});
