export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: true },
    css: ["~/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css", "animate.css/animate.min.css", "~/assets/css/swiper-bundle.min.css"],
    app: {
        head: {
            title: "David Torossyan Portfolio",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "description", content: "Personal portfolio of David Torossyan showcasing projects and achievements." },
                { name: "keywords", content: "portfolio, David Torossyan, projects, achievements" },
                { name: "robots", content: "index,follow,noodp" },
                { name: "googlebot", content: "index,follow" },
                { name: "google", content: "nositelinkssearchbox" },
                { name: "google", content: "notranslate" },
                { name: "google-site-verification", content: "verification_token" },
                { name: "generator", content: "Nuxt.js" },
                { name: "subject", content: "Portfolio Website" },
                { property: "og:title", content: "David Torossyan Portfolio" },
                { property: "og:type", content: "website" },
                { property: "og:locale", content: "ru_RU" },
                { property: "og:url", content: "https://david-torossyan.fizmatmpd.kz/" },
                { property: "og:image", content: "https://david-torossyan.fizmatmpd.kz/images/me.webp" },
                { property: "og:description", content: "Personal portfolio of David Torossyan showcasing projects and achievements." },
                { property: "og:site_name", content: "David Torossyan Portfolio" },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:site", content: "@david_torossyan" },
                { name: "twitter:title", content: "David Torossyan Portfolio" },
                { name: "twitter:description", content: "Personal portfolio of David Torossyan showcasing projects and achievements." },
                { name: "twitter:creator", content: "@david_torossyan" },
                { name: "twitter:image", content: "https://david-torossyan.fizmatmpd.kz/images/me.webp" },
                { name: "msapplication-TileColor", content: "#da532c" },
                { name: "msapplication-TileImage", content: "/mstile-144x144.png" },
                { name: "theme-color", content: "#ffffff" },
                { name: "msapplication-navbutton-color", content: "#4285f4" },
                { name: "apple-mobile-web-app-capable", content: "yes" },
                { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
                { name: "viewport", content: "ya-title=#4e69a2,ya-dock=fade" },
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },
    
    plugins: [{ src: "@/plugins/vue-awesome-swiper", mode: "client" }],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    build: {
        transpile: ["@fortawesome/vue-fontawesome"],
        extractCSS: true,
        optimizeCSS: true,
        splitChunks: {
            layouts: true,
            pages: true,
            commons: true,
        },
        babel: {
            compact: true,
        },
    },

    modules: ["@nuxt/image-edge", "@vite-pwa/nuxt"],

    image: {
        format: ["webp"],
    },

    fontawesome: {
        component: "FontAwesomeIcon",
        suffix: false,
        icons: {
            solid: ["faRobot", "faShieldHalved", "faDesktop", "faGlobe"],
            brands: ["faDocker", "faLaravel", "faJs", "faPython"],
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

    pwa: {
        registerType: "autoUpdate",
        manifest: {
            name: "David Torossyan Portfolio",
            short_name: "DT Portfolio",
            description: "Personal portfolio of David Torossyan showcasing projects and achievements.",
            lang: "en",
            display: "standalone",
            start_url: "/",
            icons: [
                {
                    src: "/icons/icon-72x72.png",
                    sizes: "72x72",
                    type: "image/png",
                },
            ],
        },
        workbox: {
            globPatterns: ["**/*.{html,js,css,png,jpg,jpeg,svg,gif,webp}"],
            runtimeCaching: [
                {
                    urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp")$/,
                    handler: "CacheFirst",
                    options: {
                        cacheName: "image-cache",
                        expiration: {
                            maxEntries: 60,
                            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
                        },
                    },
                },
                {
                    urlPattern: /\.(?:css|js)$/,
                    handler: "StaleWhileRevalidate",
                    options: {
                        cacheName: "static-resources",
                    },
                },
                {
                    urlPattern: ({ request }) => request.mode === "navigate",
                    handler: "NetworkFirst",
                    options: {
                        cacheName: "html-cache",
                    },
                },
            ],
        },
    },
});
