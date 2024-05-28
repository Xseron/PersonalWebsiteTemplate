export default defineNuxtConfig({
    ssr: false, 
    devtools: { enabled: true },
    css: ["~/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css", 'animate.css/animate.min.css'],

    head: {
        title: 'David Torossyan Personal Website Software Engineer',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ],

        script: [
            {
                type: 'module',
                src: '/js/aos.js'
            }
        ]
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    build: {
      transpile: ['@fortawesome/vue-fontawesome']
    },

    modules: ["vue3-carousel-nuxt"],

    fontawesome: {
        component: "FontAwesomeIcon", 
        suffix: false, // adds 'Fa' prefix to component names to avoid conflicts, set to true if needed
        icons: {
            solid: ["farobot", "fashield-halved", "fadesktop", "faglobe"], // example icons
            brands: ["docker", "falaravel", "fajs", "fapython"], // example brand icons
        },
    },
});